import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import createStore from "./store";
import FlowController from "./flow/core";

function App() {
  return <Core />;
}

function Core() {
  const store = createStore();

  return (
    <Provider store={store}>
      <FlowController />
    </Provider>
  );
}

export default App;
