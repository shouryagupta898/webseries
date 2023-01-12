import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { FETCH_SHOWS } from "../actions/saga";
import getShowsSaga from "./show";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeEvery(FETCH_SHOWS, getShowsSaga);
}

export default sagaMiddleware;
