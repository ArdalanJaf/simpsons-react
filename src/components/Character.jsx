import React, { Component } from "react";
import CharName from "./CharItems/CharName";
import CharQuote from "./CharItems/CharQuote";
import LikeBtn from "./CharItems/LikeBtn";
import DeleteBtn from "./CharItems/DeleteBtn";
import CharImg from "./CharItems/CharImg";
import CharLiked from "./CharItems/CharLiked";

class Character extends Component {
  state = { like: false };

  like = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const { charData } = this.props;

    return (
      <>
        {charData.characterDirection === "Left" ? (
          <CharImg charData={charData} />
        ) : null}
        <CharName charData={charData} />
        <CharQuote charData={charData} />
        {this.state.like ? <CharLiked /> : null}
        <LikeBtn likeFn={this.like} like={this.state.like} />
        <DeleteBtn
          delete={this.props.delete}
          charIndex={this.props.charIndex}
        />
        {charData.characterDirection === "Right" ? (
          <CharImg charData={charData} />
        ) : null}
      </>
    );
  }
}

export default Character;
