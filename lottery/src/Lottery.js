import React, { Component } from "react";
import LottoBall from "./LottoBall";
import "./Lottery.css";
class LotteryBall extends Component {
  state = { nums: Array.from({ length: this.props.numBalls }) };
  static defaultProps = {
    title: "Lottery",
    numBalls: 6,
    maxNum: 40,
  };

  handleClick = () => {
    this.setState((currState) => ({
      nums: currState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  };

  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((b) => (
            <LottoBall num={b} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default LotteryBall;
