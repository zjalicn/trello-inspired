import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import ListsReducer from "./reducers/ListsReducer";

const store = createStore(combineReducers({ListsReducer}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
