import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
