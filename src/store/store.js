import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();

const DEBUG = process.env.NODE_ENV === "development";

const middleware = [thunkMiddleware, DEBUG && loggerMiddleware].filter(Boolean);

//export default function configureStore(preloadedState) {
export default createStore(
  rootReducer,
  //preloadedState,
  applyMiddleware(...middleware)
);
//}
