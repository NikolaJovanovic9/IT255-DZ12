import { ActionReducerMap } from "@ngrx/store";
import { RoomState } from "../state/room.state";
import { roomReducer } from "./room.reducer";

export const rootReducer = {};

export interface AppState{
    room: RoomState;
};

export const reducers: ActionReducerMap< AppState, any>={
    room:roomReducer
};