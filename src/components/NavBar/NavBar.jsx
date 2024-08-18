import React from "react";
import SiteLogo from "../../assets/Images/LogoIcon.svg";
import dashboardIcon from "../../assets/Images/dashboardIcon.svg";
import billingIcon from "../../assets/Images/billingIcon.svg";
import examsIcon from "../../assets/Images/examsIcon.svg";
import featuresIcon from "../../assets/Images/featuresIcon.svg";
import settingsAndProfileIcon from "../../assets/Images/settingsAndProfileIcon.svg";
import studentIcon from "../../assets/Images/studentIcon.svg";
import teachersIcon from "../../assets/Images/teachersIcon.svg";
import { NavLink } from "react-router-dom";

 const NavBar = () => {
  return (
    <div className="w-[21%] h-[100vh] overflow-y-auto bg-[#152259] pt-[26px] px-[28px] relative">
      <div className="text-center">
        <img
          className="block mx-auto"
          src={SiteLogo}
          alt="site logo"
          width={65}
          height={65}
        />
        <h4 className="mt-[27px] font-semibold text-[16px] text-white leading-[17px]">
          Udemy Inter. school
        </h4>
      </div>
      <span className="block h-[0.5px] w-[100%] bg-[#BDBDBD] absolute left-0 right-0 top-[180px]"></span>
      <div className="pt-[60px] pl-1 space-y-[12px]">
        <NavLink
          className={({ isActive }) =>
            `flex items-center space-x-[16px] rounded-md w-[222px] pt-[11px] pb-[12px] pl-[16px] relative ${
              isActive ? "bg-[#779fc0] text-white" : "text-white"
            }`
          }
          to={"/"}
        >
          <img src={dashboardIcon} alt="Dashboard icon" />
          <span className="text-[16px] font-semibold">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center space-x-[16px] rounded-md w-[222px] pt-[11px] pb-[12px] pl-[16px] mt-[40px] relative ${
              isActive ? "bg-[#779fc0] text-white" : "text-white"
            }`
          }
          to={"/teachers"}
        >
          <img src={teachersIcon} alt="Teachers icon" />
          <span className="text-[16px] font-semibold">Teachers</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center space-x-[16px] rounded-md w-[222px] pt-[11px] pb-[12px] pl-[16px] mt-[40px] relative ${
              isActive ? "bg-[#779fc0] text-white" : "text-white"
            }`
          }
          to={"/students"}
        >
          <img src={studentIcon} alt="Students icon" />
          <span className="text-[16px] font-semibold">Students</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center space-x-[16px] rounded-md w-[222px] pt-[11px] pb-[12px] pl-[16px] mt-[40px] relative ${
              isActive ? "bg-[#779fc0] text-white" : "text-white"
            }`
          }
          to={"/billing"}
        >
          <img src={billingIcon} alt="Billing icon" />
          <span className="text-[16px] font-semibold">Billing</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center space-x-[16px] rounded-md w-[222px] pt-[11px] pb-[12px] pl-[16px] mt-[40px] relative ${
              isActive ? "bg-[#779fc0] text-white" : "text-white"
            }`
          }
          to={"/settingsAndProfileIcon"}
        >
          <img src={settingsAndProfileIcon} alt="Settings and Profile icon" />
          <span className="text-[16px] font-semibold">
            Settings and profile
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center space-x-[16px] rounded-md w-[222px] pt-[11px] pb-[12px] pl-[16px] mt-[40px] relative ${
              isActive ? "bg-[#779fc0] text-white" : "text-white"
            }`
          }
          to={"/exams"}
        >
          <img src={examsIcon} alt="Exams icon" />
          <span className="text-[16px] font-semibold">Exams</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center space-x-[16px] rounded-md w-[222px] pt-[11px] pb-[12px] pl-[16px] relative ${
              isActive ? "bg-[#779fc0] text-white" : "text-white"
            }`
          }
          to={"/featuresIcon"}
        >
          <img src={featuresIcon} alt="Features icon" />
          <span className="text-[16px] font-semibold">Features</span>
          <span className="font-semibold text-[12px] py-[2px] px-[8px] absolute right-[10px] bg-[#B9D7F1] rounded-[12px]">
            NEW
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
