import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Ques from "./components/PersonalBelifs/Questions/Ques";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PBQuesInstruction from "./components/PersonalBelifs/QuestionInstruction/PBQuesInstruction";
import PBQuizInstruction from "./components/PersonalBelifs/QuizInstructions/PBQuizInstructions";
import SelectionScreens from "./components/SelectionScreen/SelectionScreens";
import Login from "./components/UserAuth/Login";
import Signup from "./components/UserAuth/Signup";
import ForgotPassword from "./components/UserAuth/ForgotPassword";
import EndScreen from "./components/endOfQuiz/EndScreen";
import "../src/components/NavBar/NavbarStyles.css";
import { AuthContext } from "./store/auth-context";
import RootLayout from "./RootLayout";
import BUSOMIcon from "../src/images/BUBCLSLogo.png";
import DDInstructions from "./components/DifficultDecisions/DDInstructions/DDInstructions";
import DDDescriptions from "./components/DifficultDecisions/DDDescription/DDDescriptions";
import DDTable from "./components/DifficultDecisions/DDTable/DDTable";
import DDQuestions from "./components/DifficultDecisions/DDQuestions/DDQuestions";
import Reports from "./components/Reports/Reports";
import CAInstructions from "./components/CriticalAnalysis/CAInstructions/CAInstructions";
import CAQuestions from "./components/CriticalAnalysis/CAQuestions/CAQuestions";
import CATable from "./components/CriticalAnalysis/CATable/CATable";
import CADescription from "./components/CriticalAnalysis/CADescription/CADescription";
import CACorQuestions from "./components/CriticalAnalysis/CACorrectedQuestions/CACorQuestions";
import { DDCorQuestions } from "./components/DifficultDecisions/DDCorrectedQuestions/DDCorQuestions";

/**React Router */

const MainLogin = () => {
  return (
    <div>
      <div className="NavbarItems">
        <a target="_self" href="/SelectionScreen" rel="noreferrer">
          <img src={BUSOMIcon} className="BUSOMImageClass" alt="" />
        </a>
      </div>
      <Login />
    </div>
  );
};

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Login />
          </div>
        ),
      },
      {
        path: "/Signup",
        element: (
          <div>
            <Signup />
          </div>
        ),
      },
      {
        path: "/ForgotPassword",
        element: (
          <div>
            <ForgotPassword />
          </div>
        ),
      },
      {
        path: "/SelectionScreen",
        element: (
          <div>
            <SelectionScreens />
          </div>
        ),
      },
      {
        path: "/PBInforamtion",
        element: (
          <div>
            <PBQuizInstruction />
          </div>
        ),
      },
      {
        path: "/PBInstructions",
        element: (
          <div>
            <PBQuesInstruction />
          </div>
        ),
      },
      {
        path: "/PBQuiz",
        element: (
          <div className="App">
            <Ques />
          </div>
        ),
      },
      {
        path: "/CAInstructions",
        element: (
          <div>
            {/* <Navbar /> */}
            <CAInstructions />
          </div>
        ),
      },
      {
        path: "/CADescriptions",
        element: (
          <div>
            <CADescription />
          </div>
        ),
      },
      {
        path: "/CATable",
        element: (
          <div>
            <CATable />
          </div>
        ),
      },
      {
        path: "/CAQuestions",
        element: (
          <div>
            <CAQuestions />
          </div>
        ),
      },
      {
        path: "/CACorQuestions",
        element: (
          <div>
            <CACorQuestions />
          </div>
        ),
      },
      {
        path: "/DDInstructions",
        element: (
          <div>
            <DDInstructions />
          </div>
        ),
      },
      {
        path: "/DDDescriptions",
        element: (
          <div>
            <DDDescriptions />
          </div>
        ),
      },
      {
        path: "/DDTable",
        element: (
          <div>
            <DDTable />
          </div>
        ),
      },
      {
        path: "/DDCorQuestions",
        element: (
          <div>
            <DDCorQuestions />
          </div>
        ),
      },
      {
        path: "/DDQuestions",
        element: (
          <div>
            <DDQuestions />
          </div>
        ),
      },
      {
        path: "/reports",
        element: (
          <div>
            <Navbar />
            <Reports />
          </div>
        ),
      },
      {
        path: "/endScreen",
        element: (
          <div>
            <EndScreen />
            <Navbar />
          </div>
        ),
      },
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <div className="NavbarItems">
//           <a target="_self" href="/SelectionScreen" rel="noreferrer">
//             <img src={BUSOMIcon} className="BUSOMImageClass" alt="" />
//           </a>
//         </div>
//         <Login />
//       </div>
//     ),
//   },
//   {
//     path: "/Signup",
//     element: (
//       <div>
//         <div className="NavbarItems">
//           <a target="_self" href="/SelectionScreen" rel="noreferrer">
//             <img src={BUSOMIcon} className="BUSOMImageClass" alt="" />
//           </a>
//         </div>
//         <Signup />
//       </div>
//     ),
//   },
//   {
//     path: "/ForgotPassword",
//     element: (
//       <div>
//         <div className="NavbarItems">
//           <a target="_self" href="/SelectionScreen" rel="noreferrer">
//             <img src={BUSOMIcon} className="BUSOMImageClass" alt="" />
//           </a>
//         </div>
//         <ForgotPassword />
//       </div>
//     ),
//   },
//   {
//     path: "/SelectionScreen",
//     element: (
//       <div>
//         <Navbar />
//         <SelectionScreens />
//       </div>
//     ),
//   },
//   {
//     path: "/PBInforamtion",
//     element: (
//       <div>
//         <Navbar />
//         <PBQuizInstruction />
//       </div>
//     ),
//   },
//   {
//     path: "/PBInstructions",
//     element: (
//       <div>
//         <Navbar />
//         <PBQuesInstruction />
//       </div>
//     ),
//   },
//   {
//     path: "/PBQuiz",
//     element: (
//       <div className="App">
//         <Navbar />
//         {
//           //<Quesbar/>
//         }
//         <Ques />
//       </div>
//     ),
//   },
//   {
//     path: "/endScreen",
//     element: (
//       <div>
//         <EndScreen />
//         <Navbar />
//       </div>
//     ),
//   },
// ]);

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <main>
        {!ctx.isLoggedIn && <MainLogin /> && (
          <RouterProvider router={router2} />
        )}
        {ctx.isLoggedIn && <SelectionScreens /> && (
          <RouterProvider router={router2} />
        )}
      </main>
      {/* {!ctx.isLoggedIn && <MainLogin />}
      {ctx.isLoggedIn && <RouterProvider router={router2} />} */}
      {/* <RouterProvider router={router2} /> */}
    </React.Fragment>
  );
}

export default App;
