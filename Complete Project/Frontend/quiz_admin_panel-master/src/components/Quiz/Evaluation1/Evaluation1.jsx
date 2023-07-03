
// import { Grid } from "@material-ui/core";
import "./Evaluation1.css";
import { useNavigate } from "react-router-dom";
import * as React from "react";
// import Evaluation1Data from "./Evaluation1Data";
const Evaluation1Data = [
      {
          Q: "ADAPTING TO CHANGE EVALUATION - Assessor A",
          question1: "Q1-Open to change",
          O1: [
              {
              idx: "1",
              value: "1 : Unwilling to consider alternative approaches or ways of doing things.  Prefers to stick with what has worked in the past rather than try new ideas.",
              },
              {
              idx: "2",
              value: "2 : Unwilling to consider alternative approaches or ways of doing things.  Prefers to stick with what has worked in the past rather than try new ideas.",
              },
              {
              idx: "3",
              value: "3 : Unwilling to consider alternative approaches or ways of doing things.  Prefers to stick with what has worked in the past rather than try new ideas.",
              },
              {
              idx: "4",
              value: "4 : Expressed an interest in trying new things.  Considers alternative approaches to or ways of doing things.",
              },
              {
              idx: "5",
              value: "5 : Expressed an interest in trying new things.  Considers alternative approaches to or ways of doing things.",
              },
              {
              idx: "6",
              value: "6 : Expressed an interest in trying new things.  Considers alternative approaches to or ways of doing things.",
              },
              {
              idx: "7",
              value: "7 : Expressed an interest in trying new things.  Considers alternative approaches to or ways of doing things.",
              },
              {
              idx: "8",
              value: "8 : Clearly enjoys change.  Solicits new ideas from others and acts on them to help produce change.",
              },
              {
              idx: "9",
              value: "9 : Clearly enjoys change.  Solicits new ideas from others and acts on them to help produce change.",
              },
              {
              idx: "10",
              value: "10 : Clearly enjoys change.  Solicits new ideas from others and acts on them to help produce change.",
              },
          ],
          question2: "Q2-Effectively addapts to change",
          O2: [
              {
              idx: "1",
              value: "1 : Demonstrated a low level of flexibility.  Strongly prefers structured tasks and stable routine.  Showed almost no willingness or ability to change.",
              },
              {
              idx: "2",
              value: "2 : Demonstrated a low level of flexibility.  Strongly prefers structured tasks and stable routine.  Showed almost no willingness or ability to change.",
              },
              {
              idx: "3",
              value: "3 : Demonstrated a low level of flexibility.  Strongly prefers structured tasks and stable routine.  Showed almost no willingness or ability to change.",
              },
              {
              idx: "4",
              value: "4 : Demonstrated a willingness and ability to accept and adapt to change.  Effectively modified behavior/attitudes in response to changing demands/expectations.",
              },
              {
              idx: "5",
              value: "5 : Demonstrated a willingness and ability to accept and adapt to change.  Effectively modified behavior/attitudes in response to changing demands/expectations.",
              },
              {
              idx: "6",
              value: "6 : Demonstrated a willingness and ability to accept and adapt to change.  Effectively modified behavior/attitudes in response to changing demands/expectations.",
              },
              {
              idx: "7",
              value: "7 : Demonstrated a willingness and ability to accept and adapt to change.  Effectively modified behavior/attitudes in response to changing demands/expectations.",
              },
              {
              idx: "8",
              value: "8 : Demonstrated extreme flexibility and the ability to adapt quickly to a variety of changes.  Provided examples of facilitating change or helping others to adapt to change.",
              },
              {
              idx: "9",
              value: "9 : Demonstrated extreme flexibility and the ability to adapt quickly to a variety of changes.  Provided examples of facilitating change or helping others to adapt to change.",
              },
              {
              idx: "10",
              value: "10 : Demonstrated extreme flexibility and the ability to adapt quickly to a variety of changes.  Provided examples of facilitating change or helping others to adapt to change.",
              },
          ],
          
    Observation: "Observations",
    SeekingMoreInfo: "Seeking More Information",
    SharingResponsibility: "Sharing Responsibility",
    },
  ];


