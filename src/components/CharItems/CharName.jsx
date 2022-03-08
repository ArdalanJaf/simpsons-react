import React, { Component } from "react";

class CharName extends Component {
  state = {};
  render() {
    return <h2 className="charName">{this.props.charData.character}</h2>;
  }
}

export default CharName;
