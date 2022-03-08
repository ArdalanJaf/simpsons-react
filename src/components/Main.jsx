import React, { Component } from "react";
import axios from "axios";
import Character from "./Character";

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
    console.log(this.state.apiData);
  };

  render() {
    if (!this.state.apiData) return <p>Loading...</p>;

    const { apiData } = this.state;

    return (
      <div className="charContainer">
        {apiData.map((char) => {
          return <Character const charData={char} />;
        })}
      </div>
    );
  }
}

export default Main;
