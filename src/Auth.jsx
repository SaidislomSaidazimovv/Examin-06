import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Auth/Dashboard/Dashboard";
import Teachers from "./pages/Auth/Teachers/Teachers";
import Students from "./pages/Auth/Students/Students";
import Billing from "./pages/Auth/Billing/Billing";
import SettingsAndProfile from "./pages/Auth/SettAndProf/SettAndProf";
import Exams from "./pages/Auth/Exams/Exams";
import Features from "./pages/Auth/Features/Features";
import TeachersAdd from "./pages/Auth/TeachersAdd/TeachersAdd";
import avatarImg from "././assets/Images/avatarSvg.svg";
import TeacherDetails from "./pages/Auth/TeachersDetail/TeachersDetail";

function Auth() {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user")) || [
      {
        id: 1,
        avatarImg: avatarImg,
        name: "Kristin Watson",
        subject: "Chemistry",
        class: "JSS 2",
        email: "michela@example.com",
        gender: "Female",
      },
    ]
  );

  return (
    <div className="flex">
      <NavBar />
      <div className="w-[79%] h-[100vh] overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/teachers"
            element={<Teachers user={user} setUser={setUser} />}
          />
          <Route path="/teacher/:id" element={<TeacherDetails />} />
          <Route path="/students" element={<Students />} />
          <Route path="/billing" element={<Billing />} />
          <Route
            path="/settingsAndProfileIcon"
            element={<SettingsAndProfile />}
          />
          <Route path="/exams" element={<Exams />} />
          <Route
            path="/add-teachers"
            element={<TeachersAdd user={user} setUser={setUser} />}
          />
          <Route path="/featuresIcon" element={<Features />} />
        </Routes>
      </div>
    </div>
  );
}

export default Auth;
