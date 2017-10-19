import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

import Message from "./Message";
import MessageTracker from "./MessageTracker";

class App extends Component {
  state = {
    times: [1]
  };

  incrementTimes = () =>
    this.setState((prevState, prevProps) => {
      const time = prevState.times[prevState.times.length - 1] + 1;
      return { times: [...prevState.times, time] };
    });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MessageTracker times={this.state.times[this.state.times.length - 1]} />
        <Message
          incrementTimes={this.incrementTimes}
          times={this.state.times}
        />
      </div>
    );
  }
}

export default App;
