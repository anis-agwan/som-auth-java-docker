import React, { Component } from "react";
import DSCN5677 from "../../images/DSCN5677.JPG";
import "./endScreenStyles.css";
import { Link } from "react-router-dom";
export default class endScreen extends Component {
  render() {
    return (
      <div>
        <div className="EndScreenBackgroundImage">
          <img className="UniImage" src={DSCN5677} alt="UniversityPic" />
        </div>
        <div className="CongratsDiv">
          <label className="CongratsHead">Congratulations!</label>
          <label className="CongratsText">
            Your quiz has been submitted successfully!
          </label>
          <div className="DashboardBtn"></div>
          <Link className="DashboardBtnText" to={"/SelectionScreen"}>
            <label className="DashboardBtnText">Go To Dashboard</label>
          </Link>
        </div>
      </div>
    );
  }
}
