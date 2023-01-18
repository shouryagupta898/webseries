import { ActionCreator } from ".";
import { Cast } from "../models/Cast";
import { Show } from "../models/Show";

export const SHOWS_LOADING = "SHOWS_LOADING";

export const ShowsLoadingAction: ActionCreator = () => ({
  type: SHOWS_LOADING,
});

export const SHOWS_LOADED = "SHOWS_LOADED";

export const ShowsLoadedAction: ActionCreator<Show[]> = (shows: Show[]) => ({
  type: SHOWS_LOADED,
  payload: shows,
});

export const SHOW_QUERY_LOADED = "SHOW_QUERY_LOADED";

export const ShowsQueryLoadedAction: ActionCreator<Show[]> = (
  searchShow: Show[]
) => ({
  type: SHOW_QUERY_LOADED,
  payload: searchShow,
});

// export const CAST_LOADED = "CAST_LOADED";

// export const CastLoadedAction: ActionCreator<Cast> = (cast: Cast) => ({
//   type: CAST_LOADED,
//   payload: cast,
// });

export const SHOW_DETAIL_LOADED = "SHOW_DETAIL_LOADED";

export const ShowDetailLoadedAction: ActionCreator<Show> = (show: Show) => ({
  type: SHOW_DETAIL_LOADED,
  payload: show,
});
