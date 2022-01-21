import { Action } from "@ngrx/store";
import { Room } from "src/app/interfaces/room";

export enum EnumRoomAction{
    GetRooms = '[Room] Get Rooms',
    GetRoomsSuccess = '[Room] Get Rooms Success',
}

export class GetRooms implements Action {
    public readonly type = EnumRoomAction.GetRooms;
}

export class GetRoomsSuccess implements Action {
    public readonly type = EnumRoomAction.GetRoomsSuccess;
    constructor(public payloda: Room[]){}
}

export type RoomActions = GetRooms | GetRoomsSuccess;