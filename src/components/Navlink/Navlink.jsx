import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({ URL, ImgUrl, title }) => {
  return (
    <NavLink
      className={
        "flex items-center space-x-[16px]  w-[222px] pt-[11px] pb-[12px] pl-[16px]"
      }
      to={URL}
    >
      <img src={ImgUrl} alt="icon" width={17} height={17} />
      <span className="text-[16px] text-white font-semibold">{title}</span>
    </NavLink>
  );
};

export default Navlink;
