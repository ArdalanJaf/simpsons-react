import React, { Component } from "react";

class DeleteBtn extends Component {
  state = {};
  render() {
    return (
      <button className="deleteBtn" onClick={this.props.delete}>
        Delete
      </button>
    );
  }
}

export default DeleteBtn;
