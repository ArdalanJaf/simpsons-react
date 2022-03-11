import React, { Component } from "react";
import axios from "axios";
import Joi from "joi";
import Input from "./Input";
import TotalLikes from "./TotalLikes";
import Characters from "./Characters";
import { joiDataReorder } from "../util";

class Main extends Component {
  state = { errors: {} };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const result = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
    );
    this.setState({ apiData: result.data });
  };

  indexFinder = (propChar) => {
    return this.state.apiData.findIndex((stateChar) => {
      return (
        stateChar.character === propChar.character &&
        stateChar.quote === propChar.quote
      );
    });
  };

  deleteChar = (propChar) => {
    const apiData = this.state.apiData;
    let index = this.indexFinder(propChar);
    apiData.splice(index, 1);
    this.setState({ apiData });
  };

  likeUpdater = (propChar) => {
    let index = this.indexFinder(propChar);
    const apiData = [...this.state.apiData];
    apiData[index].liked = apiData[index].liked ? undefined : true;
    this.setState({ apiData });
  };

  updateInput = async (event) => {
    const input = { input: event.target.value };

    this.setState({ ...input });

    const schema = {
      input: Joi.string()
        .min(0)
        .max(10)
        .pattern(/^([^0-9]*)$/),
    };

    const _joiInstance = Joi.object(schema);
    try {
      await _joiInstance.validateAsync(input);
      this.setState({ errors: {} });
    } catch (errors) {
      this.setState({ errors: joiDataReorder(errors.details) });
    }
  };

  render() {
    if (!this.state.apiData) return <p className="main">Loading...</p>;

    const { apiData, input, errors } = this.state;

    return (
      <div className="main">
        <Input updateInput={this.updateInput} />
        {errors.input && <p>{errors.input}</p>}
        {/* {<p>{errors.input}</p>} */}

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
