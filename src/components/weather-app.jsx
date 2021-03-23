import React, { Component } from "react";
import SearchBar from "./searchbar";
import Weather from "./weather";

class WeatherApp extends Component {
  constructor() {
    super();
    this.state = { query: null, hasSearched: false };
  }
  renderWeather = () => {
    if (this.state.hasSearched) {
      return <Weather key={this.state.query} city={this.state.query} />;
    } else {
      return <h1>Please search your city...</h1>;
    }
  };

  onSearch = () => {
    this.setState({
      query: document.getElementById("weather-city").value,
      hasSearched: true,
    });
  };
  render() {
    return (
      <div>
        {this.renderWeather()}
        <SearchBar onSearch={this.onSearch} />
      </div>
    );
  }
}

export default WeatherApp;
