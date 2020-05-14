import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }
  render() {
    return (
      <div className="Card">
        <img
          style={{ transform: this._transform }}
          src={this.props.image}
          alt={this.props.name}
        />
      </div>
    );
  }
}

export default Card;
