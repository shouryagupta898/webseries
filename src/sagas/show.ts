import { call, put } from "redux-saga/effects";
import { Action } from "../actions";
import { ShowsLoadedAction } from "../actions/show";
import { getShows } from "../api";
function* getShowsSaga(action: Action): Generator<any, any, any> {
  const show = yield call(getShows);
  console.log("show", show);
  const putData = yield put(ShowsLoadedAction(show));
  console.log("putData", putData);
}
export default getShowsSaga;
