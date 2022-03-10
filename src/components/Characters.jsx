import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  inputFilter = (char) => {
    return char.character
      .toLowerCase()
      .includes(this.props.input.toLowerCase());
  };

  render() {
    return (
      <div className="charContainer">
        {this.props.apiData.filter(this.inputFilter).map((char, i) => {
          return (
            <div className="charCard" key={i}>
              <Character
                charData={char}
                charIndex={i}
                deleteChar={this.props.deleteChar}
                likeUpdater={this.props.likeUpdater}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Characters;
