// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

// RxJs
import { debounceTime, distinctUntilChanged, takeUntil, tap } from "rxjs/operators";

// Services
import { FeedBackRequestService } from "../../services/feed-back-request.service";
import { Subject } from "rxjs";

@Component({
  selector: 'app-feed-back-request',
  templateUrl: './feed-back-request.component.html',
  styleUrls: ['./feed-back-request.component.scss'],
})
export class FeedBackRequestComponent implements OnInit, OnDestroy {
  emailForm: FormControl;

  private unsubscribe$ = new Subject<void>();

  constructor(private feedBackRequestService: FeedBackRequestService) {}

  ngOnInit(): void {
    this.emailForm = new FormControl(this.feedBackRequestService.email$.value);

    this.onEmailChangeSubscriber();
    this.onClearEmailFormSubscriber();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSaveEmail(): void {
    this.feedBackRequestService.isSavedEmail = true;
  }

  private onClearEmailFormSubscriber(): void {
    this.feedBackRequestService.clearEmail$.pipe(
      tap(() => this.emailForm.setValue('')),
      takeUntil(this.unsubscribe$),
    )
      .subscribe();
  }

  private onEmailChangeSubscriber(): void {
    this.emailForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(email => this.feedBackRequestService.email$.next(email)),
        tap(() => this.feedBackRequestService.isSavedEmail = false),
        takeUntil(this.unsubscribe$),
      )
      .subscribe();
  }
}
