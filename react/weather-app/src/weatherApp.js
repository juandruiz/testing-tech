import React, { Component } from "react";
import WeatherForm from "./weatherForm.js";
import Forecast from "./forecast.js";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <WeatherForm />
        <Forecast />
      </div>
    );
  }
}

export default WeatherApp;
