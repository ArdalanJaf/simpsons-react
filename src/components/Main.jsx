import React, { Component } from "react";
import axios from "axios";
import Character from "./Character";
import "./Character.css";

class Main extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const result = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
    );
    this.setState({ apiData: result.data });
    // console.log(this.state.apiData);
  };

  delete = (charIndex) => {
    const apiData = this.state.apiData;
    apiData.splice(charIndex, 1);
    this.setState({ apiData });
  };

  render() {
    if (!this.state.apiData) return <p>Loading...</p>;

    const { apiData } = this.state;

    return (
      <div className="charContainer">
        {apiData.map((char, i) => {
          return (
            <div className="charCard" key={i}>
              <Character charData={char} charIndex={i} delete={this.delete} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
