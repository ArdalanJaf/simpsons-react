import React, { Component } from "react";

class CharImg extends Component {
  state = {};
  render() {
    const { charData } = this.props;
    return (
      <img
        className={`charImg ${
          charData.characterDirection === "Left" ? "leftImg" : "rightImg"
        }`}
        src={charData.image}
        alt={charData.character}
      />
    );
  }
}

export default CharImg;
