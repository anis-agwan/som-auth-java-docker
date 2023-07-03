import "./DDQuestions.css";

import React, { useState } from "react";
import { DDData } from "./DDData";
import { Grid } from "@material-ui/core";
import { DDCorTemplate } from "./DDCorTemplate";
import { useLocation } from "react-router-dom";

export const DDCorQuestions = () => {
  const location = useLocation();

  let [quesNum, setQuesNum] = useState(0);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [rankCounter, setRankCounter] = useState(0);
  const [rateCounter, setRateCounter] = useState(0);
  const question = location.state.ddQues[quesNum];
  // console.log(location.state.ddQues[quesNum]);

  function createOptionsArr(q) {
    let arr = [];
    for (const [key, value] of Object.entries(q)) {
      if (key === "r1Text" && value !== null) {
        arr.push({
          r1Text: "r1Text",
          value: value,
        });
      } else if (key === "r2Text" && value !== null) {
        arr.push({
          r2Text: "r2Text",
          value: value,
        });
      } else if (key === "r3Text" && value !== null) {
        arr.push({
          r3Text: "r3Text",
          value: value,
        });
      } else if (key === "r4Text" && value !== null) {
        arr.push({
          r4Text: "r4Text",
          value: value,
        });
      } else if (key === "r5Text" && value !== null) {
        arr.push({
          r5Text: "r5Text",
          value: value,
        });
      } else if (key === "r6Text" && value !== null) {
        arr.push({
          r6Text: "r6Text",
          value: value,
        });
      }
    }

    return arr;
    // console.log(arr);
  }

  const opts = createOptionsArr(question);

  let questions = DDData[0].questions[quesNum];
  let questionsLength = location.state.ddQues.length;
  let [questionsStatus, setQuestionsStatus] = useState(
    Array(questionsLength).fill(0)
  );

  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);

  const checkAnswer = (
    questionNumber,
    correctAnswer,
    chosenValue,
    idx,
    situationQuestion1,
    situationIndex1
  ) => {
    //console.log(questionNumber + 1, chosenValue, idx, situationQuestion1, situationIndex1);

    setQuestionsStatus(() => {
      let newArrayValues = questionsStatus.map((val, index) => {
        if (questionNumber === index) {
          if (correctAnswer === chosenValue) {
            return 1;
          } else {
            return -1;
          }
        } else {
          return val;
        }
      });
      return newArrayValues;
    });
  };
  const updateScore = (idx) => {
    setScore(score + parseInt(idx));
    //console.log(parseInt(idx)+score);
  };

  const nextQuestion = () => {
    //updateScore();
    setAnswerCounter(answerCounter + 5);
    setRankCounter(rankCounter + 5);
    setRateCounter(rateCounter + 5);
    setClickedOption(0);
    setQuesNum((quesNum = quesNum + 1));
  };

  const prevQuestion = () => {
    setAnswerCounter(answerCounter - 5);
    setRankCounter(rankCounter - 5);
    setRateCounter(rateCounter - 5);
    setClickedOption(0);
    setQuesNum((quesNum = quesNum - 1));
  };

  return (
    <React.Fragment>
      <Grid container>
        <div className="CAQuesDiscription">
          <Grid item xs={12} sm={9}>
            <DDCorTemplate
              quesNum={quesNum}
              questions={questions}
              ques={question}
              opts={opts}
              rankCounter={rankCounter}
              rateCounter={rateCounter}
              questionsLength={questionsLength}
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
              questionsStatus={questionsStatus}
              checkAnswer={checkAnswer}
              setClickedOption={setClickedOption}
              clickedOption={clickedOption}
              updateScore={updateScore}
            />
          </Grid>
        </div>
      </Grid>
    </React.Fragment>
  );
};
