import React from "react";

class RetrieveLocation extends React.Component {
  render() {
    const Background = "/images/banner.png";
    return(
      <div className="hero" style={{backgroundImage: `url(${Background})`}}>
				<div className="container">
					<form action="#" className="find-location">
						<input type="text" placeholder="Find your location..."/>
						<input type="submit" value="Find"/>
					</form>

				</div>
			</div>
    );
  }
}

export default RetrieveLocation;