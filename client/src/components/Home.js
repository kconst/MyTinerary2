import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Home extends Component {
  render() {
    console.log("Welcome to MyTinerary!");
    return (
      <div id="page-wrap">
        <img
          src="https://i.ibb.co/YkJZTt2/MYtinerary-Logo.png"
          alt="MyTineraryLogo"
          className="logo"
        />
        <h3>
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </h3>
        <h2>Start Browsing</h2>
        <NavLink to="/cities">
          <img
            src="https://i.ibb.co/25T69mS/circled-right-2.png"
            alt="arrow-right"
            className="arrow-right"
          />
        </NavLink>
      </div>
    );
  }
}

export default Home;
