import React, { Component } from "react";
import axios from "axios";
import Character from "./Character";
import "./Character.css";

class Main extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async (num = 10) => {
    const result = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=${num}`
    );
    this.setState({ apiData: result.data });
    // console.log(this.state.apiData);
    this.replaceDoubles(result.data);
  };

  replaceDoubles = (stateData) => {
    const apiData = stateData;
    let newArr = [];
    for (let i = 0; i < apiData.length; i++) {
      if (newArr.includes(apiData[i].character)) {
        apiData.splice(i, 1);
      } else {
        newArr.push(apiData[i].character);
      }
    }
    // this.setState({ apiData });
    // // console.log(this.state.apiData);
    // console.log(apiData);
    // console.log(10 - Object.entries(apiData).length);

    // if (Object.entries(apiData).length > 10) {
    //   // this.getApiData(10 - Object.entries(apiData).length);
    //   console.log(10 - Object.entries(apiData).length);
    // }
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
