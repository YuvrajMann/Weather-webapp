import { createStore, applyMiddleware } from "redux";
import { Weather } from "./resState";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const configureStore = () => {
  const store = createStore(Weather, applyMiddleware(thunk, logger));
  return store;
};
