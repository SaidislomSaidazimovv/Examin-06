import React from "react";
import IconBell from "../../../assets/Images/bell.svg";
import TeachersHome from "../TeachersHome/TeachersHome";

const Teachers = ({ user, setUser }) => {
  const handleLogout = () => {
    setTimeout(() => {
      window.localStorage.href = "/dashboard";
    }, 1000);
  };
  return (
    <div className="px-[38px] pt-[21px]">
      <div className="flex items-center  justify-end space-x-[14px] mb-4">
        <img src={IconBell} alt="bel Icon" width={28} height={28} />
        <button className="text-[#424242] text-[16px] font-semibold w-[90px] rounded-[8px] text-center ">
          Log out
        </button>
      </div>
      <TeachersHome user={user} setUser={setUser} />
    </div>
  );
}

export default Teachers;
