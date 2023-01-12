import produce from "immer";
import { AnyAction } from "redux";
import { SHOWS_LOADED, SHOWS_LOADING } from "../actions/show";
import { Show } from "../models/Show";

type State = {
  loading: boolean;
  shows: Show[];
};

const initialState: State = {
  loading: true,
  shows: [],
};

function showReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case SHOWS_LOADING:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.shows = action.payload;
      });
    default:
      return state;
  }
}
export default showReducer;
