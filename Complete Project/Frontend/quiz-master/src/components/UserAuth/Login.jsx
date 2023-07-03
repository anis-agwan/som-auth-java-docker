import React, { useContext, useEffect, useReducer, useState } from "react";
import "../UserAuth/LoginStyles.css";
import Binghamton_University_pic from "../../images/Binghamton-University-pic.jpg";
import { userNameReducer, passwordReducer } from "./AuthReducers";
import { AuthContext } from "../../store/auth-context";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { USER_ROLE } from "../../enums/role_enums";

export default function Login() {
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [userNameIsValid, setUserNameIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [userNameState, dispatchUserName] = useReducer(userNameReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: userNameIsValid } = userNameState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(userNameIsValid && passwordIsValid);
      if (formIsValid) {
        console.log("FORM OK");
      }
    }, 500);

    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [userNameIsValid, passwordIsValid, formIsValid]);

  const userNameChangeHandler = (event) => {
    dispatchUserName({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const validateUserNameHandler = () => {
    // setUserNameIsValid(enteredUserName.includes("@binghamton.edu"));
    console.log(userNameIsValid);
    dispatchUserName({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    console.log(passwordIsValid);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  // useEffect(() => {
  //   console.log("EFFECT RUNNING");

  //   return () => {
  //     console.log("EFFECT CLEANUP");
  //   };
  // }, []);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [queryParams] = useSearchParams();

  const signUpSubmitHandler = (event) => {
    event.preventDefault();
    if (queryParams.get("role") === undefined) {
      navigate("/Signup", {
        state: {
          role: USER_ROLE.STUDENT,
        },
      });
    } else if (queryParams.get("role") === USER_ROLE.FACULTY) {
      navigate("/Signup", {
        state: {
          role: USER_ROLE.FACULTY,
        },
      });
    } else if (queryParams.get("role") === USER_ROLE.ADMIN) {
      navigate("/Signup", {
        state: {
          role: USER_ROLE.ADMIN,
        },
      });
    } else {
      navigate("/Signup", {
        state: {
          role: USER_ROLE.STUDENT,
        },
      });
    }
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(formIsValid);
    // console.log(userNameState.value, userNameState.isValid);
    // console.log(passwordState.value, passwordState.isValid);

    if (formIsValid) {
      authCtx
        .onLogin(userNameState.value, passwordState.value)
        .then((response) => {
          if (response) {
            navigate("/SelectionScreen");
          }
        });
    }
  };

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
        <form id="loginForm" action="/SelectionScreen">
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
              // pattern="^[a-zA-Z0-9]+@binghamton\.edu$"
              onChange={userNameChangeHandler}
              onBlur={validateUserNameHandler}
            />
          </div>
          <label htmlFor="password" className="password">
            Password
          </label>
          <div className="passInput">
            <input
              type={"password"}
              //className="passInput"
              placeholder="*************"
              id="password"
              name="password"
              required
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className="LoginButton">
            <input
              className="LoginText"
              type="submit"
              value="Login"
              onClick={loginSubmitHandler}
            ></input>
          </div>
        </form>
        <div className="NewUserDiv" type="submit">
          <input
            type="button"
            className="NewUserClass"
            onClick={signUpSubmitHandler}
            value="New User?"
          ></input>
          <input
            type="button"
            className="SignupClass"
            onClick={signUpSubmitHandler}
            value="Signup"
          ></input>
        </div>
        <form id="ForgotPasswordForm" action="/ForgotPassword">
          <div type="submit">
            <input
              className="ForgotPasswordClass"
              type="submit"
              value="Forgot your password?"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
