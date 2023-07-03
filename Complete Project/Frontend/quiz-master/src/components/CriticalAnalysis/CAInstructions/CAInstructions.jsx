import React from "react";
import "./CAInstructions.css";

export default function CAInstructions() {
  //const inputRef = useRef(null)
  return (
    <div className="caMainContainer">
      <div className="caTitleContainer">
        <h1 className="caTitleText">INSTRUCTIONS</h1>
      </div>
      <div className="caInstructionContainer">
        <p className="caInstructionText">
          This section provides you with some information from an experiment.
          There are various conclusions drawn from the experiment. Your task
          will be to review the experiment and then evaluate various assumptions
          from which decisions were made. Additionally, you will evaluate the
          logic and appropriateness of those assumptions.
          <br />
          <br />
          Although the experiment involves testing the effectiveness of using an
          oil additive, you do not need to know anything about engines,
          automobiles, or automotive oil in order to perform this exercise. You
          may find it helpful to use a calculator.
          <br />
          <br />
          There are 3 sections in this Critical Thinking exercise. Each section
          requires you to perform a slightly different task.
          <br />
          <br />
          To go to the Experiment Description, please click on the button below.
        </p>
        <form id="form" className="cainputForm" action="/CADescriptions">
          {/* <input ref={inputRef} className='cainputText' required pattern="[b,B]{1}[0-9]{8}" type="text" placeholder='Please enter your B-Number'/> */}
          <div className="caStartQuizButton">
            <input
              className="caStartQuizText"
              type="submit"
              value="Start Quiz"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
