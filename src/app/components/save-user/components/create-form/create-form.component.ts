// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

// RxJs
import { debounceTime, distinctUntilChanged, takeUntil, tap } from "rxjs/operators";

// Services
import { StoreChangeFormService } from "../../services/store-change-form.service";
import { Subject } from "rxjs";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit, OnDestroy {
  userForm: FormControl;

  private unsubscribe$ = new Subject<void>();

  constructor(private storeChangeFormService: StoreChangeFormService) {}

  ngOnInit(): void {
    this.userForm = new FormControl(this.storeChangeFormService.saveDataForm$.value);

    this.onUserValueChangeSubscriber();
    this.onClearValueFormSubscriber();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSaveValueForm(): void {
    this.storeChangeFormService.isSaved = true;
  }

  private onClearValueFormSubscriber(): void {
    this.storeChangeFormService.clearForm$.pipe(
      tap(() => this.userForm.setValue('')),
      takeUntil(this.unsubscribe$),
    )
      .subscribe();
  }

  private onUserValueChangeSubscriber(): void {
    this.userForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(userValue => this.storeChangeFormService.saveDataForm$.next(userValue)),
        tap(() => this.storeChangeFormService.isSaved = false),
        takeUntil(this.unsubscribe$),
      )
      .subscribe();
  }
}
