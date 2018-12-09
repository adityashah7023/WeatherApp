import React from "react";
import RetrieveLocation from "./RetrieveLocation";
import Header from "./Header";
import ForecastTable from "./ForecastTable";

class App extends React.Component {
  state = {
    location: null
  }

  getWeather = (city) => {
    //Weather.getCurrent(city, function(current){ 
      console.log(city);
    //});
  }

  render(){
    return (
      <React.Fragment>
        <Header appName="The Weather App" tagLine="By Shah, Aditya"/>
        <RetrieveLocation getWeather={this.getWeather}/>
        <ForecastTable />
      </React.Fragment>
    );
  }
}

export default App;