import React, { Component } from "react";
import axios from "axios";
import Character from "./Character";
import "./Character.css";
import Input from "./Input";

class Main extends Component {
  state = { input: "", likes: {} };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async (num = 10) => {
    const result = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=${num}`
    );
    this.setState({ apiData: result.data });
  };

  delete = (charIndex, quote) => {
    const apiData = this.state.apiData;
    apiData.splice(charIndex, 1);
    this.setState({ apiData });

    const likes = this.state.likes;
    delete likes[quote];
    this.setState({ likes });
  };

  updateInput = (event) => {
    this.setState({ input: event.target.value });
  };

  inputFilter = (char) => {
    return char.character.toLowerCase().includes(this.state.input);
  };

  likeUpdater = (quote) => {
    const likes = this.state.likes;
    likes[quote] =
      likes[quote] === undefined || likes[quote] === false ? true : false;
    this.setState({ likes });
  };

  render() {
    if (!this.state.apiData) return <p className="main">Loading...</p>;

    const { apiData } = this.state;
    const { likes } = this.state;
    const totalLikes = Object.values(likes).filter(
      (char) => char === true
    ).length;

    return (
      <div className="main">
        <Input updateInput={this.updateInput} input={this.state.input} />

        {totalLikes > 0 ? (
          <p class="totalLikes">
            Total likes:
            {totalLikes}
          </p>
        ) : null}

        <div className="charContainer">
          {apiData.filter(this.inputFilter).map((char, i) => {
            return (
              <div className="charCard" key={i}>
                <Character
                  charData={char}
                  charIndex={i}
                  delete={this.delete}
                  likeUpdater={this.likeUpdater}
                  likes={likes}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
