// Angular
import { Component } from '@angular/core';

// Services
import { FeedBackRequestService } from "../../../forms/services/feed-back-request.service";

@Component({
  selector: 'app-feed-back-request-dialog',
  templateUrl: './feed-back-request-dialog.component.html',
  styleUrls: ['./feed-back-request-dialog.component.scss'],
})
export class FeedBackRequestDialogComponent {
  constructor(private feedBackRequestService: FeedBackRequestService) {}

  onClearEmailForm(): void {
    this.feedBackRequestService.clearEmail$.next();
  }

  onSaveEmailForm(): void {
    this.feedBackRequestService.isSavedEmail = true;
  }
}
