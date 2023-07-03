import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import "./CAQuestions.css";

const user = JSON.parse(localStorage.getItem("userDetails"));

export const CACorTemplate = (props) => {
  let navigate = useNavigate();

  // console.log(props.que);

  const answersOption = [
    { a: props.que.ansOption1, id: props.que.options[0].idx },
    { a: props.que.ansOption2, id: props.que.options[1].idx },
    { a: props.que.ansOption3, id: props.que.options[2].idx },
  ];

  const routeChange = (event) => {
    const url =
      "http://localhost:8444/critical-thinking/critical-thinking/ctData";
    axios.post(url, CAAnswers).then((response) => {
      console.log(response);
      let path = `/endScreen`;
      navigate(path);
    });
  };

  const [CAAnswers, setCAAnswers] = useState({
    bingNumber: user.bingNumber,
    firstName: user.firstName,
    lastName: user.lastName,
    // DDQ53: 4,
  });

  console.log(CAAnswers);

  const inputBtnHandler = (question, answer) => {
    let ques = `que${parseInt(question) + 1}`;
    CAAnswers[ques] = parseInt(answer);
    // console.log(CAAnswers);
    setCAAnswers({ ...CAAnswers });
  };

  return (
    <Grid container className="DDMainContainer">
      <Grid item sm={12} className="QuesClassItem">
        <h2 className="DDsectionIndex">
          Section {props.questions.sectionIndex}
        </h2>
        <h2 className="DDSectionDescription">
          {props.que.secDesc}
          {/* {que.secDesc} */}
        </h2>
        <h5 className="DDQuesTitle">Question {props.quesNum + 1}</h5>
        {props.que.quesOption2 !== "" ? (
          <ol type="i" className="DDol">
            <li>
              <h3 className="DDQuesDisplay1">{props.que.quesOption1}</h3>
            </li>
            <li>
              <h3 className="DDQuesDisplay2">{props.que.quesOption2}</h3>
            </li>
          </ol>
        ) : (
          <h3 className="DDQuesDisplay1">{props.que.quesOption1}</h3>
        )}
      </Grid>

      <Grid className="DDOptions">
        <Grid container>
          <Grid item sm={12}>
            {answersOption.map((option, idx) => {
              return (
                <div
                  key={idx}
                  className="DDoptionsArrangement"
                  onClick={() => {
                    props.updateScore(option.id);
                    props.checkAnswer(
                      props.quesNum,
                      props.questions.A,
                      option.a,
                      option.id
                    );
                    props.setClickedOption(idx + 1);
                    inputBtnHandler(props.quesNum, option.id);
                  }}
                >
                  <div
                    className={`DDOption-btn ${
                      props.clickedOption === idx + 1 ? "checked" : "unchecked"
                    }`}
                  >
                    <p className="DDOptionsText">
                      {/*index+1*/}
                      {option.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      <Grid item sm={12}>
        <Grid container className="DDButtonsClass">
          <div className="DDPrevBtn">
            <Button
              onClick={() => props.prevQuestion()}
              disabled={props.quesNum === 0}
            >
              <div className="DDPrevbtnLabel"> Prev </div>
            </Button>
          </div>
          <div className="DDNextBtn">
            <Button
              onClick={() => props.nextQuestion()}
              disabled={props.quesNum === props.questionsLength - 1}
            >
              <div className="DDNextBtnLabel"> Next </div>
            </Button>
          </div>
        </Grid>
        <div className="DDSubmitBtn">
          <Button
            onClick={routeChange}
            disabled={props.quesNum !== props.questionsLength - 1}
          >
            <p className="DDSubmitBtnText">Submit Quiz</p>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
