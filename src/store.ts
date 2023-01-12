import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import showReducer from "./reducers/show";
import sagaMiddleware, { rootSaga } from "./sagas";

const reducer = combineReducers({
  shows: showReducer,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
