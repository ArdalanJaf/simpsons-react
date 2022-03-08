import React, { Component } from "react";
import "./Character.css";

class Character extends Component {
  state = { like: false };

  render() {
    const { charData } = this.props;

    return (
      <div className="charCard" key={this.props.key}>
        <h2 className="charName">{charData.character}</h2>
        <q className="charQuote">{charData.quote}</q>
        {this.state.like ? <p>You like!</p> : null}
        <button
          className="likeBtn"
          onClick={() => this.setState({ like: !this.state.active })}
        >
          Like
        </button>
        <button className="deleteBtn" onClick={this.props.delete}>
          Delete
        </button>
        <img
          className={`charImg ${
            charData.characterDirection === "Left" ? "leftImg" : "rightImg"
          }`}
          src={charData.image}
          alt={charData.character}
        />
      </div>
    );
  }
}

export default Character;
