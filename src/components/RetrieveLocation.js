import React from "react";

class RetrieveLocation extends React.Component {
	locationRef = React.createRef();

	addLocation = event => {
		event.preventDefault();
		this.props.getWeather(this.locationRef);
		event.currentTarget.reset();
	};

  render() {
    const Background = "/images/banner.png";
    return(
      <div className="hero" style={{backgroundImage: `url(${Background})`}}>
				<div className="container">
					<form className="find-location" onSubmit={this.addLocation}>
						<input type="text" placeholder="Find your location..." ref={this.locationRef}/>
						<input type="submit" value="Find"/>
					</form>

				</div>
			</div>
    );
  }
}

export default RetrieveLocation;