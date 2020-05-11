import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";
class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };
  state = {
    currCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0,
  };

  handleClick = () => {
    this.flipCoin();
  };

  flipCoin = () => {
    const newCoin = choice(this.props.coins);
    this.setState((currCoin) => {
      return {
        currCoin: newCoin,
        nFlips: currCoin.nFlips + 1,
        nHeads: currCoin.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: currCoin.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  };
  render() {
    return (
      <div className="Coin-container">
        <h1>Let's flip a coin!</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}> Click me!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
