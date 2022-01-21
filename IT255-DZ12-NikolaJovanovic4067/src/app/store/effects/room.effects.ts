import { Injectable } from "@angular/core";
import { RoomService } from "src/app/services/room.service";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects"
import { EnumRoomAction, GetRooms, GetRoomsSuccess } from "../actions/room.action";
import { of } from "rxjs";
import { Room } from "src/app/interfaces/room";
import { switchMap } from "rxjs/operators";


@Injectable()
export class RoomEffect {
    constructor(private _actions$: Actions, private _roomService: RoomService) {

    }


    getRooms$ = createEffect(() =>
        this._actions$.pipe(
            ofType<GetRooms>(EnumRoomAction.GetRooms),
            switchMap(() => this._roomService.fetchRooms()),
            switchMap((roomHttp: Room[]) => {
                return of(new GetRoomsSuccess(roomHttp))
            })
        )
    )
}