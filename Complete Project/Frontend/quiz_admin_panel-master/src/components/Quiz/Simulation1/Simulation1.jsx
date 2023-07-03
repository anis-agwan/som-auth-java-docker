
// import { Grid } from "@material-ui/core";
import "./Simulation1.css";
import { useNavigate } from "react-router-dom";
import * as React from "react";
// import Simulation1Data from "./Simulation1Data";
const Simulation1Data = [
      {
          Q: "IDEALIZED INFLUENCE (B) (LS1-II)",
          question1: "1. Talked to me (us) about his/her most important values and beliefs.",
          O1: [
              {
              idx: "1",
              value: "Displayed a cyncial disregrad for values, or said nothing",
              },
              {
              idx: "2",
              value: "Discussed briefly his/her values and believes",
              },
              {
              idx: "3",
              value: "Emphasized the critical importance of values and beliefs",
              },
          ],
          question2: "2.  Specified the importance of a strong sense of purpose.",
          O2: [
              {
              idx: "1",
              value: "talked disparagingly of a sense of purpose, or didn't mention it",
              },
              {
              idx: "2",
              value: "discussed briefly",
              },
              {
              idx: "3",
              value: "evidently it was a central concern",
              },
          ],
          question3: "3.  Considered the moral and ethical consequences of his/her decisions.",
          O3: [
              {
              idx: "1",
              value: "demonstrated a contempt for the moral consequences, or did not discuss moral consequences",
              },
              {
              idx: "2",
              value: "showed a mild interest in moral consequences",
              },
              {
              idx: "3",
              value: "moral and ethical considerations were a primary consideration",
              },
          ],
          question4: "4.  Emphasized the importance of a collective sense of mission.",
          O4: [
              {
              idx: "1",
              value: "dismissed or downplayed a collective sense of mission, or did not mention it",
              },
              {
              idx: "2",
              value: "mentioned it briefly",
              },
              {
              idx: "3",
              value: "talked at length about a collective sense of mission, or collective sense of mission was the main theme of the interaction",
              },
          ],
          Observation: "Observations",
      },
      {
        Q: "INSPIRATIONAL MOTIVATION (LS1-IM)",
        question1: "5.  Talked optimistically about the future.",
        O1: [
            {
            idx: "1",
            value: "talked pessimistically about the future, did not mention the future",
            },
            {
            idx: "2",
            value: "made some positive comments about the future",
            },
            {
            idx: "3",
            value: "discussed the future positively",
            },
        ],
        question2: "6.  Expressed his/her confidence that we will reach our goals.",
        O2: [
            {
            idx: "1",
            value: "expressed doubt that we would reach our goals, emphasized obstacles in the way of success, or did not discuss goals",
            },
            {
            idx: "2",
            value: "showed some degree of confidence that we would meet our goals",
            },
            {
            idx: "3",
            value: "expressed strong confidence we would meet our goals",
            },
        ],
        question3: "7.  Talked enthusiastically about what needs to be accomplished.",
        O3: [
            {
            idx: "1",
            value: "showed no enthusiasm for what needs to be done, or emphasized the onerous nature of what has to be done",
            },
            {
            idx: "2",
            value: "expressed some enthusiasm for what needs to be done",
            },
            {
            idx: "3",
            value: "demonstrated a great deal of enthusiasm and excitement about what needs to be done",
            },
        ],
        question4: "8.  Articulated a compelling vision of the future.",
        O4: [
            {
            idx: "1",
            value: "painted a grim picture of the future, or did not discuss the future",
            },
            {
            idx: "2",
            value: "mentioned the future in somewhat positive terms",
            },
            {
            idx: "3",
            value: "articulated a positive and compelling vision of the future",
            },
        ],
        Observation: "Observations",
    },
    {
      Q: "INTELLECTUAL STIMULATION (LS1-IS)",
      question1: "9.  Reexamined critical assumptions to question whether they were appropriate.",
      O1: [
          {
          idx: "1",
          value: "refused to reconsider critical assumptions, expressed impatience with my (our) proposal to reconsider them, or did not mention critical assumptions",
          },
          {
          idx: "2",
          value: "briefly noted critical assumptions and commented on them",
          },
          {
          idx: "3",
          value: "reexamined critical assumptions, or forcefully argued that we need to reconsider critical assumptions",
          },
      ],
      question2: "10.  Sought differing perspectives when solving problems.",
      O2: [
          {
          idx: "1",
          value: "refused to consider or discuss alternative perspectives, cut me off when I (we) suggested a different perspective, or did not seek new perspectives",
          },
          {
          idx: "2",
          value: "made some effort to get a different perspective on problems to be solved",
          },
          {
          idx: "3",
          value: "strongly urged me (us) to provide insight and alternatives on problems we face",
          },
      ],
      question3: "11.  Suggested new ways of looking at how I (we) do my (our) job(s).",
      O3: [
          {
          idx: "1",
          value: "refused to look at new ways of doing my job, emphasized sticking to the standard ways, berated me (us) for suggesting alternatives, or did not suggest any new ways of doing my work",
          },
          {
          idx: "2",
          value: "made some brief comments or suggestions about ways to do my (our) work",
          },
          {
          idx: "3",
          value: "emphasized new ways to do my (our) job and encouraged me (us) to consider them",
          },
      ],
      question4: "12.  Got me (us) to look at problems from many different angles.",
      O4: [
          {
          idx: "1",
          value: "berated me (us) for trying to look at problems from different angles, showed impatience when I (we) tried to discuss problems, did not make any effort to get me (us) to look at problems for different angles",
          },
          {
          idx: "2",
          value: "made some effort to get me (us) to look at problems for different angles",
          },
          {
          idx: "3",
          value: "made an energetic effort to get me (us) to look at problems from different angles",
          },
      ],
      Observation: "Observations",
      },
      {
      Q: "INDIVIDUALIZED CONSIDERATION (LS1-IC)",
      question1: "13.  Treated me (us) as an individual rather than just a member of the group.",
      O1: [
          {
          idx: "1",
          value: "referred to the group rather than to me (us), refused to consider me (us) as an individual, de-emphasized any individual differences on my (our) part, cut me (us) off when I mentioned myself",
          },
          {
          idx: "2",
          value: "made some effort to treat me (us) distinctly from the group",
          },
          {
          idx: "3",
          value: "showed a great interest in me (us) as an individual with distinct needs and interests",
          },
      ],
      question2: "14.  Focused me on developing my strengths.",
      O2: [
          {
          idx: "1",
          value: "showed contempt for my (our) self development, indicated I (we) was (were) incapable of development, said I (we) did not have any strengths, or did not make any mention of my (us) developing my (our) strengths",
          },
          {
          idx: "2",
          value: "encouraged me (us) somewhat to develop my (our) strengths",
          },
          {
          idx: "3",
          value: "vigorously encouraged me (us) to develop my (our) strengths, made many suggestions and proposals and plans for developing my (our) strengths",
          },
      ],
      question3: "15.  Spent time teaching and coaching.",
      O3: [
          {
          idx: "1",
          value: "gave me (us) orders, refused my (our) requests for learning my (our) job, told me (us) I (we) should do as I (we) was (were) told, or did not spend any time teaching me (us) the job or giving me (us) advice on how to do the job better",
          },
          {
          idx: "2",
          value: "explained some aspects of my (our) job, made some helpful suggestions about my (our) job",
          },
          {
          idx: "3",
          value: "spent most of his/her time helping me (us) to understand and do my (our) job better",
          },
      ],
      question4: "16.  Treated me (us) as an individual(s) with different needs, abilities and aspirations.",
      O4: [
          {
          idx: "1",
          value: "denigrated or downplayed my (our) interests and aspirations, told me (us) that my (our) job was to work and get paid, did not show any recognition of my (our) unique abilities and needs",
          },
          {
          idx: "2",
          value: "showed some awareness of my (our) unique qualities",
          },
          {
          idx: "3",
          value: "made me (us) feel like a special and unique person(s)",
          },
      ],
      Observation: "Observations",
    },
    {
    Q: "CONTINGENT REWARD (Transactional Leadership) (LS1-CR)",
    question1: "17.  Made clear what I (we) could expect to receive if my (our) performance met designated standards.",
    O1: [
        {
        idx: "1",
        value: "emphasized that I was supposed to work hard but did not mention any rewards or relate performance and rewards, gave me the impression there were no standards or set standards that were arbitrary and/or impossible",
        },
        {
        idx: "2",
        value: "discussed briefly the relationship between my (our) performance and what I (we) could expect in return",
        },
        {
        idx: "3",
        value: "emphasized the relationship between my (our performance and what I (we) could expect in return",
        },
    ],
    question2: "18.  Provided his assistance in exchange for my (our) effort.",
    O2: [
        {
        idx: "1",
        value: "made it clear that he/she was note going to help me regardless of my (our) level of effort, argued that I (we) should maintain a high level of effort regardless of any assistance, emphasized punishment for failure to perform",
        },
        {
        idx: "2",
        value: "indicated that I (we) could expect assistance in exchange for effort",
        },
        {
        idx: "3",
        value: "emphasized the relationship between my (our) level of effort and his/her assistance",
        },
    ],
    question3: "19.  Made sure I (we) would receive appropriate rewards for achieving performance targets.",
    O3: [
        {
        idx: "1",
        value: "emphasized punishment for not meeting targets rather than rewards for meeting targets, said that I (we) was getting a paycheck and that was enough, told me (us) I was lucky to have a job, or did not mention that meeting targets would result in some reward",
        },
        {
        idx: "2",
        value: "suggested briefly that I (we) would expect some reward for meeting targets",
        },
        {
        idx: "3",
        value: "emphasized the strong relationship between meeting performance targets and rewards that would be forthcoming",
        },
    ],
    question4: "20.  Expressed his/her satisfaction whe I (we) did a good job.",
    O4: [
        {
        idx: "1",
        value: "emphasized my (our) failures rather than my (our) successes, refused to recognize that I (we) had done a good job, talked about rewards in the future rather than for past performance, or showed no reaction to my (our) success",
        },
        {
        idx: "2",
        value: "expressed mild satisfaction with my (our) success",
        },
        {
        idx: "3",
        value: "expressed great and sincere satisfaction for my (our) good work",
        },
    ],
    Observation: "Observations",
    },
  ];


