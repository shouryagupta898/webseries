import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { normalize, schema } from "normalizr";
import { Cast } from "../models/Cast";
import { Show } from "../models/Show";

const showsAdapter = createEntityAdapter<Show>();

// type State = {
//   loading: boolean;
//   show_loading: { [id: number]: boolean };
//   shows: { [id: number]: Show };
//   query: string;
//   searchShow: { [id: number]: Show };
//   query_shows: { [query: string]: number[] };
//   cast: { [id: number]: Cast };
// };

const initialState = showsAdapter.getInitialState({
  loading: true,
  show_loading: {} as { [id: number]: boolean },
  // shows: {},
  query: "",
  // searchShow: {}, (Adapter manage karega)
  query_shows: {} as { [query: string]: number[] },
  cast: {},
});

export type State = typeof initialState;

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    ShowsLoading: (state: State) => {
      state.loading = true;
    },
    // ShowsLoaded:()=>{}
    ShowsLoaded,
    ShowsQueryLoaded,
    ShowDetailLoaded: showsAdapter.addOne,
    ShowCastLoaded,
    fetchShows: (state: State) => {},
    fetchQuery: (state: State, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.loading = true;
    },
    fetchDetail: (state: State, action: PayloadAction<number>) => {},
    fetchCast: (state: State, action: PayloadAction<number>) => {},
  },
});

// function ShowsLoading(state: State) {
//   state.loading = false;
// }

function ShowsLoaded(state: State, action: PayloadAction<Show[]>) {
  console.log("slice running");
  state.loading = false;
  const showArr = action.payload as Show[];
  const showEntity = new schema.Entity("shows");
  const normalizedData = normalize(showArr, [showEntity]);
  // state.shows = normalizedData.entities.shows!;
  showsAdapter.addMany(state, action);
}

function ShowsQueryLoaded(state: State, action: PayloadAction<Show[]>) {
  const showArr = action.payload as Show[];
  state.query_shows[state.query] = showArr.map((s) => s.id);
  state.loading = false;

  // const searchEntity = new schema.Entity("shows");
  // const normalizedData = normalize(showArr, [searchEntity]);
  // state.query_shows[state.query] = normalizedData.result;
  // state.searchShow =
  //   { ...state.searchShow, ...normalizedData.entities.shows } || {};

  showsAdapter.addMany(state, action);
}

// function ShowDetailLoaded(state: State, action: PayloadAction<Show>) {
//   const detail = action.payload as Show;
//   state.loading = false;
//   state.searchShow[detail.id] = detail;
//   state.shows[detail.id] = detail;
// }

function ShowCastLoaded(state: State, action: PayloadAction<Cast[]>) {
  const castArr = action.payload as Cast[];
  state.loading = false;
  const castEntity = new schema.Entity("cast");
  const normalizedCast = normalize(castArr, [castEntity]);
  state.cast = normalizedCast.entities.cast || {};
}

const { actions, reducer: showsReducer } = showsSlice;

export const {
  ShowsLoading: ShowsLoadingAction,
  ShowsLoaded: ShowsLoadedAction,
  ShowsQueryLoaded: ShowsQueryLoadedAction,
  ShowDetailLoaded: ShowDetailLoadedAction,
  ShowCastLoaded: ShowCastLoadedAction,
  fetchShows: fetchShowsAction,
  fetchQuery: fetchQueryAction,
  fetchDetail: fetchDetailAction,
  fetchCast: fetchCastAction,
} = actions;
export default showsReducer;
