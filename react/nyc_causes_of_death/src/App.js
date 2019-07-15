import React, { Component } from "react";
import PieChartComponent from "./PieChart.js";
import "./App.css";
import MyHeader from "./MyHeader.js";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataModal from "./DataModal";
import MySelect from "./MySelect.js";
import Table from "react-bootstrap/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: "",
      sex: "",
      ethnicity: "",
      year: "",
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: []
        }
      ]
    };

    this.url = "https://data.cityofnewyork.us/resource/uvxr-2jwn.json";
    this.apikeyid = "5qe5vvz9xyfp4w5jg26lkmh33";
    this.apikeysecret = "1jlympfc5mc5rqllqyt3fscsnkxu8h1d702nbeb5v23a832fgi";

    this.handleChange = this.handleChange.bind(this);
    this.requestData = this.requestData.bind(this);
    this.updateChart = this.updateChart.bind(this);
  }

  handleChange(e) {
    let change = {};

    change[e.target.name] = e.target.value;
    this.setState(change, this.requestData);
  }
  updateChart(myJson) {
    if (myJson.length === 0) {
      this.setState({ warning: "No data available" });
    } else {
      this.setState({ warning: "" });
    }
    let data = {};
    let labels = [];
    let datasets_data = [];
    let datasets_background = [];
    for (let item of myJson) {
      if (!isNaN(parseInt(item["deaths"]))) {
        //if disease does not exist yet, create it and assign 0
        if (!data.hasOwnProperty(item["leading_cause"])) {
          data[item["leading_cause"]] = 0;
        }
        //counter of deaths of a certain disease
        data[item["leading_cause"]] += parseInt(item["deaths"]);
      }
    }
    for (let disease in data) {
      labels.push(disease);
      datasets_data.push(data[disease]);
      //generate random color for pie chart
      datasets_background.push(
        "#" + Math.floor(Math.random() * 16777215).toString(16)
      );
    }
    this.setState({
      labels: labels,
      data: datasets_data,
      datasets: [
        {
          data: datasets_data,
          backgroundColor: datasets_background
        }
      ]
    });
  }

  requestData() {
    let data = [];
    let url = this.url;
    let params = "";

    if (this.state.ethnicity !== "") {
      data.push("race_ethnicity=" + this.state.ethnicity);
    }
    if (this.state.sex !== "") {
      if (this.state.year === "2015" || this.state.year === "2016") {
        let sex = this.state.sex === "M" ? "Male" : "Female";
        data.push("sex=" + sex);
      } else {
        data.push("sex=" + this.state.sex);
      }
    }
    if (this.state.year !== "") {
      data.push("year=" + this.state.year);
    }
    if (data.length > 0) {
      params = "?" + data.join("&");
      params = encodeURI(params);
      url = url + params;
    }
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(myJson => {
        this.updateChart(myJson);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.requestData();
  }

  render() {
    let pie_chart;
    let table = "";
    let table_data = "";
    if (this.state.warning !== "") {
      pie_chart = <Alert variant="danger">{this.state.warning}</Alert>;
    } else {
      table_data = this.state.labels.map((label, key) => (
        <tr key={key}>
          <td>{label}</td>
          <td>{this.state.data[key]}</td>
        </tr>
      ));
      table = (
        <Table striped bordered hover variant="dark">
          <thead className="thead-dark">
            <tr>
              <td
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "yellow"
                }}
              >
                Disease
              </td>
              <td
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "yellow"
                }}
              >
                Deaths
              </td>
            </tr>
          </thead>
          <tbody>{table_data}</tbody>
        </Table>
      );
      pie_chart = (
        <PieChartComponent
          labels={this.state.labels}
          datasets={this.state.datasets}
        />
      );
    }
    return (
      <Container>
        <Row style={{ marginTop: "33px" }}>
          <MyHeader />
        </Row>
        <Row style={{ marginBottom: "33px" }}>
          <Col>
            <MySelect
              title="Sex"
              name="sex"
              options={["All", "Male", "Female"]}
              values={["", "M", "F"]}
              handleChange={this.handleChange}
            />
          </Col>
          <Col>
            <MySelect
              title="Year"
              name="year"
              options={[
                "All",
                "2007",
                "2008",
                "2009",
                "2010",
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016"
              ]}
              values={[
                "",
                "2007",
                "2008",
                "2009",
                "2010",
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016"
              ]}
              handleChange={this.handleChange}
            />
          </Col>
          <Col>
            <MySelect
              title="Ethnicity"
              name="ethnicity"
              options={[
                "All",
                "Asian and Pacific Islander",
                "Black Non-Hispanic",
                "Hispanic",
                "Not Stated/Unknown",
                "Other Race/ Ethnicity",
                "White Non-Hispanic"
              ]}
              values={[
                "",
                "Asian and Pacific Islander",
                "Black Non-Hispanic",
                "Hispanic",
                "Not Stated/Unknown",
                "Other Race/ Ethnicity",
                "White Non-Hispanic"
              ]}
              handleChange={this.handleChange}
            />
          </Col>
          <Col>
            <DataModal table={table} />
          </Col>
        </Row>

        <Row>
          <Col>{pie_chart}</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