const Evaluation1 = () => {
  // console.log(Evaluation1Data[1].Q)
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showE1Score, setShowE1Score] = React.useState(false);
  //let [E1Score, setE1Score] = React.useState(0);
  const [selectedOptionO1, setSelectedOptionO1] = React.useState(null);
  const [selectedOptionO2, setSelectedOptionO2] = React.useState(null);
  
  function getE1TextAreaValue(){
    var textarea = document.getElementById('E1ObservationID');
    var observationtext = textarea.value;
    console.log(Evaluation1Data[currentQuestion].Q, observationtext);
  }
  function eraseText() {
    document.getElementById('E1ObservationID').value = "";
}

  const handleO1AnswerButtonClick = (idx) =>{
    //setE1Score((prevScore) => prevScore + parseInt(idx));
    setSelectedOptionO1(idx);
  }
  const handleO2AnswerButtonClick = (idx) =>{
    //setE1Score((prevScore) => prevScore + parseInt(idx));
    setSelectedOptionO2(idx);
  }
 

  const handleNextButonClick = () =>{
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Evaluation1Data.length) {
      getE1TextAreaValue();
      setCurrentQuestion(nextQuestion);
      setSelectedOptionO1(null);
      setSelectedOptionO2(null);
      eraseText();
    } else {
      setShowE1Score(true)
    }
  }
  const handlePrevButonClick = () =>{
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
      eraseText();
      //console.log(currentQuestion);
    } else {
      alert("You have reached start of the Quiz!")
    }
  }
  
  const navigate = useNavigate();
    return(
      <div className="Evaluation1MainFrame">
        {showE1Score ? (
          <div className="ScoreClass">
            {/* <div className="E1Score">You Scored : {E1Score}</div> */}
            <div className="S1Score"><h1>You Have completed Evaluation1! <h4>(2/4)</h4></h1></div>
            <button className="HomeButton" onClick={() => navigate("/Simulation2")}> Simulation 2 </button>
          </div>
        ) : (
          <>
            <div >
              <h1 className="Evaluation1Title">{Evaluation1Data[currentQuestion].Q}</h1>
              <br></br>
              <h3 className="SimulationQ1Question">{Evaluation1Data[currentQuestion].question1}</h3>
            </div>
            <div>
              {
              Evaluation1Data[currentQuestion].O1.map((Evaluation1Data)=>{
                return (
                  <>
                    <div key={Evaluation1Data.idx}>
                    <button onClick={() => handleO1AnswerButtonClick(Evaluation1Data.idx)} className={`Evaluation1Options ${
                  selectedOptionO1 === Evaluation1Data.idx ? "selected" : ""}`} >{Evaluation1Data.value}</button>
                    </div>
                  </>
              );})}
            </div>
            {/* ----------------------------2nd-------------------------------- */}
            
            <div >
              <br></br>
              <h3 className="SimulationQ1Question">{Evaluation1Data[currentQuestion].question2}</h3>
            </div>
            <div>
              {
              Evaluation1Data[currentQuestion].O2.map((Evaluation1Data)=>{
                return (
                  <>
                    <div key={Evaluation1Data.idx}>
                    <button onClick={() => handleO2AnswerButtonClick(Evaluation1Data.idx)} className={`Evaluation1Options ${
                  selectedOptionO2 === Evaluation1Data.idx ? "selected" : ""}`}>{Evaluation1Data.value}</button>
                    </div>
                  </>
              );})}
            </div>
            {/* ----------------------------3rd-------------------------------- */}
            
           
            {/* ----------------------------5th-------------------------------- */}
            
            <div >
              <br></br>
              <h3 className="SimulationQ1Question">{Evaluation1Data[currentQuestion].Observation}</h3>
              <textarea className="E1ObservationTextClass" name="E1ObservvationText" id="E1ObservationID" cols="40" rows="10" required></textarea>
              <div className="SeekingMoreInfoDiv">
              <h3 className="EvaluationSeekingQuestion">{Evaluation1Data[currentQuestion].SeekingMoreInfo}</h3>

              <input className="SeekingMoreInfo" type="Number" min={0} max={10} required></input>
              </div>
              <div className="SeekingMoreInfoDiv">
              <h3 className="EvaluationSeekingQuestion">{Evaluation1Data[currentQuestion].SharingResponsibility}</h3>
              <input className="SeekingMoreInfo" type="Number"  min={0} max={10} required></input>
              </div>
            </div>
            {/* ----------------------------Btn-------------------------------- */}
            <br></br>
            <button className="Evaluation1PrevBtn" onClick={handlePrevButonClick}>Prev</button>
            <button className="Evaluation1NextBtn" onClick={handleNextButonClick}>Next</button>
          </>
        )}
     </div>
    );
}

export default Evaluation1;