import React from "react";
import dateformat from "dateformat";
import RetrieveLocation from "./RetrieveLocation";
import Header from "./Header";
import ForecastTable from "./ForecastTable";
import { retrieveWeather } from "../requests";
import { convertWindSpeed, calculateWindDirection } from "../helper";

class App extends React.Component {
  state = {
    location: "",
    weather: {
      day: null,
      date: null,
      lastUpdatedOn: null,
      cityName: null,
      currentTemp: null,
      maxTemp: null,
      minTemp: null,
      windSpeed: null,
      windDirection: null,
      humidity: null,
      actualRes: null
    }
  }

  getWeather = async () => {
    const res = await retrieveWeather(this.state['location']);
    this.updateWeather(res.body);
  }

  updateWeather = (res) => {
    console.log(res);
    const weather = { ...this.state.weather };
    weather.cityName = res.name;
    weather.currentTemp = res.main.temp;
    weather.lastUpdatedOn = dateformat(new Date(res.dt * 1000), 'dd, mmm yyyy HH:MM:ss');
    weather.date = dateformat(new Date(),'dd, mmm yyyy');
    weather.day = dateformat(new Date(),'dddd');
    weather.maxTemp= res.main.teamp_max;
    weather.minTemp= res.main.teamp_min;
    weather.humidity = res.main.humidity;
    weather.windSpeed = convertWindSpeed(res.wind.speed).toFixed(2);
    
    weather.windDirection = calculateWindDirection(res.wind.deg);
    console.log(res.wind.deg +" "+weather.windDirection);
    weather.actualRes = res;
    this.setState({ weather });
  }

  updateLocation = (newLocation) => {
    this.setState({ location: newLocation });
  }

  render() {
    return (
      <React.Fragment>
        <Header appName="The Weather App" tagLine="By Shah, Aditya" />
        <RetrieveLocation location={this.state.location} getWeather={this.getWeather} updateLocation={this.updateLocation} />
        <ForecastTable weather={this.state.weather} />
      </React.Fragment>
    );
  }
}

export default App;