import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from './interfaces/room';
import { GetRooms } from './store/actions/room.action';
import { selectedRooms } from './store/selector/post.selector';
import { RoomState } from './store/state/room.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'IT255-DZ12-NikolaJovanovic4067';

  public rooms$:Observable<Room[]>;
  public room: Room[];

  

  
  constructor(private _store: Store<RoomState>, private _router: Router){
    this.rooms$ = this._store.pipe(select(selectedRooms));
  }

  ngOnInit(){
    this._store.dispatch(new GetRooms());
  }

}
