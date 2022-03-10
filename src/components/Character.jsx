import React, { Component } from "react";
import CharName from "./CharItems/CharName";
import CharQuote from "./CharItems/CharQuote";
import LikeBtn from "./CharItems/LikeBtn";
import DeleteBtn from "./CharItems/DeleteBtn";
import CharImg from "./CharItems/CharImg";

class Character extends Component {
  render() {
    const { charData, charIndex, likeUpdater, deleteChar } = this.props;
    return (
      <>
        {/* <div className="textBox"> */}
        <CharName charData={charData} />
        <CharQuote charData={charData} />
        <LikeBtn charData={charData} likeUpdater={likeUpdater} />
        <DeleteBtn deleteChar={deleteChar} charIndex={charIndex} />
        {/* </div> */}
        <CharImg charData={charData} />
      </>
    );
  }
}

export default Character;
