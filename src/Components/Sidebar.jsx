import React, { Component } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageIcon from "@mui/icons-material/Message";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PeopleIcon from "@mui/icons-material/People";
import EditIcon from "@mui/icons-material/Edit";
import ArticleIcon from "@mui/icons-material/Article";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import Image from "./Image";

export class Sidebar extends Component {
  render() {
    return (
      <aside className=" h-auto bg-[#F5F0EF] flex flex-col justify-center items-center overflow-x-hidden overflow-auto  absolute top-[6.175em] left-0 z-10 mt-2">
        {/* Vertical line  */}
        <div className="h-[200vh] border-r-2 border-[#CFCEED] absolute left-[21vw] top-0"></div>

        <ul className="  w-[21vw] pt-5  flex flex-col  items-center gap-4 overflow-auto">
          <li className=" text-white flex items-center text-base font-semibold bg-gradient-to-r from-[#CC5B5D] to-[#5843BD] rounded-full w-[14em] h-14 gap-x-2 pl-5 mb-[-8px]">
            <DashboardIcon style={{ color: "#ffffff" }} />
            <button>Dashboard</button>
          </li>
          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full w-[14em] h-14 gap-x-2 pl-5">
            <MessageIcon style={{ color: "#898989" }} />
            <button>Inbox</button>
          </li>
          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full w-[14em] h-14 gap-x-2 pl-5">
            <CalendarMonthIcon style={{ color: "#898989" }} />
            <button>Calender</button>
          </li>
          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full w-[14em] h-14 gap-x-2 pl-5">
            <BusinessCenterIcon style={{ color: "#898989" }} />
            <button>Job Posts</button>
          </li>
          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full w-[14em] h-14 gap-x-2 pl-5">
            <PeopleIcon style={{ color: "#898989" }} />
            <button>Candidates</button>
          </li>
          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full w-[14em] h-14 gap-x-2 pl-5">
            <EditIcon style={{ color: "#898989" }} />
            <button>Edit Details</button>
          </li>
          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full w-[14em] h-14 gap-x-2 pl-5">
            <ArticleIcon style={{ color: "#898989" }} />
            <button>My Resumes</button>
          </li>
          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full w-[14em] h-14 gap-x-2 pl-5">
            <ContactEmergencyIcon style={{ color: "#898989" }} />
            <button>Employees</button>
          </li>
          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full w-[14em] h-14 gap-x-2 pl-5">
            <AnalyticsIcon style={{ color: "#898989" }} />
            <button>Analytics</button>
          </li>
          <li className="text-white flex items-center text-base font-semibold bg-[#FF6633] rounded-full w-[14em] h-14 gap-x-2 pl-5">
            <img src={Image.subpremium} alt="" />
            <button>Subscribe Premium</button>
          </li>
        </ul>
        <label className="py-8 underline text-[#898989] flex items-center justify-center  text-base font-semibold">
          Need help?
        </label>
      </aside>
    );
  }
}

export default Sidebar;
