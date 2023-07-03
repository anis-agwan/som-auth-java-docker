//import React from "react"
//import Paper from "@material-ui/core/Paper";
//import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
//import { pageStyle } from "./Style.jsx";
import { useNavigate } from "react-router-dom";
import "./QuesStyles.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import "./QuesStyles.css";
import "./Ques";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ minWidth: 35 }}>
      <Typography variant="body2">
        <label className="ProgressBarText">{`${Math.round(
          props.value
        )}%`}</label>
      </Typography>
    </Box>
  );
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 50,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.mode === "light" ? "#005941" : "#F2F2F2",
  },
}));

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const user = JSON.parse(localStorage.getItem("userDetails"));

const Template = (props) => {
  //let classes = pageStyle();

  // console.log(props.question.quesDesc);
  // const user = localStorage.getItem("userDetails");
  let navigate = useNavigate();

  const routeChange = (event) => {
    console.log(user.bingNumber);
    const url = "http://localhost:8442/personal-beliefs/pb/pbData/";
    axios.post(url, pbAnswers).then((response) => {
      console.log(response);
      let path = `/endScreen`;
      navigate(path);
    });
  };

  // console.log(user);

  const [pbAnswers, setPBAnswers] = useState({
    bingNumber: user.bingNumber,
    firstName: user.firstName,
    lastName: user.lastName,
    // pbQ53: 4,
  });

  console.log(pbAnswers);

  const inputBtnHandler = (question, answer) => {
    let ques = `pbQ${parseInt(question) + 1}`;
    pbAnswers[ques] = parseInt(answer);
    // console.log(pbAnswers);
    setPBAnswers({ ...pbAnswers });
  };

  return (
    <Grid container>
      <div className="progressBarContainer">
        <h4 className="Progresstitle">Progress</h4>
        <Box sx={{ width: "100%" }}>
          <BorderLinearProgress
            className="ProgressBarStyle"
            variant="determinate"
            value={props.progress}
          />
          <LinearProgressWithLabel value={props.progress} />
        </Box>
      </div>
      <Grid item sm={12} className="QuesClassItem">
        <h5 className="QuesDisplay110">Question {props.quesNum + 1}</h5>
        {/* <h5 className="QuesDisplay110">Question {props.q.questionNumber}</h5> */}
        <h3 className="QuesDisplay111">{props.question.quesDesc}</h3>
        {/* <h3 className="QuesDisplay111">{props.q.questionDescription}</h3> */}
      </Grid>

      <Grid item sm={12}>
        <Grid container className="PBOptions">
          <Grid item sm={12}>
            {props.question.options.map((option, index) => {
              return (
                <div
                  button
                  key={index}
                  className="optionsArrangement"
                  onClick={() => {
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
                  <Typography
                    className={`PBOption-btn ${
                      props.clickedOption === index + 1
                        ? "checked"
                        : "unchecked"
                    }`}
                  >
                    <div className="pbOptionsText">
                      {/*index+1*/}
                      {option.value}
                    </div>
                  </Typography>
                </div>

                /* <div key={index} className="optionsArrangement">
                  <input
                    type="radio"
                    name="radio"
                    id="my_radio_button_id1"
                    className={classes.options}
                    // onClick={
                    //   () => nextBtnHandler(props.quesNum, option.idx)
                    // }
                    onClick={() => {
                      props.checkAnswer(
                        props.quesNum,
                        props.questions.A,
                        option.value,
                        option.idx
                      );
                      inputBtnHandler(props.quesNum, option.idx);
                    }}
                  />
                  <label htmlFor="my_radio_button_id1">{option.value}</label>
                </div> */
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      <Grid item sm={12}>
        <Grid container className="PBButtonsClass">
          <div className="PrevBtn">
            <Button
              onClick={() => props.prevQuestion()}
              disabled={props.quesNum === 0}
            >
              <div className="PrevbtnLabel"> Prev </div>
            </Button>
          </div>
          <div className="NextBtn">
            <Button
              onClick={() => props.nextQuestion()}
              disabled={props.quesNum === props.questionsLength - 1}
            >
              <div className="NextBtnLabel"> Next </div>
            </Button>
          </div>
        </Grid>
        <div className="SubmitBtn">
          <Button
            onClick={routeChange}
            disabled={props.quesNum !== props.questionsLength - 1}
          >
            <p className="SubmitBtn">Submit Quiz</p>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Template;
