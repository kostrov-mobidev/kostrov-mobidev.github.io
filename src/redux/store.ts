import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "./reducer/rootReducer";
import rootSaga from "./saga/rootSaga";

export type AppState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
const store = createStore<AppState, any, any, any>((state, action) => {
  // forcing to use initialState value for all reducers
  if (action.type === "AUTH_USER_LOGOUT") {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
