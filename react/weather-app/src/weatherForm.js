import React, { Component } from "react";

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.requestWeather = this.requestWeather.bind(this);
  }
  requestWeather() {
    fetch("api.openweathermap.org/data/2.5/forecast?zip=94040,us")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="zipcode">Zip Code</label>
          <input
            type="text"
            className="form-control"
            id="zipcode"
            placeholder="Enter zip code"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.requestWeather}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default WeatherForm;
