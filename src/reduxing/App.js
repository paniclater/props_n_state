import { createStore } from "redux";
import { Provider } from "react-redux";
import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

import Message from "./Message";
import MessageTracker from "./MessageTracker";

const counter = (state = { times: [1] }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const time = state.times[state.times.length - 1] + 1;
      return { times: [...state.times, time] };
    default:
      return state;
  }
};

const store = createStore(counter);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <MessageTracker />
          <Message />
        </div>
      </Provider>
    );
  }
}

export default App;
