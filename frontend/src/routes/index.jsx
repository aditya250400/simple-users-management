//import useContext
import React, { useContext } from "react";

//import context
import { AuthContext } from "../context/AuthContext";

//import react router dom
import { Routes, Route, Navigate } from "react-router-dom";

//import view home
import Home from "../views/home/index.jsx";

//import view register
import Register from "../views/auth/register.jsx";

//import view login
import Login from "../views/auth/login.jsx";

export default function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Register />
          )
        }
      />
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />
    </Routes>
  );
}
