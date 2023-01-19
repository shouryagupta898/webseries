import { createSelector } from "reselect";
import { State } from "../store";

export const stateSelector = (state: State) => {
  return state.shows;
};

export const loadingSelector = createSelector(
  stateSelector,
  (state) => state.loading
);

export const showsQuerySelector = createSelector(
  stateSelector,
  (state) => state.query
);

export const showsMapSelector = createSelector(
  stateSelector,
  (state) => state.shows
);

export const showsSelector = createSelector(
  showsMapSelector,
  (normalizedShow) =>
    Object.keys(normalizedShow).map((id) => normalizedShow[+id])
);

export const searchMapSelector = createSelector(
  stateSelector,
  (state) => state.searchShow
);

export const queryShowsMapSelector = createSelector(
  stateSelector,
  (state) => state.query_shows
);

export const searchSelector = createSelector(
  searchMapSelector,
  showsQuerySelector,
  queryShowsMapSelector,
  (searchMap, query, queryShowMap) =>
    queryShowMap[query] ? queryShowMap[query].map((id) => searchMap[id]) : []
);

export const castMapSelector = createSelector(
  stateSelector,
  (state) => state.cast
);

export const castSelector = createSelector(castMapSelector, (normalizedCast) =>
  Object.keys(normalizedCast).map((id) => normalizedCast[+id])
);
