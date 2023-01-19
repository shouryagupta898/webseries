import { call, put } from "redux-saga/effects";
import { Action } from "../actions";
import {
  ShowCastLoadedAction,
  ShowDetailLoadedAction,
  ShowsLoadedAction,
  ShowsQueryLoadedAction,
} from "../actions/show";
import { getShowDetail, getQuerySearch, getShows, getCast } from "../api";
export function* getShowsSaga(): Generator {
  const show = yield call(getShows);
  yield put(ShowsLoadedAction(show));
}

export function* getSearchSaga(action: Action): Generator<any, any, any> {
  const query = yield call(getQuerySearch, action.payload);
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
