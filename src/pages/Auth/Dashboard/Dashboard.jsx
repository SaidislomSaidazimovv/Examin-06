import React from "react";
import { useNavigate } from "react-router-dom";
import dashboardStudents from "../../../assets/Images/dashboardStudents.svg";
import dashboardAdmin from "../../../assets/Images/dashboardAdmin.svg";
import bx_support from "../../../assets/Images/bx_support.svg";
import chevronDown from "../../../assets/Images/chevron-down.svg";
import dashboardBank from "../../../assets/Images/dashboardBank.svg";
import IconBell from "../../../assets/Images/bell.svg";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("newToken");
    navigate("/");
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between w-full pt-[15px] pb-[15px] pl-[94px] pr-[100px] bg-[#FCFAFA]">
        <div className="flex flex-col">
          <strong className="text-[#424242] text-[16px]">
            Learn how to launch faster
          </strong>
          <p className="text-[#424242] text-[16px]">
            Watch our webinar for tips from our experts and get a limited-time
            offer.
          </p>
        </div>
        <div className="flex items-center space-x-[48px]">
          <img src={IconBell} alt="bell Icon" width={28} height={28} />
          <button
            onClick={handleLogout}
            className="text-[#FCFAFA] text-[16px] font-semibold w-[120px] rounded-[8px] bg-[#509CDB] py-[10px] text-center"
          >
            Log out
          </button>
        </div>
      </div>
      <div className="pl-[94px] pt-[43px]">
        <h1 className="text-[#4F4F4F] text-[36px] font-semibold">
          Welcome to your dashboard, Udemy school
        </h1>
        <h3 className="text-[#4F4F4F] pl-[70px] text-[22px] mt-[13px] font-semibold">
          Uyo/school/@teachable.com
        </h3>
        <ul className="mt-[40px] pl-[70px] flex flex-col space-y-[30px]">
          <li className="flex items-start space-x-[20px]">
            <img src={dashboardAdmin} alt="icon" width={36} height={36} />
            <div className="flex flex-col space-y-[15px] w-[514px]">
              <h4 className="text-[21px] font-medium text-[#4F4F4F]">
                Add other admins
              </h4>
              <p className="text-[14px] text-[#4F4F4F]">
                Create rich course content and coaching products for your
                students. <br /> When you give them a pricing plan, they’ll
                appear on your site!
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-[20px]">
            <img src={dashboardBank} alt="icon" width={36} height={36} />
            <div className="flex flex-col space-y-[15px] w-[514px]">
              <h4 className="text-[21px] font-medium text-[#4F4F4F]">
                Add classes
              </h4>
              <p className="text-[14px] text-[#4F4F4F]">
                Create rich course content and coaching products for your
                students. <br /> When you give them a pricing plan, they’ll
                appear on your site!
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-[20px]">
            <img src={dashboardStudents} alt="icon" width={36} height={36} />
            <div className="flex flex-col space-y-[15px] w-[514px]">
              <h4 className="text-[21px] font-medium text-[#4F4F4F]">
                Add students
              </h4>
              <p className="text-[14px] text-[#4F4F4F]">
                Create rich course content and coaching products for your
                students. <br /> When you give them a pricing plan, they’ll
                appear on your site!
              </p>
            </div>
          </li>
        </ul>
        <button className="flex items-center justify-center space-x-3 w-[171px] bg-[#152259] rounded-[30px] text-center py-[16px] absolute right-[90px] bottom-[20px] hover:opacity-60 shadow-xl">
          <img src={bx_support} alt="icon" width={16} height={16} />
          <span className="text-[16px] font-semibold text-[#FCFAFA]">
            Support
          </span>
          <img src={chevronDown} alt="icon" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
