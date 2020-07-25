import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../redux/ActionCreaters.js";
import WeatherDescriptor from "./WeatherDescriptor.js";
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    errmess: state.errmess,
    placeName: state.weather.placename,
    weatherMain: state.weather.weatherMain,
    weatherDescription: state.weather.weatherDescription,
    icon: state.weather.icon,
    temperature: state.weather.temperature,
    country: state.weather.country,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (cityName) => dispatch(fetchWeather(cityName)),
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.handelSearch = this.handelSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress = (event) => {
    if (event.shiftKey || event.key === "Enter") {
      event.preventDefault();
      console.log("yes");
      this.handelSearch();
    }
  };
  handelSearch() {
    this.props.fetchWeather(this.cityName.value);
  }
  render() {
    return (
      <React.Fragment>
        <div className="heading">
          <span>Weather App</span>
        </div>
        <div className="nav">
          <form onKeyDown={this.handleKeyPress}>
            <input
              placeholder="Place Name"
              type="text"
              id="pname"
              name="pname"
              onKeyDown={this.handleKeyPress}
              ref={(input) => {
                this.cityName = input;
              }}
            ></input>
          </form>
          <div
            className="search"
            onClick={() => {
              this.handelSearch();
            }}
          >
            <i class="fa fa-search fa-2x" aria-hidden="true"></i>
          </div>
        </div>
        <div className="weatherInfo">
          <WeatherDescriptor
            isLoading={this.props.isLoading}
            errmess={this.props.errmess}
            placeName={this.props.placeName}
            weatherMain={this.props.weatherMain}
            weatherDescription={this.props.weatherDescription}
            icon={this.props.icon}
            temperature={this.props.temperature}
            country={this.props.country}
          ></WeatherDescriptor>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
