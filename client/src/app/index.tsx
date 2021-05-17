import React from "react";
import { render } from "react-dom";
import { Routes } from "./navigation";
import { Provider } from "react-redux";

import { store } from "./init/store";

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);
