import React, { Component } from "react";
import Image from "./Image";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

class Navbar extends Component {
  render() {
    return (
      <div className=" fixed z-50  bg-[#F5F0EF] top-0">
        <nav className=" px-8 flex items-center tablet:justify-between mobile:justify-evenly py-6">
          <img
            src={Image.moillogo}
            alt="moillogo"
            className=" desktop:ml-3 tablet:max-w-[10vw]"
          />

          <div className="flex tablet:w-[80%]  tablet:justify-between ">
            {/* SearchBox div  */}
            <div className=" relative ml-[1em]">
              <SearchIcon
                style={{ color: "#898989" }}
                className=" tablet:absolute ml-16 top-0 bottom-0 my-auto mobile:relative mobile:mr-4"
              />
              <input
                type="text"
                className=" w-80 h-10 rounded-full bg-white flex border-[#D2D4F8] border-2 ml-12 indent-12 mobile:hidden desktop:flex"
              />
            </div>

            <div className="flex gap-4 items-center">
              <div className=" tablet:w-10 tablet:h-10 mobile:w-5 mobile:h-5 rounded-full bg-white flex items-center justify-center  border-[#D2D4F8] border-2 ">
                <SettingsOutlinedIcon style={{ color: "#898989" }} />
              </div>

              <div className=" tablet:w-10 tablet:h-10 mobile:w-5 mobile:h-5 rounded-full bg-white flex border-[#D2D4F8] border-2 items-center justify-center   ">
                <NotificationsIcon style={{ color: "#898989" }} />
              </div>

              <img
                src={Image.userimage}
                alt=""
                className=" tablet:w-10 tablet:h-10 mobile:w-5 mobile:h-5 rounded-full tablet:mr-16 mobile:mr-0"
              />

              <div className="flex items-center gap-2">
                <img src={Image.translateicon} alt="" />
                <p className=" text-[#5843BD] font-semibold mobile:hidden tablet:block">
                  Translate
                </p>
              </div>
            </div>
          </div>
        </nav>
        <hr className="border-b-2 border-[#CFCEED] w-screen" />
      </div>
    );
  }
}

export default Navbar;
