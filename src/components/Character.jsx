import React, { Component } from "react";

class Character extends Component {
  state = {};
  render() {
    const { charData } = this.props;

    return (
      <div>
        <p>{charData.character}</p>
      </div>
    );
  }
}

export default Character;
