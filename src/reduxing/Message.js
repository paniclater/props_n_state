import { connect } from "react-redux";
import React, { Component } from "react";

class Message extends Component {
  static defaultProps = {
    message: "Hello World",
    incrementTimes: () => {}
  };

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

export default connect(
  state => ({
    times: state.times
  }),
  dispatch => ({ incrementTimes: () => dispatch({ type: "INCREMENT" }) })
)(Message);
