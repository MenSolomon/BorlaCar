import { Route, Routes } from "react-router-dom/dist";
import Login from "./screens/Login";
import Home from "./screens/Home";

const App = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Home />} path="/" />
    </Routes>
  );
};

export default App;
