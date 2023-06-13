import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { legacy_createStore } from "redux";
import contactReducer from "./redux/reducers/ContactReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

const store = legacy_createStore(contactReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
