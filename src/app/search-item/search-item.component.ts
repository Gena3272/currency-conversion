// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

// Services
import { CustomSearchItemService } from "./services/custom-search-item.service";

// RxJS
import { debounceTime, map, takeUntil } from "rxjs/operators";
import { Observable, Subject } from "rxjs";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit, OnDestroy {
  searchUserInListGames: FormControl = new FormControl();
  listOfGames = this.customSearchItemService.listOfGames;
  resultsUserSearch: Observable<string[]>;

  private unsubscribe$ = new Subject<void>();

  constructor(private customSearchItemService: CustomSearchItemService) {}

  ngOnInit(): void {
    this.searchInList();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private searchInList(): void {
     this.resultsUserSearch = this.searchUserInListGames.valueChanges
      .pipe(
        debounceTime(100),
        map(value => this._filter(value)),
        takeUntil(this.unsubscribe$),
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.listOfGames.filter(option => option.toLowerCase().includes(filterValue));
  }
}
