import { configureStore } from "@reduxjs/toolkit";
import sagaMiddleware, { rootSaga } from "./sagas";
import showsReducer from "./slices/Shows";

const store = configureStore({
  reducer: {
    shows: showsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type State = ReturnType<typeof store.getState>;

export default store;
