import { Route, Routes, useLocation } from "react-router-dom/dist";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Navbar from "./src/components/Navbar/Navbar";
import SignIn from "./src/screens/SignIn";
import { useEffect } from "react";

const App = () => {


  return (
   <div>
     <Navbar/>
     <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Home />} path="/home" />
      <Route element={<SignIn />} path="/SignIn" />
    </Routes>
   </div>
  );
};

export default App;
