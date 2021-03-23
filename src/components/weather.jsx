import React, { Component } from "react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import CJumboTron from "@coreui/react/es/jumbotron/CJumbotron";
import "./weather.css";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
      isLoaded: false,
      notFound: false,
    };
  }

  componentDidMount() {
    var obj = this;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=a383609701d82d19d252c27c48d7a7d7&?units=metric`
      )
      .then((json) => {
        console.log(json);
        obj.setState({
          date: new Date(),
          weather: json.data.weather,
          main: json.data.main,
          isLoaded: true,
          notFound: false,
        });
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 404) {
          obj.setState({ isLoaded: true, notFound: true });
        }
      });
  }

  getIcon = (description) => {
    return {
      "clear sky": (this.state.date.getHours() + 6) % 24 <= 12 ? "moon" : "sun",
      "few clouds":
        (this.state.date.getHours() + 6) % 24 <= 12 ? "moon" : "sun",
      "scattered clouds": "cloud",
      "broken clouds": "cloudy",
      "overcast clouds": "cloudy",
      "shower rain": "rain",
      rain: "rain",
      thunderstorm: "bolt",
      snow: "snow",
      mist: "align-center",
    }[description];
  };

  kelvinConverter = (temp) => {
    return (temp - 273.15).toFixed(1);
  };

  loadItems = () => {
    if (this.state.notFound) {
      return <h1>Could not find city...</h1>;
    } else if (!this.state.isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <React.Fragment>
          <h1 className="display-4">
            <CIcon
              name={`cil-${this.getIcon(this.state.weather[0].description)}`}
              className="i"
            />
            {this.kelvinConverter(this.state.main.temp)} °C
          </h1>

          <h2 className="lead">{this.state.weather[0].description}</h2>
          <hr className="my-4" />
          <div>
            <p>
              Feels like {this.kelvinConverter(this.state.main.feels_like)} °C
            </p>
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <CJumboTron className="border">
        <h2>{this.props.city}</h2>
        {this.loadItems()}
      </CJumboTron>
    );
  }
}

export default Weather;
