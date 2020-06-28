import { combineReducers } from "redux";
import { gameReducer, gameStateType } from "./game/gameReducer";

export type StateTypes = gameStateType;

export const rootReducer = combineReducers({
  game: gameReducer,
});

export interface RootStateType {
  game: gameStateType;
}
