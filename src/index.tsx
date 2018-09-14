import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from "./components/App";
import reducers from "./reducers";

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(reducers, devTools && devTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement("div"))
);
