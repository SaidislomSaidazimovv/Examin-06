import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/UnAuth/Login/Login";
import SignUp from "./pages/UnAuth/SignUp/SignUp";

function UnAuth({ setToken, setSignUp }) {
  return (
    <Routes>
      <Route path="/" element={<Login setToken={setToken} />} />
      <Route path="/sign-up" element={<SignUp setSignUpData={setSignUp} />} />
    </Routes>
  );
}

export default UnAuth;
