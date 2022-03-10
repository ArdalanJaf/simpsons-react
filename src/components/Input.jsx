import React, { Component } from "react";

class Input extends Component {
  state = {};
  render() {
    return (
      <input
        className="searchInput"
        type="text"
        onInput={this.props.updateInput}
      ></input>
    );
  }
}

export default Input;
