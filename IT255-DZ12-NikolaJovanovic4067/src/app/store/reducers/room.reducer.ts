import { EnumRoomAction, RoomActions } from "../actions/room.action";
import { initalRoomState } from "../state/room.state";

export function roomReducer(
    state = initalRoomState,
    action: RoomActions

){
    switch(action.type){
        case EnumRoomAction.GetRoomsSuccess:{
            console.log("NESTO", action.payloda)
            return{
                ...state,
                rooms:action.payloda
            };
        }
        default:
            return state;
    }
}