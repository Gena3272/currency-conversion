// Angular
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

// RxJS
import { debounceTime, map } from "rxjs/operators";
import { Observable } from "rxjs";

// Services
import { GamesService } from "./services/games.service";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  searchGames: FormControl = new FormControl();
  gamesList = this.gameService.gamesList;
  resultGamesSearch$: Observable<string[]>;

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.setResultGameSearch();
  }

  private setResultGameSearch(): void {
     this.resultGamesSearch$ = this.searchGames.valueChanges
      .pipe(
        debounceTime(100),
        map(filterValue => this.filterGamesList(filterValue)),
      );
  }

  private filterGamesList(filterValue: string): string[] {
    return this.gamesList.filter(game => game.toLowerCase().includes(filterValue.toLowerCase()));
  }
}
