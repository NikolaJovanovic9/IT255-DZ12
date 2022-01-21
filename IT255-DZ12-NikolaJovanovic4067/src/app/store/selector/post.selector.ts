import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RoomState } from "../state/room.state";

const selectRooms = (state: any) => state.room;

export const selectedRooms = createSelector(
    selectRooms,
    (state: RoomState) => { 
        //return state.room.state; 
        //return state?.hasOwnProperty('rooms') ? state.rooms:'';
        console.log("Statre", state.rooms)
        return state.rooms;
    }
);

export const selectHoteli  = createSelector(
    createFeatureSelector('rooms'), 
    (state: RoomState) => {
      
        return state.rooms;
    }


);