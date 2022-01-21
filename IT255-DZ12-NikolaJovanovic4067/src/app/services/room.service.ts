import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../interfaces/room';
import {HttpClient} from '@angular/common/http'
import { select, Store } from '@ngrx/store';
import { selectedRooms } from '../store/selector/post.selector';
import { RoomState } from '../store/state/room.state';
//import { Roome } from '../model/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  public rooms$: Observable<Room[]>;
  //rooms: Roome[] = [];

  constructor(private _http: HttpClient, private _store: Store<RoomState>) {
    this.rooms$ = this._store.pipe(select(selectedRooms));
   }

   public fetchRooms(): Observable<Room []>{
    //this.rooms = [
    //  new Roome("12B", "Lente", 4, 10, 125),
    //  new Roome("37D", "Djidjeno", 2, 12, 45),
    //  new Roome("42F", "Mat", 3, 9, 76),
    //  new Roome("5A", "Lente", 4, 8, 154)
    //];
     //return  this._http.get<Roome[]>(this.rooms);''
     return this._http.get<Room[]>('http://localhost:3000/rooms');
   }

   public getPrice(numberOfNights: number){
    return numberOfNights;
  }
}
