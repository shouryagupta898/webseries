import { ActionCreator } from ".";

export const FETCH_SHOWS = "FETCH_SHOWS";

export const fetchShowsAction: ActionCreator = () => ({
  type: FETCH_SHOWS,
});

export const FETCH_QUERY_SEARCH = "FETCH_QUERY_SEARCH";

export const fetchQueryAction: ActionCreator<string> = (query) => ({
  type: FETCH_QUERY_SEARCH,
  payload: query,
});
export const FETCH_SHOW_DETAIL = "FETCH_SHOW_DETAIL";

export const fetchDetailAction: ActionCreator<number> = (id: number) => ({
  type: FETCH_SHOW_DETAIL,
  payload: id,
});

export const FETCH_CAST = "FETCH_CAST";

export const fetchCastAction: ActionCreator<number> = (id: number) => ({
  type: FETCH_CAST,
  payload: id,
});
