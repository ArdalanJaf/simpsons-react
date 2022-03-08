import React, { Component } from "react";

class LikeBtn extends Component {
  state = {};
  render() {
    return (
      <button className="likeBtn" onClick={this.props.likeFn}>
        {this.props.like ? "Dislike" : "Like"}
      </button>
    );
  }
}

export default LikeBtn;
