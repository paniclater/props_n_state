import React, { Component } from "react";

export default class Message extends Component {
  static defaultProps = {
    message: "Hello World",
    incrementTimes: () => {}
  };

  //Please don't do this
  //incrementTimes = () => this.props.incrementTimes;

  render() {
    return (
      <div className="message-container">
        {this.props.times.map(time => (
          <button
            className="message"
            key={time}
            onClick={this.props.incrementTimes}
          >
            {this.props.message} time: {time}
          </button>
        ))}
      </div>
    );
  }
}
