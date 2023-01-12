import { ActionCreator } from ".";
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
