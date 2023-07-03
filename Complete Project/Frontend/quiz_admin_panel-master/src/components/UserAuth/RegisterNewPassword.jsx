import React from "react";
import "../UserAuth/ForgotPasswordStyles.css";
import Binghamton_University_pic from "../images/Binghamton-University-pic.jpg";

export default function RegisterNewPassword() {
  return (
    <div className="LoginMainComponent">
      <div className="ImageSlider">
        <img
          src={Binghamton_University_pic}
          alt="Binghamton_University"
          className="BinghamtonUniversityImage"
        />
      </div>
      <div className="UserAuth">
        <form id="loginForm" action="/">
          <h1 className="headingTitle">Login</h1>
          <p className="headText">Welcome to Leadership Assesment Program</p>
          <label htmlFor="text" className="userName">
            New Password
          </label>
          <div className="userNameInput">
            <input
              type={"text"}
              //className="userNameInput"
              placeholder="************"
              id="text"
              name="text"
              required
            />
          </div>
          <label htmlFor="password" className="password">
            Confirm Password
          </label>
          <div className="passInput">
            <input
              //type={"date"}
              //className="passInput"
              placeholder="************"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="LoginButton">
            <input className="ForgotPasswordSubmitBtn" type="submit" value="Submit"></input>
          </div>
        </form>
        <form id="signupForm" action="/Signup">
          <div className="NewUserDiv" type="submit">
            <input
              className="NewUserClass"
              type="submit"
              value="New User?"
            ></input>
            <input className="SignupClass" type="submit" value="Signup"></input>
          </div>
        </form>
        <form id="ForgotPasswordForm" action="/">
          <div type="submit">
            <input
              className="ForgotPasswordClass"
              type="submit"
              value="Existing User? Login"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
