
// import Button from "@material-ui/core/Button";
import { Grid} from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
import "./CAQuestions.css";
import "./CAQuestions";



import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const CATemplate = (props) => {
  //let classes = pageStyle();
  
  let navigate = useNavigate();

  const routeChange = (event) => {
    const url = "http://localhost:8443/difficult-decisions/CA/CAData/";
    axios.post(url, CAAnswers).then((response) => {
      console.log(response);
      let path = `/endScreen`;
      navigate(path);
    });
  };

  const [CAAnswers, setCAAnswers] = React.useState({
    CAScoreId: Math.floor(Math.random() * 10) + 1,
    CAUserId: "B00633059",
    CAFirstName: "Anis",
    CALastName: "Agwan",
    CAQ53: 4,
  });

  const inputBtnHandler = (question, answer) => {
    let ques = `CAQ${parseInt(question) + 1}`;
    CAAnswers[ques] = parseInt(answer);
    // console.log(CAAnswers);
    setCAAnswers({ ...CAAnswers });
  };
  
//------------------------------------------------------
//Option Ratings
//------------------------------------------------------
  // const [ratinginputs, setratingInputs] = useState([]);
  // const ratinghandleChange = (index, event) => {
  //   const newratingInputs = [...ratinginputs];
  //   newratingInputs[index] = event.target.value;
  //   setratingInputs(newratingInputs);
  // };

  // let ratinginputFields = [];
  // for (let j = 0; j <= ratinginputs.length; j++) {
  //   if(j<props.questions.Olength){
  //     ratinginputFields.push(
  //     <form className="RatingForm" >
  //     <label className="RatingTitle" for="rating">Rating{j+1} :</label>
  //     <input
  //       id="rating"
  //       className="RatingInput"
  //       key={j}
  //       value={ratinginputs[j] || ''}
  //       onChange={(event) => ratinghandleChange(j, event)}
  //     />
  //     </form>
  //   );
  //   }
  //   if(j>props.questions.Olength){
  //     ratinginputs.pop();
  //     //console.log("popping element");
  //   }
  // }
//------------------------------------------------------
//Option Ranks
//------------------------------------------------------
  // const [inputs, setInputs] = useState([]);

  // const handleChange = (index, event) => {
  //   const newInputs = [...inputs];
  //   newInputs[index] = event.target.value;
  //   setInputs(newInputs);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(inputs, ratinginputs);
  // };
  // let inputFields = [];
  // for (let i = 0; i <= inputs.length; i++) {
  //   if(i<props.questions.Olength){
  //     inputFields.push(
  //     <form>
  //     <label className="RankTitle" for="rank">Rank{i+1} :</label>
  //     <input
  //       id="rank"
  //       className="RankInput"
  //       key={i}
  //       value={inputs[i] || ''}
  //       onChange={(event) => handleChange(i, event)}
  //     />
  //     </form>
  //   );
  //   }
  //   if(i>props.questions.Olength){
  //     inputs.pop();
  //     //console.log("popping element");
  //   }
  // }
 
//-----------------------------------------------------------

//------------------------------------------------------
  const [inputs, setInputs] = useState([]);
  const [ratinginputs, setratingInputs] = useState([]);

  const handleChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };
const ratinghandleChange = (index, event) => {
    const newratingInputs = [...ratinginputs];
    newratingInputs[index] = event.target.value;
    setratingInputs(newratingInputs);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs, ratinginputs);
  };
  let inputFields = [];
  let ratinginputFields = [];
  for (let i = 0; i <= inputs.length; i++) {
    
    if(i<props.questions.Olength){
      inputFields.push(
      <form className="form-inline">
      <label className="RankTitle" for="rank">Rank{i+1} :</label>
      <input
        type="Number"
        placeholder="Option"
        min="1" max="5"
        required
        id="rank"
        className="RankInput"
        key={i}
        value={inputs[i] || ''}
        onChange={(event) => handleChange(i, event)}
      />
      <label className="RatingTitle" for="rating">Rating{i+1} :</label>
          <input
            type="Number"
            min="1" max="5"
            placeholder="Rate"
            id="rating"
            className="RatingInput"
            required
            key={i*i+1}
            value={ratinginputs[i] || ''}
            onChange={(event) => ratinghandleChange(i, event)}
          />
      </form>
    );
    }
    if(i>props.questions.Olength){
      inputs.pop();
      ratinginputs.pop();
      //console.log("popping element");
    }
  }
  function RatingCheck(ratinginputs) {
  
  for (let i = 1; i < ratinginputs.length; i++) {
   if(ratinginputs[i-1]<ratinginputs[i]){
    // console.log("Rating "+[i]+" less than Rating "+[i+1]+" which is Invalid!\n");
    return true;
   }
   if (ratinginputs.length !==props.questions.Olength){
    return true;
  }
  
    return false;


  }
}
  function containsDuplicates(array) {
    if (array.length !== new Set(array).size) {
      return true;
    }
    if (array.length !==props.questions.Olength){
      return true;
    }
    return false;
  }
  
// console.log(containsDuplicates(inputs)); 
// console.log(RRValidity)

const [RRopen, setRROpen] = React.useState(false);

  const RRhandleClick = () => {
    
    if(RatingCheck(ratinginputs) || containsDuplicates(inputs)){
      setRROpen(true);
    }
    else{
      props.nextQuestion()
      setRROpen(false);
    }
  };

  const RRhandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setRROpen(false);

    
  };

//-----------------------------------------------------------


  return (
    <Grid container className="CAMainContainer">
      <Grid className="QuesClassItem">
        <h2 className="CAsituationIndex1">Section {props.questions.situationIndex1}</h2>
        <h2 className="CASituationDescription1">{props.questions.situationQuestion1}</h2>
        <h2 className="CAsituationIndex2">{props.questions.situationIndex2}</h2>
        <h2 className="CASituationDescription2">{props.questions.situationQuestion2}</h2>
      </Grid>

      <Grid className="CAOptions">
            {props.questions.O.map((option, index) => {
              return (
                <div className="OptionMainClass">
                  <p className="OptionsNumber">Option {index+1} :</p>
                  <div  key={index} className="CAoptionsArrangement" onClick={() => {
                    props.updateScore(option.idx);
                    props.checkAnswer(props.quesNum, props.questions.A ,option.value,option.idx);
                    props.setClickedOption(index+1);
                    //props.nextQuestion();
                    inputBtnHandler(props.quesNum, option.idx);
                    }}>
                      <div className={`Option-btn ${props.clickedOption === index+1?"CAchecked":"CAunchecked"}`}>
                        
                        <div className="CAOptionsText">
                          { option.value }
                        </div>
                        
                      </div>
                  </div>
                </div>
              );
            })}
        </Grid>
        


        <Grid item sm={12}>
        <Grid container className="CAButtonsClass">
          
            <div className="CAPrevBtn">
                <Button
                onClick={() =>props.prevQuestion()}
                disabled={props.quesNum === 0}
                >
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

              <button type="submit"
              className="CANextBtn" 
              onClick={RRhandleClick}
              //onClick={() => props.nextQuestion()}
              disabled={props.quesNum === props.questionsLength}
              >Next</button>
              <Snackbar open={RRopen} autoHideDuration={6000} onClose={RRhandleClose}>
              <Alert onClose={RRhandleClose} severity="error" sx={{ width: "100%" }}>
                Invalid Rating or Rank (Rating should be unique with correct options and Rank should be in descending order)
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

export default CATemplate;