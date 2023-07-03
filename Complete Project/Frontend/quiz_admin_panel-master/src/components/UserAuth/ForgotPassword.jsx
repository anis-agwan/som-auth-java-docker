import React from "react";
import "../UserAuth/ForgotPasswordStyles.css";
import Binghamton_University_pic from "../images/Binghamton-University-pic.jpg";

export default function ForgotPassword() {
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
        <form id="loginForm" action="/RegisterNewPassword">
          <h1 className="headingTitle">Login</h1>
          <p className="headText">Welcome to Leadership Assesment Program</p>
          <label htmlFor="email" className="userName">
            B-mail
          </label>
          <div className="userNameInput">
            <input
              type={"email"}
              //className="userNameInput"
              placeholder="xyz@binghamton.edu"
              id="email"
              name="email"
              required
              pattern="^[a-zA-Z0-9]+@binghamton\.edu$"
            />
          </div>
          <div className="GenerateTokenDiv">
            <button className="GenerateTokenButton"><p>Generate Token</p></button>
          </div>
          </form>
          <form id="loginForm" action="/RegisterNewPassword">
          <label htmlFor="password" className="TokenLabel">
            Token {"(12-digit)"}
          </label>
          <div className="TokenInput">
            <input
              //type={"date"}
              //className="passInput"
              placeholder="************"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="FPLoginButton">
            <input className="ForgotPasswordSubmitBtn" type="submit" value="Submit"></input>
          </div>
        </form>
        <form id="signupForm" action="/Signup">
          <div className="FPNewUserDiv" type="submit">
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
              className="FPForgotPasswordClass"
              type="submit"
              value="Existing User? Login"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
