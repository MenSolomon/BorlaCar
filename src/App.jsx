import { Route, Routes } from "react-router-dom/dist";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
   <div>
     <Navbar/>
     <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Home />} path="/home" />
    </Routes>
   </div>
  );
};

export default App;
