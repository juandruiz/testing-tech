import React, { Component } from "react";
import WeatherForm from "./weatherForm.js";
import ForecastTable from "./forecastTable.js";

class WeatherApp extends Component {
  constructor(props) {
    super(props);

    //url properties
    this.state = { zipcode: "", warning: "" };
    this.units = "&units=imperial";
    this.apikey = "&appid=1375167a8e7100796891733e7ccf8ef4";
    this.api_domain = "http://api.openweathermap.org/data/2.5/forecast?zip=";

    this.requestWeather = this.requestWeather.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
  }
  handleZipCodeChange(e) {
    this.setState({
      zipcode: e.target.value,
      forecast: {}
    });
  }
  //Example api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}

  requestWeather() {
    let url =
      this.api_domain + this.state.zipcode + ",us" + this.apikey + this.units;

    fetch(url)
      .then(response => {
        if (response.ok) {
          this.setState({ warning: "" });
          return response.json();
        } else {
          this.setState({ warning: "wrong zip code" });
          throw new Error("Something went wrong");
        }
      })
      .then(myJson => {
        let element = {};
        element.city = myJson.city.name;
        element.weather_list = [];
        myJson.list.forEach(el => {
          let date = new Date(el.dt * 1000);
          let temperature = el.main.temp;
          let weather = el.weather[0];
          let wind = el.wind;

          element.weather_list.push({
            date: date,
            temperature: temperature,
            weather: weather,
            wind: wind
          });
        });
        this.setState({
          forecast: element
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container" style={{ "margin-top": "28px" }}>
        <WeatherForm
          warning={this.state.warning}
          zipcode={this.state.zipcode}
          handleZipCodeChange={this.handleZipCodeChange}
          requestWeather={this.requestWeather}
        />
        {this.state.forecast !== undefined &&
        this.state.forecast.city !== undefined ? (
          <ForecastTable forecast={this.state.forecast} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default WeatherApp;