const Simulation1 = () => {
  // console.log(Simulation1Data[1].Q)
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showS1Score, setShowS1Score] = React.useState(false);
  //let [s1Score, setS1Score] = React.useState(0);
  const [selectedOptionO1, setSelectedOptionO1] = React.useState(null);
  const [selectedOptionO2, setSelectedOptionO2] = React.useState(null);
  const [selectedOptionO3, setSelectedOptionO3] = React.useState(null);
  const [selectedOptionO4, setSelectedOptionO4] = React.useState(null);
  
  function getS1TextAreaValue(){
    var textarea = document.getElementById('s1ObservationID');
    var observationtext = textarea.value;
    console.log(Simulation1Data[currentQuestion].Q, observationtext);
  }
  function eraseText() {
    document.getElementById('s1ObservationID').value = "";
}

  const handleO1AnswerButtonClick = (idx) =>{
    //setS1Score((prevScore) => prevScore + parseInt(idx));
    setSelectedOptionO1(idx);
  }
  const handleO2AnswerButtonClick = (idx) =>{
    //setS1Score((prevScore) => prevScore + parseInt(idx));
    setSelectedOptionO2(idx);
  }
  const handleO3AnswerButtonClick = (idx) =>{
    //setS1Score((prevScore) => prevScore + parseInt(idx));
    setSelectedOptionO3(idx);
  }
  const handleO4AnswerButtonClick = (idx) =>{
    //setS1Score((prevScore) => prevScore + parseInt(idx));
    setSelectedOptionO4(idx);
  }

  const handleNextButonClick = () =>{
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Simulation1Data.length) {
      getS1TextAreaValue();
      setCurrentQuestion(nextQuestion);
      setSelectedOptionO1(null);
      setSelectedOptionO2(null);
      setSelectedOptionO3(null);
      setSelectedOptionO4(null);
      eraseText();
    } else {
      setShowS1Score(true)
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
      <div className="Simulation1MainFrame">
        {showS1Score ? (
          <div className="ScoreClass">
            {/* <div className="S1Score">You Scored : {s1Score}</div> */}
            <div className="S1Score"><h1>You Have completed Simulation1! <h4>(1/4)</h4></h1></div>
            <button className="HomeButton" onClick={() => navigate("/Evaluation1")}> Evaluation 1</button>
          </div>
        ) : (
          <>
            <div >
              <h1 className="SimulationQ1Titles">{Simulation1Data[currentQuestion].Q}</h1>
              <h4>Note: Evaluate the following questions as if you were the group leader</h4>
              <br></br>
              <h3 className="Simulation1Q1Question">{Simulation1Data[currentQuestion].question1}</h3>
            </div>
            <div>
              {
              Simulation1Data[currentQuestion].O1.map((simulation1Data)=>{
                return (
                  <>
                    <div key={simulation1Data.idx}>
                    <button onClick={() => handleO1AnswerButtonClick(simulation1Data.idx)} className={`Simulation1Q1Option ${
                  selectedOptionO1 === simulation1Data.idx ? "selected" : ""}`} ><p className="S1OptionsText">{simulation1Data.value}</p></button>
                    </div>
                  </>
              );})}
            </div>
            {/* ----------------------------2nd-------------------------------- */}
            
            <div >
              <br></br>
              <h3 className="Simulation1Q1Question">{Simulation1Data[currentQuestion].question2}</h3>
            </div>
            <div>
              {
              Simulation1Data[currentQuestion].O2.map((simulation1Data)=>{
                return (
                  <>
                    <div key={simulation1Data.idx}>
                    <button onClick={() => handleO2AnswerButtonClick(simulation1Data.idx)} className={`Simulation1Q1Option ${
                  selectedOptionO2 === simulation1Data.idx ? "selected" : ""}`}>{simulation1Data.value}</button>
                    </div>
                  </>
              );})}
            </div>
            {/* ----------------------------3rd-------------------------------- */}
            
            <div >
              <br></br>
              <h3 className="Simulation1Q1Question">{Simulation1Data[currentQuestion].question3}</h3>
            </div>
            <div>
              {
              Simulation1Data[currentQuestion].O3.map((simulation1Data)=>{
                return (
                  <>
                    <div key={simulation1Data.idx}>
                    <button onClick={() => handleO3AnswerButtonClick(simulation1Data.idx)} className={`Simulation1Q1Option ${
                  selectedOptionO3 === simulation1Data.idx ? "selected" : ""}`}>{simulation1Data.value}</button>
                    </div>
                  </>
              );})}
            </div>
            {/* ----------------------------4th-------------------------------- */}
            
            <div >
              <br></br>
              <h3 className="Simulation1Q1Question">{Simulation1Data[currentQuestion].question4}</h3>
            </div>
            <div>
              {
              Simulation1Data[currentQuestion].O4.map((simulation1Data)=>{
                return (
                  <>
                    <div key={simulation1Data.idx}>
                    <button onClick={() => handleO4AnswerButtonClick(simulation1Data.idx)} className={`Simulation1Q1Option ${
                  selectedOptionO4 === simulation1Data.idx ? "selected" : ""}`}>{simulation1Data.value}</button>
                    </div>
                  </>
              );})}
            </div>
            {/* ----------------------------5th-------------------------------- */}
            
            <div >
              <br></br>
              <h3 className="Simulation1Q1Question">{Simulation1Data[currentQuestion].Observation}</h3>
              <textarea className="s1ObservationTextClass" name="s1ObservvationText" id="s1ObservationID" cols="40" rows="10"></textarea>
            </div>
            {/* ----------------------------Btn-------------------------------- */}
            <br></br>
            <button className="Simulation1PrevBtn" onClick={handlePrevButonClick}>Prev</button>
            <button className="Simulation1NextBtn" onClick={handleNextButonClick}>Next</button>
          </>
        )}
     </div>
    );
}

export default Simulation1;