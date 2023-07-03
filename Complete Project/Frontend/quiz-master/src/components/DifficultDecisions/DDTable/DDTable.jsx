import React, { useEffect, useState } from "react";
import ddTable from "../../../images/ddtable.png";
import axios from "axios";
import "./DDTable.css";
import { useNavigate } from "react-router-dom";

export default function DDTable() {
  let navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const baseURL = "http://localhost:8444/critical-thinking/critical-thinking/";
  const getQuestionsHandler = async () => {
    await axios
      .get(`${baseURL}getQuestions`)
      .then((res) => {
        setQuestions(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getQuestionsHandler();
  }, []);

  const onPrevClickHandler = () => {
    navigate("/DDDescriptions");
  };

  const onNextClickHandler = () => {
    navigate("/DDQuestions", {
      state: {
        questions: questions,
      },
    });
  };

  return (
    <div className="ddTableMainContainer">
      <div className="ddTableTitle">
        <p>Results and Findings of Experiment</p>
      </div>
      <div className="ddGotoDescriptions">
        <div className="ddDiscBtn">
          <button className="ddDiscBtnText" onClick={onPrevClickHandler}>
            {"<"}
          </button>
        </div>
      </div>
      {/* <form id="form" className="ddGotoDescriptions" action="/DDDescriptions">
        <div className="ddDiscBtn">
          <input className="ddDiscBtnText" type="submit" value="<"></input>
        </div>
      </form> */}
      <div className="ddImageContainer">
        <img src={ddTable} alt="Table" className="ddDImage" />
      </div>
      <div className="ddGotoquestions">
        <div className="ddQuesBtn">
          {/* <input className="ddQuesBtnText" type="submit" value=">"></input> */}
          <button className="ddQuesBtnText" onClick={onNextClickHandler}>
            {">"}
          </button>
        </div>
      </div>
      {/* <form id="form" className="ddGotoquestions" action="/DDQuestions">
        <div className="ddQuesBtn">
          <input className="ddQuesBtnText" type="submit" value=">"></input>
        </div>
      </form> */}
      <div className="ddTableText">
        <p>
          The scientists concluded that the oil additive significantly reduced
          engine problems.
          <br />
          (10 engines were used in each group. A total of 80 engines were used
          in the experiment.)
        </p>
      </div>
    </div>
  );
}
