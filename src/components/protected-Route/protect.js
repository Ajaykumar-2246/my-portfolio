import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const userLoggedIn = localStorage.getItem("userLoggedIn");

  return userLoggedIn ? <Outlet/> : <Navigate to="/login"/>;
}

export default Protected;
