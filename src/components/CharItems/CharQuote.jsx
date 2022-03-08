import React, { Component } from "react";

class CharQuote extends Component {
  state = {};
  render() {
    return <q className="charQuote">{this.props.charData.quote}</q>;
  }
}

export default CharQuote;
