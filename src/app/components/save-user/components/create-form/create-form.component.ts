// Angular
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

// RxJs
import { debounceTime, distinctUntilChanged, filter, tap } from "rxjs/operators";

// Services
import { CreateFormService } from "../../services/create-form.service";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  userForm: FormControl;

  constructor(private createFormService: CreateFormService) {}

  ngOnInit(): void {
    this.userForm = new FormControl(this.createFormService.isSaveValueInForm$.value);

    this.onUserValueChangeSubscriber();
    this.onClearValueForm();
  }

  saveDataInForm(): void {
    this.createFormService.checkSavedForm = true;
  }

  private onClearValueForm(): void {
    this.createFormService.isClose$.pipe(
      filter((v) => v),
      tap(() => this.userForm.setValue('')),
      tap(() => this.createFormService.isClose$.next(false)),
    )
      .subscribe();
  }

  private onUserValueChangeSubscriber(): void {
    this.userForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(v => this.createFormService.isSaveValueInForm$.next(v)),
        tap(() => this.createFormService.checkSavedForm = false),
      )
      .subscribe();
  }
}
