import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectLoginStatus } from "../stateManager/slices/LoginStatusSlice";

const ProtectedRoutes = () => {
  const auth = useSelector(selectLoginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth === false) {
      navigate("/");
    }
  }, [auth]);

  return auth ? <Outlet /> : null;
};

export default ProtectedRoutes;
