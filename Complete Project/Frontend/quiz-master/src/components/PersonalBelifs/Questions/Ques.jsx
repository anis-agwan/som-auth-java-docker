import React, { useState } from "react";
import "../Questions/QuesStyles.css";
import { PBdata } from "./PBdata";
import { Grid, makeStyles } from "@material-ui/core";
import Template from "./Template";
import Paper from "@material-ui/core/Paper";
import ShowNoOfQuestions from "./ShowNoOfQuestions";
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

const Ques = () => {
  const location = useLocation();
  const classes = pageStyle();
  let [quesNum, setQuesNum] = useState(0);
  const question = location.state.questions[quesNum];
  // const [questions, setQ ] = useState(question)
  let questions = PBdata[0].questions[quesNum];
  const qLength = location.state.questions.length;
  let questionsLength = PBdata[0].questions.length;
  let [questionsStatus, setQuestionsStatus] = useState(
    Array(questionsLength).fill(0)
  );

  const [progress, setProgress] = React.useState(10);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);

  // console.log(qLength);
  const checkAnswer = (questionNumber, correctAnswer, chosenValue, idx) => {
    // console.log(questionNumber + 1, chosenValue, idx);

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
    // console.log(parseInt(idx));
    // console.log(parseInt(idx) + score);
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
          <Grid item sm={3} className={"QuesNavItems1"}>
            <Paper className={classes.NoOfQuestions}>
              <ShowNoOfQuestions
                quesNum={quesNum}
                questionsLength={qLength}
                questionsStatus={questionsStatus}
              />
            </Paper>
          </Grid>
        </div>
        <div className="QuesDiscription">
          <Grid item xs={12} sm={9}>
            <Template
              progress={progress}
              quesNum={quesNum}
              questions={questions}
              question={question}
              questionsLength={qLength}
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

export default Ques;
