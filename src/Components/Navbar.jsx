import React, { Component } from "react";
import Image from "./Image";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

class Navbar extends Component {
  render() {
    return (
      <div className=" fixed z-50  bg-[#F5F0EF] overflow-x-hidden">
        <nav className=" px-8 flex items-center justify-between py-6">
          <img src={Image.moillogo} alt="moillogo" className=" ml-3" />

          <div className="flex w-[80%] justify-between">
            {/* SearchBox div  */}
            <div className=" relative">
              <SearchIcon
                style={{ color: "#898989" }}
                className=" absolute ml-16 top-0 bottom-0 my-auto"
              />
              <input
                type="text"
                className=" w-80 h-10 rounded-full bg-white flex border-[#D2D4F8] border-2 ml-12 indent-12"
              />
            </div>

            <div className="flex gap-4 items-center">
              <div className=" w-10 h-10 rounded-full bg-white flex items-center justify-center  border-[#D2D4F8] border-2">
                <SettingsOutlinedIcon style={{ color: "#898989" }} />
              </div>
              <div className=" w-10 h-10 rounded-full bg-white flex border-[#D2D4F8] border-2 items-center justify-center   ">
                <NotificationsIcon style={{ color: "#898989" }} />
              </div>
              <img
                src={Image.userimage}
                alt=""
                className=" w-10 h-10 rounded-full mr-16"
              />
              <div className="flex items-center gap-2">
                <img src={Image.translateicon} alt="" />
                <p className=" text-[#5843BD] font-semibold">Translate</p>
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
