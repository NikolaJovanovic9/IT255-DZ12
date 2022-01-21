import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from 'src/app/interfaces/room';
import { RoomService } from 'src/app/services/room.service';
import { GetRooms } from 'src/app/store/actions/room.action';
import { selectedRooms, selectHoteli } from 'src/app/store/selector/post.selector';
import { RoomState } from 'src/app/store/state/room.state';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit {

  public rooms$: Observable<Room[]>;
  public rooms: Room[];

  userPrice: string = "";

  constructor(private _store: Store<RoomState>, private _router: Router) {
    this.rooms$ = this._store.pipe(select(selectedRooms));
    this.rooms$.subscribe(val => {
      this.rooms = JSON.parse(JSON.stringify(val));

    })
  }

  ngOnInit() {
    this._store.dispatch(new GetRooms());
  }


  shuffle(array: Room[]): boolean {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return false;
  }

  public addRoom(room: Room) {
    this.rooms.push(room);
  }

  public deleteRoom(room: Room) {
    this.rooms = this.rooms.filter(item => {
      return item.roomNumber !== room.roomNumber
    })
  }

  public updateRoom(room: Room) {
    let index = this.rooms.findIndex(i => i.roomNumber === room.roomNumber);
    console.log("Ime",this.rooms[index].name);
    this.rooms[index].name = "Promjena";
  }

  trackByFn(customParam: any, index: any, item: any) {
    return item[customParam];
  }

}
