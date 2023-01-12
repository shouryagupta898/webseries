import { createSelector } from "reselect";
import { State } from "../store";

export const stateSelector = (state: State) => {
  return state.shows;
};

export const loadingSelector = createSelector(
  stateSelector,
  (state) => state.loading
);

export const showsSelector = createSelector(
  stateSelector,
  (state) => state.shows
);
