import React, { useState } from "react";
import "./Reports.css";
import PBReportsGif from "../../images/PBReports.gif";
import CAReportsGif from "../../images/CAReports.gif";
import DDReportsGif from "../../images/DDReports.gif";
import { ReportPB } from "./reportPB";
import { ReportDD } from "./reportDD";
import { ReportCT } from "./reportCT";

function Reports() {
  const [PBShow, setPBShow] = useState(false);
  const ShowPB = () => {
    if (PBShow === true) {
      // console.log(user.bingNumber);
      setPBShow(true);
    } else {
      setPBShow(true);
      setCAShow(false);
      setDDShow(false);
    }
  };
  const [CAShow, setCAShow] = useState(false);
  const ShowCA = () => {
    if (CAShow === true) {
      setCAShow(true);
    } else {
      setCAShow(true);
      setPBShow(false);
      setDDShow(false);
    }
  };
  const [DDShow, setDDShow] = useState(false);
  const ShowDD = () => {
    if (DDShow === true) {
      setDDShow(true);
    } else {
      setDDShow(true);
      setPBShow(false);
      setCAShow(false);
    }
  };
  return (
    <div className="ReportsMainContainer">
      <div className="SectionTitle">
        <h2 className="ReportsTitleText">Reports</h2>
      </div>
      <div className="LeftSection">
        <button id="btnClick" onClick={ShowPB} className="PBBtnContainer">
          <img
            src={PBReportsGif}
            alt="PBReportsImg"
            className="PBImageGif"
          ></img>
          <h2 className="PBTitleText">Personal Beliefs Reports</h2>
        </button>
        <button id="btnClick" onClick={ShowCA} className="CABtnContainer">
          <img
            src={CAReportsGif}
            alt="CAReportsImg"
            className="CAImageGif"
          ></img>
          <h2 className="CATitleText">Critical Analysis Reports</h2>
        </button>
        <button id="btnClick" onClick={ShowDD} className="DDBtnContainer">
          <img
            src={DDReportsGif}
            alt="DDReportsImg"
            className="DDImageGif"
          ></img>
          <h2 className="DDTitleText">Difficult Decisions Reports</h2>
        </button>
      </div>
      <div className="RightSection">
        {PBShow && (
          <div>
            {/**Graphs can be added here */}
            <ReportPB />
          </div>
        )}
        {CAShow && (
          <div>
            <ReportCT />
          </div>
        )}
        {DDShow && (
          <div>
            <ReportDD />
          </div>
        )}
      </div>
    </div>
  );
}

export default Reports;
