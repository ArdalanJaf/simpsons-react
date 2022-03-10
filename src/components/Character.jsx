import React, { Component } from "react";
import CharName from "./CharItems/CharName";
import CharQuote from "./CharItems/CharQuote";
import LikeBtn from "./CharItems/LikeBtn";
import DeleteBtn from "./CharItems/DeleteBtn";
import CharImg from "./CharItems/CharImg";
import CharLiked from "./CharItems/CharLiked";

class Character extends Component {
  render() {
    const { charData } = this.props;
    return (
      <>
        {charData.characterDirection === "Left" ? (
          <CharImg charData={charData} />
        ) : null}
        <CharName charData={charData} />
        <CharQuote charData={charData} />
        {this.props.likes[charData.quote] === true ? <CharLiked /> : null}
        <LikeBtn
          likeUpdater={this.props.likeUpdater}
          likes={this.props.likes}
          quote={charData.quote}
        />
        <DeleteBtn
          delete={this.props.delete}
          charIndex={this.props.charIndex}
          quote={charData.quote}
        />
        {charData.characterDirection === "Right" ? (
          <CharImg charData={charData} />
        ) : null}
      </>
    );
  }
}

export default Character;
