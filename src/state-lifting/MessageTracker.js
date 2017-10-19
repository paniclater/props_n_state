import React, { Component } from "react";

export default class Message extends Component {
  static defaultProps = {
    times: 0
  };

  render() {
    return (
      <div className="message-container">
        <h1>Message has been sent {this.props.times} times</h1>
      </div>
    );
  }
}
