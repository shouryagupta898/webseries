import createSagaMiddleware from "redux-saga";
import { debounce, takeEvery } from "redux-saga/effects";
import {
  FETCH_CAST,
  FETCH_QUERY_SEARCH,
  FETCH_SHOWS,
  FETCH_SHOW_DETAIL,
} from "../actions/saga";
import {
  getCastSaga,
  getSearchSaga,
  getShowDetailSaga,
  getShowsSaga,
} from "./show";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeEvery(FETCH_SHOWS, getShowsSaga);
  yield debounce(300, FETCH_QUERY_SEARCH, getSearchSaga);
  yield takeEvery(FETCH_SHOW_DETAIL, getShowDetailSaga);
  yield takeEvery(FETCH_CAST, getCastSaga);
}

export default sagaMiddleware;
