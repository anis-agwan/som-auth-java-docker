// import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
import "./DDQuestions.css";
// import "./CAQuestions";

import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const user = JSON.parse(localStorage.getItem("userDetails"));

export const DDCorTemplate = (props) => {
  let navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const [ratinginputs, setratingInputs] = useState([]);

  // console.log("Printing from tem", props.rankCounter);
  // console.log("Printing from tem", props.questionsLength - 1);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [rankCounter, setRankCounter] = useState(0);
  const [rateCounter, setRateCounter] = useState(0);

  // console.log(answerCounter);
  const [DDAnswers, setDDAnswers] = React.useState({
    bingNumber: user.bingNumber,
  });

  const handleNextAnswerCounter = () => {
    setAnswerCounter(answerCounter + props.opts.length);
    setRankCounter(rankCounter + props.opts.length);
    setRateCounter(rateCounter + props.opts.length);
  };

  const handlePrevAnswerCounter = () => {
    setAnswerCounter(answerCounter - props.opts.length);
    setRankCounter(rankCounter - props.opts.length);
    setRateCounter(rateCounter - props.opts.length);
  };

  const handleChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    // console.log("ADD: ", index, event.target.value);
    console.log(props.rankCounter);
    let ques = `rankSR${rankCounter + parseInt(index) + 1}`;
    DDAnswers[ques] = answerCounter + parseInt(event.target.value);
    // console.log(CAAnswers);
    setDDAnswers({ ...DDAnswers });
    setInputs(newInputs);
  };
  const ratinghandleChange = (index, event) => {
    const newratingInputs = [...ratinginputs];
    newratingInputs[index] = event.target.value;
    let ques = `rateSR${props.rateCounter + parseInt(index) + 1}`;
    DDAnswers[ques] = parseInt(event.target.value);
    // console.log(CAAnswers);
    setDDAnswers({ ...DDAnswers });
    setratingInputs(newratingInputs);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs, ratinginputs);
  };
  let inputFields = [];
  let ratinginputFields = [];
  console.log(DDAnswers);
  for (let i = 0; i <= inputs.length; i++) {
    if (i < props.questions.Olength) {
      inputFields.push(
        <form className="form-inline">
          <label className="RankTitle" for="rank">
            Rank{i + 1} :
          </label>
          <input
            type="Number"
            placeholder="Option"
            min="1"
            max={props.opts.length}
            required
            id="rank"
            className="RankInput"
            key={i}
            value={inputs[i] || ""}
            onChange={(event) => handleChange(i, event)}
          />
          <label className="RatingTitle" for="rating">
            Rating{i + 1} :
          </label>
          <input
            type="Number"
            min="1"
            max={props.questions.Olength}
            placeholder="Rate"
            id="rating"
            className="RatingInput"
            required
            key={i * i + 1}
            value={ratinginputs[i] || ""}
            onChange={(event) => ratinghandleChange(i, event)}
          />
        </form>
      );
    }
    if (i > props.questions.Olength) {
      inputs.pop();
      ratinginputs.pop();
      //console.log("popping element");
    }
  }

  const inputBtnHandler = (question, answer) => {
    let ques = `CAQ${parseInt(question) + 1}`;
    DDAnswers[ques] = parseInt(answer);
    // console.log(CAAnswers);
    setDDAnswers({ ...DDAnswers });
  };

  const routeChange = (event) => {
    const url = "http://localhost:8446/situation_q/sq/sqData";
    axios.post(url, DDAnswers).then((response) => {
      console.log(response);
      let path = `/endScreen`;
      navigate(path);
    });
  };

  function RatingCheck(ratinginputs) {
    for (let i = 1; i < ratinginputs.length; i++) {
      if (ratinginputs[i - 1] < ratinginputs[i]) {
        // console.log("Rating "+[i]+" less than Rating "+[i+1]+" which is Invalid!\n");
        return true;
      }
      if (ratinginputs.length !== props.questions.Olength) {
        return true;
      }

      return false;
    }
  }
  function containsDuplicates(array) {
    if (array.length !== new Set(array).size) {
      return true;
    }
    if (array.length !== props.questions.Olength) {
      return true;
    }
    return false;
  }

  const [RRopen, setRROpen] = React.useState(false);

  const RRhandleClick = () => {
    if (RatingCheck(ratinginputs) || containsDuplicates(inputs)) {
      setRROpen(true);
    } else {
      setInputs([]);
      setratingInputs([]);
      handleNextAnswerCounter();
      props.nextQuestion();
      setRROpen(false);
    }
  };

  const RRPrevHandleClick = () => {
    setInputs([]);
    setratingInputs([]);
    handlePrevAnswerCounter();
    props.prevQuestion();
  };

  const RRhandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setRROpen(false);
  };

  return (
    <Grid container className="CAMainContainer">
      <Grid className="QuesClassItem">
        <h2 className="CAsituationIndex1">Section {props.ques.snum}</h2>
        <h2 className="CASituationDescription1">{props.ques.stext}</h2>
        <h2 className="CAsituationIndex2">{props.ques.psnum}</h2>
        <h2 className="CASituationDescription2">{props.questions.pst}</h2>
      </Grid>

      <Grid className="CAOptions">
        {props.opts.map((opt, idx) => {
          // console.log(opt, idx);
          return (
            <div className="OptionMainClass">
              <p className="OptionsNumber">Option {idx + 1} :</p>
              <div
                key={idx}
                className="CAoptionsArrangement"
                onClick={() => {
                  console.log(idx + 1);
                  console.log("ANS: COUNT: ", answerCounter + idx + 1);
                  props.updateScore(idx + 1);
                  props.checkAnswer(
                    props.quesNum,
                    props.questions.A,
                    opt.value,
                    idx
                  );
                  props.setClickedOption(idx + 1);
                  //props.nextQuestion();
                  inputBtnHandler(props.quesNum, idx);
                }}
              >
                <div
                  className={`Option-btn ${
                    props.clickedOption === idx + 1
                      ? "CAchecked"
                      : "CAunchecked"
                  }`}
                >
                  <div className="CAOptionsText">{opt.value}</div>
                </div>
              </div>
            </div>
          );
        })}

        {/* {props.questions.O.map((option, index) => {
          return (
            <div className="OptionMainClass">
              <p className="OptionsNumber">Option {index + 1} :</p>
              <div
                key={index}
                className="CAoptionsArrangement"
                onClick={() => {
                  console.log(index + 1);
                  props.updateScore(option.idx);
                  props.checkAnswer(
                    props.quesNum,
                    props.questions.A,
                    option.value,
                    option.idx
                  );
                  props.setClickedOption(index + 1);
                  //props.nextQuestion();
                  inputBtnHandler(props.quesNum, option.idx);
                }}
              >
                <div
                  className={`Option-btn ${
                    props.clickedOption === index + 1
                      ? "CAchecked"
                      : "CAunchecked"
                  }`}
                >
                  <div className="CAOptionsText">{option.value}</div>
                </div>
              </div>
            </div>
          );
        })} */}
      </Grid>

      <Grid item sm={12}>
        <Grid container className="CAButtonsClass">
          <div className="CAPrevBtn">
            <Button onClick={RRPrevHandleClick} disabled={props.quesNum === 0}>
              <div className="CAPrevbtnLabel"> Prev </div>
            </Button>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="RankRatingclass">
                {inputFields}
                {ratinginputFields}
              </div>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <button
                  type="submit"
                  className="CANextBtn"
                  onClick={RRhandleClick}
                  //onClick={() => props.nextQuestion()}
                  disabled={props.quesNum === props.questionsLength - 1}
                >
                  Next
                </button>
                <Snackbar
                  open={RRopen}
                  autoHideDuration={6000}
                  onClose={RRhandleClose}
                >
                  <Alert
                    onClose={RRhandleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    Invalid Rating or Rank (Rating should be unique with correct
                    options and Rank should be in descending order)
                  </Alert>
                </Snackbar>
              </Stack>
            </form>
          </div>
          {/* <div className="CANextBtn">
            <Button
            onClick={() => props.nextQuestion()}//, 
            disabled={props.quesNum === props.questionsLength - 1}
            >
            <div className="CANextBtnLabel"> Next </div>
            </Button>
        </div> */}
          <div className="CASubmitBtn">
            <Button
              onClick={routeChange}
              disabled={props.quesNum !== props.questionsLength - 1}
            >
              <p className="CASubmitBtnText">Submit Quiz</p>
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
