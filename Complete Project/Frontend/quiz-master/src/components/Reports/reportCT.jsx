import axios from "axios";
import "./Reports.css";

import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { splitStringAfterEightWords } from "./split";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ReportCT = () => {
  const sentence =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const result = splitStringAfterEightWords(sentence);
  console.log(result);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const [ddData, setDDData] = useState({ Data: {} });
  const [commentsData, setCommentsData] = useState([]);
  let cc = [["Analyses Score", "Connections Score", "Depth Score"]];
  const [isLoading, setLoading] = useState(false);
  const baseURL =
    "http://localhost:8444/critical-thinking/critical-thinking/getScores";

  const getDDScoreHandler = async () => {
    try {
      const response = await axios.get(`${baseURL}/${user.bingNumber}`);

      const dD = [
        response.data.sec1AnalysisScore,
        response.data.sec2ConnectionsScore,
        response.data.sec3DepthScore,
      ];

      console.log(Object.keys(response.data));
      console.log(response.data);
      const comments = [
        response.data.decisivenessScoreComment,
        response.data.logicalReasoningScoreComment,
        response.data.analysesScoreComment,
      ];
      console.log(comments);
      setLoading(false);
      setDDData({
        Data: {
          labels: ["Section 1", "Section 2", "Section 3"],
          datasets: [
            {
              label: "Difficult Decisions",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: dD,
            },
          ],
          comments: {},
        },
      });

      //   console.log(ddData);
      setCommentsData(comments);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const config = {
    scale: {
      beginAtZero: true,
      max: 10,
      min: 0,
      stepSize: 1,
    },
    plugins: {
      tooltip: {
        displayColors: false,
        callbacks: {
          title: (context) => {
            // console.log(context);
            return `Score: ${context[0].formattedValue}`;
          },
          label: (context) => {
            // console.log(context);
            // console.log(data.datasets);
            // console.log(commentsData[context.dataIndex]);
            // const arr = commentsData[context.dataIndex].split(". ");
            const st = splitStringAfterEightWords(
              commentsData[context.dataIndex]
            );
            return st;
          },
        },
      },
    },
  };

  useEffect(() => {
    setLoading(false);
    getDDScoreHandler();
    setLoading(true);
  }, []);
  return (
    <>
      <div>
        {isLoading && Object.keys(ddData.Data).length > 0 && (
          <Bar data={ddData.Data} options={config} />
        )}
      </div>
    </>
  );
};
