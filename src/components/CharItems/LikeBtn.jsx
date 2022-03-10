import React, { Component } from "react";

class LikeBtn extends Component {
  state = {};
  render() {
    const { charData } = this.props;

    return (
      <button
        className={`likeBtn ${charData.liked === true ? "liked" : null}`}
        onClick={() => this.props.likeUpdater(charData)}
      >
        {charData.liked === true ? "Liked!" : "Like"}
      </button>
    );
  }
}

export default LikeBtn;
