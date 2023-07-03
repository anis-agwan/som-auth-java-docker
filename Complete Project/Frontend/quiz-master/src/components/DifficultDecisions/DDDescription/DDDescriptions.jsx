import React from "react";
import "./DDDescriptions.css";
import { useNavigate } from "react-router-dom";

export default function DDDescriptions() {
  let navigate = useNavigate();

  const onNextClickHandler = () => {
    navigate("/DDTable");
  };

  return (
    <div className="ddMainContainer">
      <div className="ddDescriptionTitleContainer">
        <h1 className="ddDescriptionTitleText">Experiment Description</h1>
      </div>
      <div className="ddDescriptionContainer">
        <p className="ddDescriptionText">
          An experiment was performed by two scientists, Dr. J. Roberts and Dr.
          R. Brown, of the New Product Development Center at Brax Petroleum Co.
          The scientists were interested in what happens to heavy equipment
          machine engines that use a new oil additive manufactured by Brax
          Petroleum.
          <br />
          <br />
          Four commonly used engine types were obtained from the manufacturers.
          These were new engines, which had never been used before. Each engine
          type was split into two equal groups of 10. The engines were run in a
          simulated environment designed to provide the equivalent of running at
          normal load capacity and speed for 40,000 miles. This is approximately
          one year of normal usage for these types of engines. Oil was changed
          every 4,000 miles, i.e., 10 times during this testing period. One half
          of the engine group (10 for each type of engine) used a common oil for
          all oil changes and general usage. The other half of the engine group
          (again, 10 for each type of engine) used the engine oil plus the newly
          developed oil additive from Brax petroleum.
          <br />
          <br />
          During this testing period, any engine repairs that were required, as
          determined by a team of three mechanics, were made to the engines. The
          numbers and types of repairs were recorded by the mechanics. At the
          end of the 40,000-mile testing period, the engines were thoroughly
          reviewed by the mechanics following a standard 20-point checklist. To
          pass the final checklist, an engine needed to pass all 20 points. The
          number of engines that did not pass inspection was noted.
          <br />
          <br />
          The results of the experiment are shown in the chart on the Results
          Table page.
          <br />
          <br />
          Click on the “Results Table” button to go to the Results Table page.
        </p>
        <div className="ddDescriptioninputForm">
          <div className="ddNextButton">
            <button className="ddNextText" onClick={onNextClickHandler}>
              {">"}
            </button>
            {/* <input
                className="ddStartQuizText"
                type="submit"
                value="Start Quiz"
              ></input> */}
          </div>
        </div>

        {/* <form id="form" className="ddDescriptioninputForm" action="/DDTable">
          <div className="ddNextButton">
            <input className="ddNextText" type="submit" value=">"></input>
          </div>
        </form> */}
      </div>
    </div>
  );
}
