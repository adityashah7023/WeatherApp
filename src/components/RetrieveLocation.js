import React from "react";

class RetrieveLocation extends React.Component {
	
	addLocation = event => {
		event.preventDefault();
		this.props.updateLocation(event.currentTarget.value);
	};

	getWeather = event => {
		event.preventDefault();
		this.props.getWeather();
	}

  render() {
    const Background = "/images/banner.png";
    return(
      <div className="hero" style={{backgroundImage: `url(${Background})`}}>
				<div className="container">
					<form className="find-location" onSubmit={this.getWeather}>
						<input type="text" name ="location" value={this.props.location} onChange={this.addLocation}/>
						<input type="submit" value="Find"/>
					</form>

				</div>
			</div>
    );
  }
}

export default RetrieveLocation;