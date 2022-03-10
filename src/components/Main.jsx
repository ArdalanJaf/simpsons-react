import React, { Component } from "react";
import axios from "axios";
import Joi from "joi";
import Input from "./Input";
import TotalLikes from "./TotalLikes";
import Characters from "./Characters";
// import "./Character.css";

class Main extends Component {
  state = { input: "" };
  //how do i not pre-write input into state?

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const result = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
    );
    this.setState({ apiData: result.data });
  };

  deleteChar = (charIndex) => {
    const apiData = this.state.apiData;
    apiData.splice(charIndex, 1);
    this.setState({ apiData });
  };

  likeUpdater = (propChar) => {
    let index = this.state.apiData.findIndex((stateChar) => {
      return (
        stateChar.character === propChar.character &&
        stateChar.quote === propChar.quote
      );
    });
    const apiData = [...this.state.apiData];
    apiData[index].liked = apiData[index].liked ? undefined : true;
    this.setState({ apiData });
  };

  updateInput = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    if (!this.state.apiData) return <p className="main">Loading...</p>;

    const { apiData, input } = this.state;

    return (
      <div className="main">
        <Input updateInput={this.updateInput} input={input} />

        <TotalLikes apiData={apiData} />

        <Characters
          deleteChar={this.deleteChar}
          likeUpdater={this.likeUpdater}
          input={input}
          apiData={apiData}
        />
      </div>
    );
  }
}

export default Main;
