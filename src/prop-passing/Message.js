import React, { Component } from "react";

export default class Message extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    message: "Hello World"
  };

  state = {
    times: [1]
  };

  incrementTimes = () =>
    this.setState((prevState, prevProps) => {
      const time = prevState.times[prevState.times.length - 1] + 1;
      return { times: [...prevState.times, time] };
    });

  componentDidMount() {}

  componentWillReceiveProps() {}

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="message-container">
        {this.state.times.map(time => (
          <button className="message" key={time} onClick={this.incrementTimes}>
            {this.props.message} time: {time}
          </button>
        ))}
      </div>
    );
  }
}
