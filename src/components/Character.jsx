import React, { Component } from "react";
import CharName from "./CharItems/CharName";
import CharQuote from "./CharItems/CharQuote";
import LikeBtn from "./CharItems/LikeBtn";
import DeleteBtn from "./CharItems/DeleteBtn";
import CharImg from "./CharItems/CharImg";

class Character extends Component {
  render() {
    const { charData, likeUpdater, deleteChar } = this.props;
    return (
      <>
        <CharName charData={charData} />
        <CharQuote charData={charData} />
        <LikeBtn charData={charData} likeUpdater={likeUpdater} />
        <DeleteBtn charData={charData} deleteChar={deleteChar} />
        <CharImg charData={charData} />
      </>
    );
  }
}

export default Character;
