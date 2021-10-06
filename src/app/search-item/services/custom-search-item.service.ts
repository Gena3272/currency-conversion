// Angular
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomSearchItemService {
  listOfGames: string[] =
    [ 'World of Warcraft', 'League of Legends',
      'Dota 2', 'Heroes Of The Storm', 'HeartStone',
      'Counter-Strike: Global Offensive',
    ];
}
