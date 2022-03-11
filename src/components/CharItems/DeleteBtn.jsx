import React, { Component } from "react";

class DeleteBtn extends Component {
  render() {
    return (
      <button
        className="deleteBtn"
        onClick={() => this.props.deleteChar(this.props.charData)}
      >
        Delete
      </button>
    );
  }
}

export default DeleteBtn;
