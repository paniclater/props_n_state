import React, { Component } from "react";

export default class Message extends Component {
  static defaultProps = {
    times: 0
  };

  state = {
    componentTimes: 0
  };

  componentDidMount() {
    this.setState((prevState, prevProps) => ({
      componentTimes: prevProps.times * 2
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    //I don't love this, but its not the worst.
    //We're not reconciling and syncing state and props, we're comparing props and setting state conditionally

    if (prevProps.times !== this.props.times) {
      this.setState((prevState, prevTimes) => ({
        componentTimes: this.props.times * 2
      }));
    }

    //DO NOT DO THIS
    if (prevProps.times === this.state.componentTimes) {
      //stuff
    }

    //DO NOT DO THIS
    if (prevProps.times !== this.state.componentTimes) {
      //stuff
    }
  }

  incrementComponentTimes = () => {
    this.setState((prevState, prevProps) => ({
      componentTimes: prevState.componentTimes + 1
    }));
  };

  render() {
    return (
      <div className="message-container">
        <h1 onClick={this.incrementComponentTimes}>
          Message has been sent {this.props.times} times
        </h1>
        <h1>Component Times: {this.state.componentTimes}</h1>
      </div>
    );
  }
}
