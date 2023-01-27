import createSagaMiddleware from "redux-saga";
import { debounce, takeEvery } from "redux-saga/effects";
import {
  fetchCastAction,
  fetchDetailAction,
  fetchQueryAction,
  fetchShowsAction,
} from "../slices/Shows";
import {
  getCastSaga,
  getSearchSaga,
  getShowDetailSaga,
  getShowsSaga,
} from "./show";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  console.log("rootSaga called");
  yield takeEvery(fetchShowsAction, getShowsSaga);
  yield debounce(300, fetchQueryAction, getSearchSaga);
  yield takeEvery(fetchDetailAction, getShowDetailSaga);
  yield takeEvery(fetchCastAction, getCastSaga);
}

export default sagaMiddleware;
