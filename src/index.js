import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";
import "./global.less";

render();

if (module.hot) {
  module.hot.accept("./App.js", () => {
    render();
  });
}

if (ENV === "PROD" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("service-worker registed");
      })
      .catch(error => {
        console.log("service-worker registed error");
      });
  });
}

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,
    document.getElementById("root")
  );
}
