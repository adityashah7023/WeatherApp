import React from "react";

class ForecastTable extends React.Component {
  render() {
    if(this.props.weather.cityName === null) return null;
    const weather = this.props.weather;
    return (
      <div className="forecast-table">
        <div className="container">
          <div className="forecast-container">
            <div className="today forecast">
              <div className="forecast-header">
                <div className="day">{weather.day}</div>
                <div className="date">{weather.date}</div>
              </div>
              <div className="forecast-content">
                <div className="location">{weather.cityName}</div>
                <div className="degree">
                  <div className="num">{weather.currentTemp.toFixed(0)}<sup>o</sup>C</div>
                  <div className="forecast-icon">
                    <img src="images/icons/icon-1.svg" alt="" width="90" />
                  </div>
                </div>
                <span><img src="images/icon-umberella.png" alt="" />{weather.humidity}%</span>
                <span><img src="images/icon-wind.png" alt="" />{weather.windSpeed} km/h</span>
                <span><img src="images/icon-compass.png" alt="" />{weather.windDirection}</span>
              </div>
              <div className="forecast-header">
                <div className="date">Last Updated: {weather.lastUpdatedOn}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForecastTable;