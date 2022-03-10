import React, { Component } from "react";

class LikeBtn extends Component {
  state = {};
  render() {
    return (
      <button
        className="likeBtn"
        onClick={() => this.props.likeUpdater(this.props.quote)}
      >
        {this.props.likes[this.props.quote] === true ? "Dislike" : "Like"}
      </button>
    );
  }
}

export default LikeBtn;
