import { Pie } from "react-chartjs-2";
import React, { Component } from "react";

class PieChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Pie
        data={{
          labels: this.props.labels,
          datasets: this.props.datasets
        }}
        height="125%"
      />
    );
  }
}

export default PieChartComponent;
