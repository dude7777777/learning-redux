import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Frontend/Store";
import Client from "./Frontend/Client";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Client />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
