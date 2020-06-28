import { CardData } from "../../contracts/game";

export const FETCH_DATA_REQUESTED = "FETCH_DATA_REQUESTED";
export const FETCH_DATA_FINISHED = "FETCH_DATA_FINISHED";

export interface fetchDataAction {
  type: typeof FETCH_DATA_REQUESTED;
}
export interface fetchDataFinishedAction {
  type: typeof FETCH_DATA_FINISHED;
  payload: { words: Array<string>; cards: Array<CardData> };
}

export function fetchData(): fetchDataAction {
  return {
    type: FETCH_DATA_REQUESTED,
  };
}
export function fetchDataFinished(
  words: Array<string>,
  cards: Array<CardData>
): fetchDataFinishedAction {
  return {
    type: FETCH_DATA_FINISHED,
    payload: { words, cards },
  };
}

export type ActionTypes = fetchDataAction | fetchDataFinishedAction;
