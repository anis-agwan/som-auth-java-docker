import axios from "axios";
import "./Reports.css";

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const ReportPB = () => {
  // const testData = {
  //   labels: [
  //     "Open to Change",
  //     "Coaching",
  //     "Planning and Organizing",
  //     "Teamwork",
  //     "Empowering",
  //   ],
  //   datasets: [
  //     {
  //       label: "Score: ",
  //       data: [18, 12, 6, 9, 12],
  //       backgroundColor: [
  //         "rgba(255, 26, 104, 0.2)",
  //         "rgba(54, 162, 235, 0.2)",
  //         "rgba(255, 206, 86, 0.2)",
  //         "rgba(75, 192, 192, 0.2)",
  //         "rgba(153, 102, 255, 0.2)",
  //         "rgba(255, 159, 64, 0.2)",
  //         "rgba(0, 0, 0, 0.2)",
  //       ],
  //       borderColor: [
  //         "rgba(255, 26, 104, 1)",
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 206, 86, 1)",
  //         "rgba(75, 192, 192, 1)",
  //         "rgba(153, 102, 255, 1)",
  //         "rgba(255, 159, 64, 1)",
  //         "rgba(0, 0, 0, 1)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  const [pbData, setPBData] = useState({ Data: {}, comments: {} });
  const [commentsData, setCommentsData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const baseURL = "http://localhost:8442/personal-beliefs/pb/getScores";
  const getPBScoreHandler = async () => {
    // await axios.get(`${baseURL}/${user.bingNumber}`).then((response) => {
    //   // console.log(response.data.openToChangeScore);
    //   // // console.log(Object.keys(response.data).slice(1));
    //   // console.log(Object.keys(response.data));

    //   const scoreArr = [
    //     response.data.openToChangeScore,
    //     response.data.coachingScore,
    //     response.data.planningAndOrganizingScore,
    //     response.data.teamworkScore,
    //     response.data.empoweringScore,
    //   ];

    //   console.log(scoreArr);

    //   const ss = {
    //     labels: [
    //       "Open to Change",
    //       "Coaching",
    //       "Planning and Organizing",
    //       "Teamwork",
    //       "Empowering",
    //     ],
    //     datasets: [
    //       {
    //         label: "Score: ",
    //         data: [18, 12, 6, 9, 12],
    //         backgroundColor: [
    //           "rgba(255, 26, 104, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)",
    //           "rgba(0, 0, 0, 0.2)",
    //         ],
    //         borderColor: [
    //           "rgba(255, 26, 104, 1)",
    //           "rgba(54, 162, 235, 1)",
    //           "rgba(255, 206, 86, 1)",
    //           "rgba(75, 192, 192, 1)",
    //           "rgba(153, 102, 255, 1)",
    //           "rgba(255, 159, 64, 1)",
    //           "rgba(0, 0, 0, 1)",
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   };

    //   return ss;
    // });

    try {
      const response = await axios.get(`${baseURL}/${user.bingNumber}`);

      const scoreArr = [
        response.data.openToChangeScore,
        response.data.coachingScore,
        response.data.planningAndOrganizingScore,
        response.data.teamworkScore,
        response.data.empoweringScore,
      ];

      const comments = [
        response.data.openToChangeScoreComment,
        response.data.coachingScoreComment,
        response.data.planningAndOrganizingScoreComment,
        response.data.teamworkScoreComment,
        response.data.empoweringScoreComment,
      ];

      // console.log(comments);
      setLoading(false);
      setPBData({
        Data: {
          labels: [
            "Open to Change",
            "Coaching",
            "Planning and Organizing",
            "Teamwork",
            "Empowering",
          ],
          datasets: [
            {
              label: "Personal Beliefs: ",
              data: scoreArr,
              backgroundColor: [
                "rgba(255, 26, 104, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(0, 0, 0, 0.2)",
              ],
              borderColor: [
                "rgba(255, 26, 104, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(0, 0, 0, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        comments: {},
      });
      setCommentsData(comments);
      setLoading(true);
      // return scoreArr;
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
            const arr = commentsData[context.dataIndex].split(". ");
            return arr;
          },
        },
      },
    },
  };

  useEffect(() => {
    setLoading(false);
    getPBScoreHandler();
    setLoading(true);
  }, []);

  return (
    <>
      {/* <h1>PB COMP</h1>
      <h1>{user.bingNumber}</h1> */}
      <div>
        {isLoading && Object.keys(pbData.Data).length > 0 && (
          <>
            <Radar data={pbData.Data} options={config}></Radar>
            <div>
              Adasdas
              {commentsData.map((val, idx) => {
                console.log(val);
                <div key={idx}>{val}</div>;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
