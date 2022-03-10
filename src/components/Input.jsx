import React, { Component } from "react";

class Input extends Component {
  state = {};
  render() {
    return (
      <input
        className="searchInput"
        type="text"
        value={this.props.input}
        onChange={this.props.updateInput}
      ></input>
    );
  }
}

export default Input;
