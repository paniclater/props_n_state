import { connect } from "react-redux";
import React, { Component } from "react";

class MessageTracker extends Component {
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

export default connect(state => ({
  times: state.times[state.times.length - 1] * 2
}))(MessageTracker);
