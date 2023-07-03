import React from "react";
import "../SelectionScreen/selectionScreenStyles.css";
import juicy_multitasking from "../../images/juicy-multitasking.gif";
import juicy_team_analyzes from "../../images/juicy-team-analyzes-graphs-and-diagrams.gif";
import juicy_business from "../../images/juicy-business-coach-explains-the-material-to-the-woman.gif";

export default function SelectionScreens() {
  return (
    <div className="ssMainContainer">
      <div className="pbcard">
        <img src={juicy_multitasking} alt="Avatar" className="pbImage" />
        <div className="personalBeliefSelection">
          <h1 className="personalBeliefTitle">Personal Belifs</h1>
          <p className="personalBeliefInstructionText">
            This section consists of a number of statements about various
            issues. You need to select the extent to which you agree or disagree
            with each statement. There are no right or wrong answers in this
            section. You should respond accurately and candidly.
          </p>
          <form id="form" className="pbStartBtnForm" action="/PBInforamtion">
            <div className="pbStartButton">
              <input className="pbStartText" type="submit" value=">"></input>
            </div>
          </form>
        </div>
      </div>

      <div className="cacard">
        <img src={juicy_team_analyzes} alt="Avatar" className="caImage" />
        <div className="criticalAnalysisSelection">
          <h1 className="criticalAnlysisTitle">Critical Anlysis</h1>
          <p className="criticalAnalysisInstructionText">
            This section consists of a number of statements about various
            issues. You need to select the extent to which you agree or disagree
            with each statement. There are no right or wrong answers in this
            section. You should respond accurately and candidly.
          </p>
          <form id="form" className="caStartBtnForm" action="/CAInstructions">
            <div className="caStartButton">
              <input className="caStartText" type="submit" value=">"></input>
            </div>
          </form>
        </div>
      </div>

      <div className="ddcard">
        <img src={juicy_business} alt="Avatar" className="ddImage" />
        <div className="difficultDecisionsSelection">
          <h1 className="difficultDecisionsTitle">Difficult Decisions</h1>
          <p className="difficultDecisionsInstructionText">
            This section consists of a number of statements about various
            issues. You need to select the extent to which you agree or disagree
            with each statement. There are no right or wrong answers in this
            section. You should respond accurately and candidly.
          </p>
          <form id="form" className="ddStartBtnForm" action="/DDInstructions">
            <div className="ddStartButton">
              <input className="ddStartText" type="submit" value=">"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
