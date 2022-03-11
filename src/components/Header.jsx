import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    // return <h1>The Simpsons</h1>;
    return (
      <img
        src="https://cdn.glitch.me/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2Fsimpsons.PNG"
        alt="The Simpsons title"
        className="title"
      ></img>
    );
  }
}

export default Header;
