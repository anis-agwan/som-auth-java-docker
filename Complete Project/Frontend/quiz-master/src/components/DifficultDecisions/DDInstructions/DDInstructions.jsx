import React, { useState, useEffect } from "react";
import "./DDInstructions.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function DDInstructions() {
  //const inputRef = useRef(null)
  const navigate = useNavigate();

  const [DDQuestions, setDDQuestions] = useState([]);
  const baseURL = "http://localhost:8446/situation_q/sq";
  const getQuestionsHandler = async () => {
    await axios
      .get(`${baseURL}/getSQuestions`)
      .then((res) => {
        setDDQuestions(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getQuestionsHandler();
  }, []);

  const onNextClickHandler = () => {
    navigate("/DDCorQuestions", {
      state: {
        ddQues: DDQuestions,
      },
    });
  };

  return (
    <div className="ddMainContainer">
      <div className="ddTitleContainer">
        <h1 className="ddTitleText">INSTRUCTIONS</h1>
      </div>
      <div className="ddInstructionContainer">
        <p className="ddInstructionText">
          This section contains 11 situations along with several possible ways
          of handling the situation. Read each situation carefully and then read
          each response and rate the desirability of that response using the
          scale provided.
          <br />
          <br />
          To make your response click on the circle under the appropriate
          rating.
          <br />
          <br />
          Be sure to make a response to every statement, even if you have to
          guess at some.
          <br />
          <br />
          Click on the button below to go to the first scenario.
        </p>
        <div className="ddinputForm">
          {/* <input ref={inputRef} className='ddinputText' required pattern="[b,B]{1}[0-9]{8}" type="text" placeholder='Please enter your B-Number'/> */}
          <div className="ddStartQuizButton">
            <button className="ddStartQuizText" onClick={onNextClickHandler}>
              Start A Quiz
            </button>
            {/* <input
              className="ddStartQuizText"
              type="submit"
              value="Start Quiz"
            ></input> */}
          </div>
        </div>
      </div>
    </div>
  );
}
