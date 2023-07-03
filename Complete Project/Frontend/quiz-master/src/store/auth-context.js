import axios from "axios";
import React, { useEffect, useState } from "react";
import { USER_ROLE } from "../enums/role_enums";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (userName, password) => {},
  onSignup: (userName, password, fName, lName) => {},
});

export const AuthContextProvider = (props) => {
  const baseURL = "http://localhost:8440/login-register/";

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userDetails");
    setLoggedIn(false);
  };

  const loginHandler = async (userName, password) => {
    const url = `${baseURL}login/verify-user`;
    const user = {
      emailId: userName,
      password: password,
    };

    // try {
    //   let res = await axios.post(url, user);
    //   // console.log(res.data["validationIndicator"]);
    //   let newUser = res.data;

    //   if (newUser["validationIndicator"] === "Invalid") {
    //     // throw new Error("Invalid Login");
    //     console.log("ERROR");
    //     alert("Invalid Login");
    //   } else if (newUser["validationIndicator"] === "Valid") {
    //     console.log("SUCCESS");
    //     localStorage.setItem("user", JSON.stringify(res.data));
    //     localStorage.setItem("isLoggedIn", "1");
    //   }
    //   // if (newUser["validationIndicator"] === "Valid") {
    //   //   console.log(res.data);
    //   //   localStorage.setItem("user", JSON.stringify(res.data));
    //   //   localStorage.setItem("isLoggedIn", "1");
    //   // } else if (newUser["validationIndicator"] === "Invalid") {
    //   //   throw new Error("Invalid Login");
    //   // }

    //   // localStorage.setItem("user", JSON.stringify(res.data));
    //   // localStorage.setItem("isLoggedIn", "1");

    //   // return true;
    // } catch (err) {
    //   console.log(err.response.data);
    //   // return false;
    // }

    let islog = false;

    await axios
      .post(url, user)
      .then((response) => {
        // console.log(response.data);
        let newUser = response.data;
        if (newUser["validationIndicator"] === "Invalid") {
          islog = false;
          throw new Error(
            "Invalid Login, Please check your email and password"
          );
        } else if (newUser["validationIndicator"] === "Valid") {
          console.log("SUCCESS");
          localStorage.setItem("userDetails", JSON.stringify(response.data));
          localStorage.setItem("isLoggedIn", "1");
          setLoggedIn(true);
          islog = true;
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
        islog = false;
      });

    return islog;
  };

  const signUpHandler = async (
    userName,
    bNum,
    fName,
    lName,
    password,
    userRole
  ) => {
    let url = `${baseURL}register/user`;
    if (userRole === USER_ROLE.ADMIN) {
      console.log("ADMIN Auth");
      url = url + `?role=${USER_ROLE.ADMIN}`;
    } else if (userRole === USER_ROLE.FACULTY) {
      console.log("Faculty Auth");
      url = url + `?role=${USER_ROLE.FACULTY}`;
    } else if (userRole === USER_ROLE.STUDENT) {
      console.log("STUD Auth");
      url = url + `?role=${USER_ROLE.STUDENT}`;
    }

    console.log(url);

    const user = {
      emailId: userName,
      bingNumber: bNum,
      firstName: fName,
      lastName: lName,
      password: password,
    };

    // console.log(user);
    let islog = false;

    await axios
      .post(url, user)
      .then((response) => {
        console.log(response.data);
        user.role = userRole;
        localStorage.setItem("userDetails", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "1");
        setLoggedIn(true);
        islog = true;
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
        islog = false;
      });

    return islog;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onSignup: signUpHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// For merge purposes
