import produce from "immer";
// import { normalize, schema } from "normalizr";
// import { AnyAction } from "redux";
// import
// SHOWS_LOADED,
// SHOWS_LOADING,
// SHOW_CAST_LOADED,
// SHOW_DETAIL_LOADED,
// SHOW_QUERY_LOADED,
// "../actions/show";
// import { Cast } from "../models/Cast";
// import { Show } from "../models/Show";

// type State = {
//   loading: boolean;
//   show_loading: { [id: number]: boolean };
//   shows: { [id: number]: Show };
//   query: string;
//   searchShow: { [id: number]: Show };
//   query_shows: { [query: string]: number[] };
//   cast: { [id: number]: Cast };
// };

// const initialState: State = {
//   loading: true,
//   show_loading: {},
//   shows: {},
//   query: "",
//   searchShow: {},
//   query_shows: {},
//   cast: {},
// };

// function showReducer(state = initialState, action: AnyAction): State {
//   switch (action.type) {
// case SHOWS_LOADING:
//   return produce(state, (draft) => {
//     draft.loading = true;
//   });
// case SHOWS_LOADED:
//   return produce(state, (draft) => {
//     draft.loading = false;
//     const showArr = action.payload as Show[];
//     const showEntity = new schema.Entity("shows");
//     const normalizedData = normalize(showArr, [showEntity]);
//     draft.shows = normalizedData.entities.shows!;
//   });
// case FETCH_QUERY_SEARCH:
//   return produce(state, (draft) => {
//     draft.query = action.payload;
//     draft.loading = true;
//   });
// case SHOW_QUERY_LOADED:
//   return produce(state, (draft) => {
//     draft.loading = false;
//     const showArr = action.payload as Show[];
//     const searchEntity = new schema.Entity("shows");
//     const normalizedData = normalize(showArr, [searchEntity]);
//     draft.query_shows[draft.query] = normalizedData.result;
//     draft.searchShow =
//       { ...draft.searchShow, ...normalizedData.entities.shows } || {};
//   });
// case SHOW_DETAIL_LOADED:
//   return produce(state, (draft) => {
//     const detail = action.payload as Show;
//     draft.loading = false;
//     draft.searchShow[detail.id] = detail;
//     draft.shows[detail.id] = detail;
//   });
// case SHOW_CAST_LOADED:
//   return produce(state, (draft) => {
//     const castArr = action.payload as Cast[];
//     const castEntity = new schema.Entity("cast");
//     const normalizedCast = normalize(castArr, [castEntity]);
//     draft.cast = normalizedCast.entities.cast || {};
//   });
//     default:
//       return state;
//   }
// }
// export default showReducer;
