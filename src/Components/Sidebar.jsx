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
      <aside className="desktop:w-[21vw] tablet:w-[10vw] mobile:w-[13vw] mobile:h-full  tablet:h-screen bg-[#F5F0EF] flex flex-col py-10 items-center overflow-x-hidden overflow-auto  fixed  top-[6.175em] left-0 z-10 mt-[-1rem] ">
        <ul className=" flex flex-col  items-center gap-4 ">
          <li className="  flex items-center text-base text-white font-semibold  rounded-full h-14 gap-x-2 desktop:pl-5 mobile:justify-center desktop:justify-normal tablet:w-[5vw] mb-[-8px] desktop:w-[18vw] mobile:w-[10vw] desktop:bg-gradient-to-r desktop:from-[#CC5B5D] desktop:to-[#5843BD] ">
            <DashboardIcon
              style={{ color: "#ffffff" }}
              className=" mobile:bg-[#898989] desktop:bg-transparent"
            />
            <p className="mobile:hidden desktop:block">Dashboard</p>
          </li>

          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full desktop:w-[18vw] mobile:w-[10vw] xl:w-auto h-14 gap-x-2 desktop:pl-5 mobile:justify-center desktop:justify-normal tablet:w-[5vw]">
            <MessageIcon style={{ color: "#898989" }} />
            <p className="mobile:hidden desktop:block">Inbox</p>
          </li>

          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full desktop:w-[18vw] mobile:w-[10vw] h-14 gap-x-2 desktop:pl-5 mobile:justify-center desktop:justify-normal tablet:w-[5vw]">
            <CalendarMonthIcon style={{ color: "#898989" }} />
            <p className="mobile:hidden desktop:block">Calender</p>
          </li>

          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full desktop:w-[18vw] mobile:w-[10vw] h-14 gap-x-2 desktop:pl-5 mobile:justify-center desktop:justify-normal tablet:w-[5vw]">
            <BusinessCenterIcon style={{ color: "#898989" }} />
            <p className="mobile:hidden desktop:block">Job Posts</p>
          </li>

          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full desktop:w-[18vw] mobile:w-[10vw] h-14 gap-x-2 desktop:pl-5 mobile:justify-center desktop:justify-normal tablet:w-[5vw]">
            <PeopleIcon style={{ color: "#898989" }} />
            <p className="mobile:hidden desktop:block">Candidates</p>
          </li>

          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full desktop:w-[18vw] mobile:w-[10vw] h-14 gap-x-2 desktop:pl-5 mobile:justify-center desktop:justify-normal tablet:w-[5vw]">
            <EditIcon style={{ color: "#898989" }} />
            <p className="mobile:hidden desktop:block">Edit Details</p>
          </li>

          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full desktop:w-[18vw] mobile:w-[10vw] h-14 gap-x-2 desktop:pl-5 mobile:justify-center desktop:justify-normal tablet:w-[5vw]">
            <ArticleIcon style={{ color: "#898989" }} />
            <p className="mobile:hidden desktop:block">My Resumes</p>
          </li>

          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full desktop:w-[18vw] mobile:w-[10vw] h-14 gap-x-2 desktop:pl-5 mobile:justify-center desktop:justify-normal tablet:w-[5vw]">
            <ContactEmergencyIcon style={{ color: "#898989" }} />
            <p className="mobile:hidden desktop:block">Employees</p>
          </li>

          <li className=" flex items-center text-base font-semibold bg-transparent text-[#898989] rounded-full desktop:w-[18vw] mobile:w-[10vw] h-14 gap-x-2 desktop:pl-5 mobile:justify-center desktop:justify-normal tablet:w-[5vw]">
            <AnalyticsIcon style={{ color: "#898989" }} />
            <p className="mobile:hidden desktop:block">Analytics</p>
          </li>

          <li className="text-white flex items-center mobile:justify-center desktop:justify-normal tablet:w-[5vw] text-base font-semibold bg-[#FF6633] rounded-full desktop:w-[18vw] mobile:w-[10vw] desktop:h-14 mobile:h-[10vw] tablet:h-[5vw] gap-x-2 desktop:pl-5">
            <img src={Image.subpremium} alt="" />
            <p className="mobile:hidden desktop:block">Subscribe Premium</p>
          </li>
        </ul>
        <label className="py-8 pb-20 underline text-[#898989] flex items-center justify-center  desktop:text-base mobile:text-xs font-semibold">
          Need help?
        </label>
      </aside>
    );
  }
}

export default Sidebar;
