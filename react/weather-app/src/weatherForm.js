import React, { Component } from "react";

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="zipcode">Zip Code</label>
          <input
            type="text"
            className="form-control"
            value={this.props.zipcode}
            onChange={this.props.handleZipCodeChange}
            placeholder="Enter zip code"
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.requestWeather}
        >
          Submit
        </button>
        <br />
        <br />
        <div style={{ color: "red", marginLeft: "6px" }}>
          {this.props.warning}
        </div>
      </form>
    );
  }
}

export default WeatherForm;
