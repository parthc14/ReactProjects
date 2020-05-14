import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";
let API_URL = `https://deckofcardsapi.com/api/deck/`;

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, cardsDrawn: [] };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    API_URL += ``;
    let response = await axios.get(`${API_URL}new/shuffle`);
    this.setState({ deck: response.data });
  }

  async getCard() {
    try {
      let cardURL = `${API_URL}${this.state.deck.deck_id}/draw/`;
      let cardResponse = await axios.get(cardURL);
      if (!cardResponse.data.success) {
        throw new Error(`No card remaining`);
      }
      let card = cardResponse.data.cards[0];
      this.setState((st) => ({
        cardsDrawn: [
          ...st.cardsDrawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} of ${card.value}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const cards = this.state.cardsDrawn.map((c) => (
      <Card key={c.id} name={c.name} image={c.image} />
    ));
    return (
      <div className="Deck">
        <h1>Card Dealer</h1>
        <h5>A little demo made with React!</h5>
        <button onClick={this.getCard}>Deal me a Card</button>
        <div className="Deck-card-area">{cards}</div>
      </div>
    );
  }
}

export default Deck;
