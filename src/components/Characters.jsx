import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  mapFilter = (char) => {
    return char.character
      .toLowerCase()
      .includes(this.props.input ? this.props.input.toLowerCase() : "");
  };

  sortOrder = (item1, item2) => {
    const first = item1.character.toLowerCase();
    const second = item2.character.toLowerCase();
    return first < second ? -1 : first > second ? 1 : 0;
  };

  render() {
    const {apiData, deleteChar, likeUpdater} = this.props;
    
    return (
      <div className="charContainer">
        {apiData
          .filter(this.mapFilter)
          .sort(this.sortOrder)
          .map((char, i) => {
            return (
              <div className="charCard" key={i}>
                <Character
                  charData={char}
                  deleteChar={deleteChar}
                  likeUpdater={likeUpdater}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default Characters;
