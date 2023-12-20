import { Route, Routes } from "react-router-dom/dist";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./screens/SignIn";

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
