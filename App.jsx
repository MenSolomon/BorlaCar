import { Route, Routes, useLocation } from "react-router-dom/dist";

import Navbar from "./src/components/Navbar/Navbar";
import SignIn from "./src/screens/SignIn";
import { useEffect, useState } from "react";
import ProtectedRoutes from "./src/Utilities/ProtectedRoutes";
import Home from "./src/screens/Home";
import UserHomePage from "./src/screens/UserHomePage";
import Login from "./src/screens/Login";
import MenuDrawerSmallScreens from "./src/components/Drawers/MenuDrawerSmallScreens";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640); // Initial state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    //
    <div
    // style={{ paddingTop: isMobile ? "5vh" : "0" }}
    >
      {/* className="pt-30" */}
      {/* className="hidden lg:block"  */}
      {/* className="block sm:hidden" */}
      <Navbar />
      <MenuDrawerSmallScreens />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignIn />} path="/SignIn" />
        <Route element={<Login />} path="/login" />
        <Route element={<Login />} path="/driver/login" />

        <Route element={<UserHomePage />} path="/home" />

        <Route element={<ProtectedRoutes />}>
          {/* <Route element={<Home />} path="/home" /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
