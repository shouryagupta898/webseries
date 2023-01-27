import { call, put } from "redux-saga/effects";
import { Action } from "../actions";
import { getShowDetail, getQuerySearch, getShows, getCast } from "../api";
import {
  ShowCastLoadedAction,
  ShowDetailLoadedAction,
  ShowsLoadedAction,
  ShowsQueryLoadedAction,
} from "../slices/Shows";
export function* getShowsSaga(): Generator<any, any, any> {
  console.log("saga running");
  const show = yield call(getShows);
  console.log("response", show);
  yield put(ShowsLoadedAction(show));
}

export function* getSearchSaga(action: Action): Generator<any, any, any> {
  console.log("saga running");

  // const shows = showsAndCast.map((item: any) => item.show);
  // console.log("response", shows);

  // yield put(ShowsQueryLoadedAction(shows));

  const query = yield call(getQuerySearch, action.payload);
  console.log("response", query);

  yield put(ShowsQueryLoadedAction(query));
}

export function* getShowDetailSaga(action: Action): Generator<any, any, any> {
  const detail = yield call(getShowDetail, action.payload);
  yield put(ShowDetailLoadedAction(detail));
}

export function* getCastSaga(action: Action): Generator<any, any, any> {
  const cast = yield call(getCast, action.payload);
  yield put(ShowCastLoadedAction(cast));
}
