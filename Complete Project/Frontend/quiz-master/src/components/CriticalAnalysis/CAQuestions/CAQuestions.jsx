import "./CAQuestions.css"

import React, { useState } from "react";
import { CAData } from "./CAData";
import { Grid } from "@material-ui/core";
import CATemplate from "./CATemplate";



const CAQuetions = () => {
  let [quesNum, setQuesNum] = useState(0);
  let questions = CAData[0].questions[quesNum];
  let questionsLength = CAData[0].questions.length;
  let [questionsStatus, setQuestionsStatus] = useState(
    Array(questionsLength).fill(0)
  );

  const [score,setScore] = useState(0);
  const [clickedOption,setClickedOption] = useState(0);
  
  const checkAnswer = (questionNumber, correctAnswer, chosenValue, idx, situationQuestion1, situationIndex1) => {
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
  const updateScore=(idx)=>{
    
      setScore(score + parseInt(idx));
      //console.log(parseInt(idx)+score);
    
  };


  const nextQuestion = () => {
    //updateScore();
    setClickedOption(0);
    setQuesNum((quesNum = quesNum + 1));
  };

  const prevQuestion = () => {
    setClickedOption(0)
    setQuesNum((quesNum = quesNum - 1));
  };

  return (
    <React.Fragment>
      <Grid container>
        
        <div className="CAQuesDiscription">
          <Grid item xs={12} sm={9}>
            <CATemplate
              quesNum={quesNum}
              questions={questions}
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

export default CAQuetions;
