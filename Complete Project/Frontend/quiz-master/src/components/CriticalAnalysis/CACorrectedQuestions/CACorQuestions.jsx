import "./CAQuestions.css";

import React, { useState } from "react";
import { CAData } from "./CAData";
import { Grid, makeStyles } from "@material-ui/core";
import { CACorTemplate } from "./CACorTemplate";
import Paper from "@material-ui/core/Paper";
import { CAShowNoOfQuestions } from "./CAShowNoOfQuestions";
import { grey } from "@material-ui/core/colors";
import { useLocation } from "react-router-dom";

const pageStyle = makeStyles((theme) => ({
  rightPanel: {
    padding: "0.4rem",
  },
  NoOfQuestions: {
    backgroundColor: grey[100],
    height: "97.5%",
    padding: "0.6rem",
    margin: "0.6rem",
    boxShadow: "0px 6px 16px #E9E9E9",
    borderRadius: "12px",
  },
}));

const CACorQuestions = () => {
  const location = useLocation();
  let [quesNum, setQuesNum] = useState(0);

  const question = location.state.questions[quesNum];

  // const [question, setSingleQuestion] = useState();

  const classes = pageStyle();
  let questions = CAData[0].questions[quesNum];
  let questionsLength = CAData[0].questions.length;
  let [questionsStatus, setQuestionsStatus] = useState(
    Array(questionsLength).fill(0)
  );

  const [progress, setProgress] = React.useState(10);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);

  const checkAnswer = (
    questionNumber,
    correctAnswer,
    chosenValue,
    idx,
    sectionQuestion,
    sectionIndex
  ) => {
    //console.log(questionNumber + 1, chosenValue, idx, sectionQuestion, sectionIndex);
    // console.log(chosenValue);
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
      // console.log(newArrayValues);
      return newArrayValues;
    });
  };
  const updateScore = (idx) => {
    setScore(score + parseInt(idx));
    // console.log(parseInt(idx));
  };

  const nextQuestion = () => {
    //updateScore();
    setClickedOption(0);
    setQuesNum((quesNum = quesNum + 1));
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 0 : ((quesNum + 1) / questionsLength) * 100
    );
  };

  const prevQuestion = () => {
    setClickedOption(0);
    setQuesNum((quesNum = quesNum - 1));
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 0 : ((quesNum + 1) / questionsLength) * 100
    );
  };

  return (
    <React.Fragment>
      <Grid container>
        <div>
          <Grid item sm={3} className={"DDQuesNavItems1"}>
            <Paper className={classes.NoOfQuestions}>
              <CAShowNoOfQuestions
                quesNum={quesNum}
                questionsLength={questionsLength}
                questionsStatus={questionsStatus}
              />
            </Paper>
          </Grid>
        </div>
        <div className="DDQuesDiscription">
          <Grid item xs={12} sm={9}>
            <CACorTemplate
              progress={progress}
              quesNum={quesNum}
              questions={questions}
              que={question}
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

export default CACorQuestions;
