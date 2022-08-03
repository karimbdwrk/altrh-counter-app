import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      limit: this.props.limit
    };
  }

  handleIncrement = (value) => {
    let score = this.state.score
    let limit = this.state.limit
    
    if (score < limit && score + value <= limit) {
        this.setState({ score: score + value });
    } else if (score < limit && score + value >= limit ) {
        this.setState({ score: limit });
    }
  };

  handleDecrement = (value) => {
    let score = this.state.score
    if (score > 0) {
        this.setState({ score: score - value });
    }
  };

  handleReload = (value) => {
    this.setState({ score: value });
  };

  render() {

    let score = this.state.score

    return (
      <div className="counter">
        <div className="score">{score}</div>
        <div className="buttons">
          <button onClick={() => this.handleDecrement(1)}>-1</button>
          <button onClick={() => this.handleIncrement(1)}>+1</button>
          <button onClick={() => this.handleIncrement(5)}>+5</button>
          <button onClick={() => this.handleIncrement(10)}>+10</button>
        </div>
        <div className="reload">
          <button onClick={() => this.handleReload(0)}>reload</button>
        </div>
      </div>
    );
  }
}
