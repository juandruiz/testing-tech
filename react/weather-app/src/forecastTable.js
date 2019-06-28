import React, { Component } from "react";

class ForecastTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    this.month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    this.formatDate = this.formatDate.bind(this);
    this.getRecommendationForClothing = this.getRecommendationForClothing.bind(
      this
    );
  }
  getRecommendationForClothing(description, temperature) {
    let result = [];
    if (
      ["rain", "thunderstorm", "shower rain", "light rain"].includes(
        description
      )
    ) {
      result.push("Raincoat or Umbrella");
    } else if (
      ["clear sky", "few clouds", "broken clouds", "scattered clouds"].includes(
        description
      )
    ) {
      if (temperature > 77) {
        result.push("t-shirt", "shorts");
      }
    }
    if (temperature >= 63 && temperature <= 77) {
      result.push("casual");
    }
    if (temperature < 63) {
      result.push("Jacket");
      if (temperature < 40) {
        result.push("gloves", "scarf");
      }
    }
    return result.join(",");
  }
  formatDate(date) {
    let day = this.weekday[date.getDay()];
    let month = this.month[date.getMonth()];
    let calendar_day = date.getDate();
    let hour = this.formatHour(date.getHours());
    let result = `${day}, ${month} ${calendar_day}. ${hour}`;
    return result;
  }
  formatHour(hour) {
    if (hour > 12) {
      hour = hour - 12;
      return hour + "pm";
    }
    return hour + "am";
  }
  render() {
    return (
      <div>
        <h3>
          5 day / 3 hour forecast for&nbsp;
          <span style={{ color: "red" }}>{this.props.forecast.city}</span>
        </h3>
        <table className="table table-bordered table-dark">
          <thead className="thead-light">
            <tr>
              <th>Day</th>
              <th>Description</th>
              <th>Temperature</th>
              <th>What should I wear?</th>
            </tr>
          </thead>
          <tbody>
            {this.props.forecast.weather_list.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={require("./weather_icons/" +
                      item.weather.icon +
                      ".png")}
                    style={{ height: 66, width: 66 }}
                  />
                  <br />
                  {this.formatDate(item.date)}
                </td>
                <td>{item.weather.description}</td>
                <td>{item.temperature}</td>
                <td>
                  {this.getRecommendationForClothing(
                    item.weather.description,
                    item.temperature
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ForecastTable;
