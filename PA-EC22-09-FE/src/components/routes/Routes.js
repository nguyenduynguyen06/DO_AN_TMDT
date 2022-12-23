import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
// import Header from "../Header/Header";
import PageNotFound from "../pages/404";

import Detail from "../pages/Detail";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import WinnerBiding from "../pages/WinnerBiding";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/winner" element={<WinnerBiding />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;
