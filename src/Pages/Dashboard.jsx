import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Circle from "../Components/Circle";

const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative flex w-[100%]  justify-between ">
        <div className="desktop:w-[21vw] overflow-auto">
          <Sidebar />
        </div>

        {/* Vertical line  */}
        <div className="h-full border-r-2 border-[#CFCEED] absolute desktop:left-[23vw] mobile:hidden desktop:block z-[999999]"></div>

        <div
          className=" flex w-auto m-auto h-full
          justify-center items-center py-[1em] pt-[7.175em]"
        >
          <section className="  p-10 bg-white w-full h-[95%] tablet:rounded-2xl tablet:border-2 border-[#CFCEED] pl-14 flex flex-col justify-center mobile:ml-[2em]  tablet:ml-0">
            <div className="flex items-center tablet:gap-10 mobile:gap-5 ">
              <Circle>1</Circle>
              <Circle>2</Circle>
              <Circle>3</Circle>
              <Circle>4</Circle>
              <Circle>5</Circle>
              <Circle>6</Circle>
            </div>
            <h1 className="mt-10 tablet:text-4xl mobile:text-2xl tracking-wide font-semibold text-[#7F7E7E]">
              Basic Information
            </h1>
            <p className="mt-3 font-normal tablet:text-xl mobile:text-lg text-[#7F7E7E]">
              Let's start with the essentials;
            </p>

            {/* First input field  */}
            <ol>
              <li className="list-disc font-medium tablet:text-xl mobile:text-lg mt-10">
                What's the job title?
              </li>
              <hr className=" tablet:ml-[-2rem] my-5 border-b-2 border-[#CFCEED] w-[100%]" />
              <input
                type="text"
                placeholder="Job title"
                className=" rounded-lg border-2 border-[#CFCEED] h-12 tablet:w-80 indent-6 tablet:placeholder:text-xl mobile:placeholder:text-lg"
              />
            </ol>

            {/* Second Input Field  */}
            <ol>
              <li className="list-disc font-medium tablet:text-xl mobile:text-lg mt-10">
                What's the name of your company or organization?
              </li>
              <hr className="tablet:ml-[-2rem] my-5 border-b-2 border-[#CFCEED] w-[100%]" />
              <div className="flex mobile:flex-col laptop:flex-row justify-center gap-10">
                <div>
                  <p className=" font-normal tablet:text-xl mobile:text-lg mb-3">
                    City
                  </p>
                  <input
                    type="text"
                    placeholder="Enter city"
                    className=" rounded-lg border-2 border-[#CFCEED] h-12 w-52 indent-6 tablet:placeholder:text-xl mobile:placeholder:text-lg"
                  />
                </div>

                <div>
                  <p className=" font-normal tablet:text-xl mobile:text-lg mb-3">
                    State
                  </p>
                  <input
                    type="text"
                    placeholder="Enter state"
                    className=" rounded-lg border-2 border-[#CFCEED] h-12 w-52 indent-6 tablet:placeholder:text-xl mobile:placeholder:text-lg"
                  />
                </div>

                <div>
                  <p className=" font-normal tablet:text-xl mobile:text-lg mb-3">
                    Country
                  </p>
                  <input
                    type="text"
                    placeholder="Enter country"
                    className=" rounded-lg border-2 border-[#CFCEED] h-12 w-52 indent-6 tablet:placeholder:text-xl mobile:placeholder:text-lg"
                  />
                </div>
              </div>
            </ol>

            {/* Third input field  */}
            <ol>
              <li className="list-disc font-medium tablet:text-xl mobile:text-lg mt-10">
                What is the nature of this job?
              </li>
              <hr className=" tablet:ml-[-2rem] my-5 border-b-2 border-[#CFCEED] w-[100%]" />
              <select
                name="job"
                id=""
                placeholder="select..."
                className=" rounded-lg border-2 border-[#CFCEED] outline-2 outline-[#CFCEED] h-12 tablet:w-80 indent-2 tablet:text-xl mobile:text-lg text-[#7F7E7E] "
              >
                <option value="" disabled>
                  select...
                </option>
                <option value="">Unknown for now</option>
                <option value="">Unknown for now</option>
                <option value="">Unknown for now</option>
              </select>
            </ol>

            {/* Fourth input field  */}
            <ol>
              <li className="list-disc font-medium tablet:text-xl mobile:text-lg mt-10">
                How do you pay, what is the pay, and when do you pay?
              </li>
              <hr className=" tablet:ml-[-2rem] my-5 border-b-2 border-[#CFCEED] w-[100%]" />
              <div className="grid grid-cols-2 gap-5 max-w-[100%] ">
                <select
                  name="how"
                  id="how"
                  className=" rounded-lg border-2 border-[#CFCEED] outline-2 outline-[#CFCEED] h-12 laptop:w-80 indent-2 tablet:text-xl mobile:text-lg text-[#7F7E7E] "
                >
                  <option value="how">how do you pay</option>
                </select>

                <select
                  name="when"
                  id="when"
                  className=" rounded-lg border-2 border-[#CFCEED] outline-2 outline-[#CFCEED] h-12 laptop:w-80 indent-2 tablet:text-xl mobile:text-lg text-[#7F7E7E] "
                >
                  <option value="when">when do you pay</option>
                </select>

                <select
                  name="usd"
                  id="usd"
                  className=" rounded-lg border-2 border-[#CFCEED] outline-2 outline-[#CFCEED] h-12 laptop:w-80 indent-2 tablet:text-xl mobile:text-lg text-[#7F7E7E] "
                >
                  <option value="usd">USD</option>
                </select>

                <input
                  type="text"
                  placeholder="enter amount"
                  className="rounded-lg border-2 border-[#CFCEED] h-12 laptop:w-52 tablet:indent-6 tablet:placeholder:text-xl mobile:placeholder:text-lg"
                />
              </div>
            </ol>

            {/* Submit button  */}
            <div className="flex tablet:justify-end">
              <button className="mt-10 mr-14 text-white  text-base font-semibold bg-[#5843BD] rounded-full w-[12em] h-12">
                Save and submit
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
