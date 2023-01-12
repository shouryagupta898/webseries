import { ActionCreator } from ".";

export const FETCH_SHOWS = "FETCH_SHOWS";

export const fetchShowsAction: ActionCreator = () => ({
  type: FETCH_SHOWS,
});
