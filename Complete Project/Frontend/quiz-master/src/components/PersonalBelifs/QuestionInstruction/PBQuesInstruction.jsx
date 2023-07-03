import React, { useEffect, useState } from "react";
import "../QuestionInstruction/PBQuestionInstructionStyles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PBQuesInstruction() {
  let navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const baseURL = "http://localhost:8442/personal-beliefs/pb/";
  const getQuestionsHandler = async () => {
    await axios
      .get(`${baseURL}getQuestions`)
      .then((res) => {
        setQuestions(res.data);
        console.log(questions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getQuestionsHandler();
  }, []);

  const onNextClickHandler = () => {
    navigate("/PBQuiz", {
      state: {
        questions: questions,
      },
    });
  };

  return (
    <div className="MainContainer">
      <div className="TitleStyle">
        <h1 className="TitleText">PERSONAL BELIEFS QUIZ</h1>
      </div>
      <div className="InstructionStyle">
        <p className="InstructionText">
          This section contains a number of statements about various issues. You
          need to select the extent to which you agree or disagree with each
          statement. There are no right or wrong answers in this section. Read
          each statement and respond accurately and candidly. Using the rating
          scale given, chose the answer that matches the extent of your
          agreement.
          <br />
          <br />
          Enter the B-Number and Click on the button below to go to the Personal
          Beliefs Statements.
        </p>
        <div className="inputStyle">
          <div className="StartQuizButton">
            <button className="StartQuizText" onClick={onNextClickHandler}>
              Start A Quiz
            </button>
            {/* <input
              className="StartQuizText"
              type="submit"
              value="Start Quiz"
              onSubmit={() => {
                console.log("Hi");
              }}
            ></input> */}
          </div>
        </div>
      </div>
    </div>
  );
}
