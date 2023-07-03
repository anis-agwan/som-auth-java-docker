import React from "react";
import "../QuizInstructions/PBQuizInstructionsStyles.css";

export default function PBQuizInstruction() {
  return (
    <div className="MainContainer1">
      <h1 className="TitleText1">INSTRUCTIONS</h1>

      <p className="InstructionText1">
        You are about to begin an assessment process on the computer. This is
        one part of an in-depth assessment program designed for managerial
        positions.
        <br />
        <br />
        The computerized portion of this system is self-guided and self-paced.
        You are free to work at your own pace. Start with Step 1 to register.
        Each time you finish a section you will come back to this menu to
        continue with the next step. You will be asked to enter your ID number
        as you begin each section.
      </p>
      <form id="form" className="inputStyle1" action="/PBInstructions">
        <div className="StartQuizButton11">
          <input className="StartQuizText11" type="submit" value=">"></input>
        </div>
      </form>
    </div>
  );
}
