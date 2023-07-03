import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/UserAuth/Login";
import Signup from "./components/UserAuth/Signup";
import ForgotPassword from "./components/UserAuth/ForgotPassword";
import RegisterNewPassword from "./components/UserAuth/RegisterNewPassword";
import "../src/components/NavBar/NavbarStyles.css";
import BUSOMIcon from "./components/images/BUBCLSLogo.png";
import SidePanel from "./components/SidePanel/SidePanel";
import Simulation1 from "./components/Quiz/Simulation1/Simulation1";
import Simulation2 from "./components/Quiz/Simulation2/Simulation2";
import Evaluation1 from "./components/Quiz/Evaluation1/Evaluation1";
import Evaluation2 from "./components/Quiz/Evaluation2/Evaluation2";
import PdfV01 from "./components/PDFFiles/PdfV01";
// import { PDFDownloadLink } from "@react-pdf/renderer";

/**React Router */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
         <div className="NavbarItems">
          <a target="_self" href="/SelectionScreen" rel="noreferrer"><img src={BUSOMIcon} className="BUSOMImageClass" alt=""/></a>
          </div>
        <Login />
      </div>
    ),
  },
  {
    path: "/Signup",
    element: (
      <div>
        <div className="NavbarItems">
          <a target="_self" href="/SelectionScreen" rel="noreferrer"><img src={BUSOMIcon} className="BUSOMImageClass" alt=""/></a>
        </div>
        <Signup />
      </div>
    ),
  },
  {
    path: "/ForgotPassword",
    element: (
      <div>
        <div className="NavbarItems">
          <a target="_self" href="/SelectionScreen" rel="noreferrer"><img src={BUSOMIcon} className="BUSOMImageClass" alt=""/></a>
        </div>
        <ForgotPassword />
      </div>
    ),
  },
  {
    path: "/RegisterNewPassword",
    element: (
      <div>
        <div className="NavbarItems">
          <a target="_self" href="/RegisterNewPassword" rel="noreferrer"><img src={BUSOMIcon} className="BUSOMImageClass" alt=""/></a>
        </div>
        <RegisterNewPassword />
      </div>
    ),
  },
  {
    path: "/reports",
    element: (
      <div>
        <Navbar />
        <SidePanel />
      </div>
    ),
  },
  {
    path: "/PdfV01",
    element: (
      <div>
        {/* <PDFDownloadLink document={<PdfV01></PdfV01>} fileName="FORM">
          {({loading}) => (loading ? <button>loading PDF...</button>: <button>Download</button>)}
        </PDFDownloadLink> */}
        <PdfV01></PdfV01>
      </div>
    ),
  },
  {
    path: "/Simulation1",
    element: (
      <div>
        <Navbar />
        <Simulation1 />
      </div>
    ),
  },
  {
    path: "/Simulation2",
    element: (
      <div>
        <Navbar />
        <Simulation2 />
      </div>
    ),
  },
  {
    path: "/Evaluation1",
    element: (
      <div>
        <Navbar />
        <Evaluation1 />
      </div>
    ),
  },
  {
    path: "/Evaluation2",
    element: (
      <div>
        <Navbar />
        <Evaluation2 />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
