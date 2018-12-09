import React from "react";
import RetrieveLocation from "./RetrieveLocation";
import Header from "./Header";
import ForecastTable from "./ForecastTable";

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Header appName="The Weather App" tagLine="By Shah, Aditya"/>
        <RetrieveLocation />
        <ForecastTable />
      </React.Fragment>
    );
  }
}

export default App;