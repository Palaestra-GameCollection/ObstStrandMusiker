import {
  ActionTypes,
  FETCH_DATA_FINISHED,
  fetchDataFinishedAction,
} from "./gameActions";
import { CardData } from "../../contracts/game";

export interface gameStateType {
  cards: Array<CardData>;
  words: Array<string>;
}

const initialState: gameStateType = {
  cards: [],
  words: [],
};

export function gameReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case FETCH_DATA_FINISHED:
      return setWordsAndCards(state, action);
    default:
      return state;
  }
}

function setWordsAndCards(
  state: gameStateType,
  action: fetchDataFinishedAction
): gameStateType {
  return {
    ...state,
    cards: action.payload.cards,
    words: action.payload.words,
  };
}
