// Angular
import { Component } from '@angular/core';

// Services
import { HomeService } from "./services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private homeService: HomeService) {}

  allowAccessInAbout(): void {
    this.homeService.allowAccessInAbout();
  }

  denyAccessInAbout(): void {
    this.homeService.denyAccessInAbout();
  }
}
