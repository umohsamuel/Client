import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Circle from "../Components/Circle";

const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative flex w-[100%]  justify-between ">
        <div className="w-[21vw] h-[200vh] overflow-auto">
          <Sidebar />
        </div>

        <div className="h-[200vh] border-r-2 border-[#CFCEED] absolute left-[21vw] top-[6.175em]"></div>

        <div className="bg-[#F5F0EF] flex w-[79vw] h-[185vh] items-center justify-center mt-[6.175em]">
          <section className=" mx-10  bg-white w-full h-[95%] rounded-2xl border-2 border-[#CFCEED] pl-14 flex flex-col justify-center">
            <div className="flex items-center gap-10 ">
              <Circle>1</Circle>
              <Circle>2</Circle>
              <Circle>3</Circle>
              <Circle>4</Circle>
              <Circle>5</Circle>
              <Circle>6</Circle>
            </div>
            <h1 className="mt-10 text-4xl tracking-wide font-semibold text-[#7F7E7E]">
              Basic Information
            </h1>
            <p className="mt-3 font-normal text-xl text-[#7F7E7E]">
              Let's start with the essentials;
            </p>

            {/* First input field  */}
            <ol>
              <li className="list-disc font-medium text-xl mt-10">
                What's the job title?
              </li>
              <hr className=" ml-[-2rem] my-5 border-b-2 border-[#CFCEED] w-[100%]" />
              <input
                type="text"
                placeholder="Job title"
                className=" rounded-lg border-2 border-[#CFCEED] h-12 w-80 indent-6 placeholder:text-xl"
              />
            </ol>

            {/* Second Input Field  */}
            <ol>
              <li className="list-disc font-medium text-xl mt-10">
                What's the name of your company or organization?
              </li>
              <hr className=" ml-[-2rem] my-5 border-b-2 border-[#CFCEED] w-[100%]" />
              <div className="flex items-center gap-10">
                <div>
                  <p className=" font-normal text-xl mb-3">City</p>
                  <input
                    type="text"
                    placeholder="Enter city"
                    className=" rounded-lg border-2 border-[#CFCEED] h-12 w-52 indent-6 placeholder:text-xl"
                  />
                </div>

                <div>
                  <p className=" font-normal text-xl mb-3">State</p>
                  <input
                    type="text"
                    placeholder="Enter state"
                    className=" rounded-lg border-2 border-[#CFCEED] h-12 w-52 indent-6 placeholder:text-xl"
                  />
                </div>

                <div>
                  <p className=" font-normal text-xl mb-3">Country</p>
                  <input
                    type="text"
                    placeholder="Enter country"
                    className=" rounded-lg border-2 border-[#CFCEED] h-12 w-52 indent-6 placeholder:text-xl"
                  />
                </div>
              </div>
            </ol>

            {/* Third input field  */}
            <ol>
              <li className="list-disc font-medium text-xl mt-10">
                What is the nature of this job?
              </li>
              <hr className=" ml-[-2rem] my-5 border-b-2 border-[#CFCEED] w-[100%]" />
              <select
                name="job"
                id=""
                placeholder="select..."
                className=" rounded-lg border-2 border-[#CFCEED] outline-2 outline-[#CFCEED] h-12 w-80 indent-2 text-xl text-[#7F7E7E] "
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
              <li className="list-disc font-medium text-xl mt-10">
                How do you pay, what is the pay, and when do you pay?
              </li>
              <hr className=" ml-[-2rem] my-5 border-b-2 border-[#CFCEED] w-[100%]" />
              <div className="grid grid-cols-2 gap-5 max-w-[100%] ">
                <select
                  name="how"
                  id="how"
                  className=" rounded-lg border-2 border-[#CFCEED] outline-2 outline-[#CFCEED] h-12 w-80 indent-2 text-xl text-[#7F7E7E] "
                >
                  <option value="how">how do you pay</option>
                </select>

                <select
                  name="when"
                  id="when"
                  className=" rounded-lg border-2 border-[#CFCEED] outline-2 outline-[#CFCEED] h-12 w-80 indent-2 text-xl text-[#7F7E7E] "
                >
                  <option value="when">when do you pay</option>
                </select>

                <select
                  name="usd"
                  id="usd"
                  className=" rounded-lg border-2 border-[#CFCEED] outline-2 outline-[#CFCEED] h-12 w-80 indent-2 text-xl text-[#7F7E7E] "
                >
                  <option value="usd">USD</option>
                </select>

                <input
                  type="text"
                  placeholder="enter amount"
                  className="rounded-lg border-2 border-[#CFCEED] h-12 w-52 indent-6 placeholder:text-xl"
                />
              </div>
            </ol>

            {/* Submit button  */}
            <div className="flex justify-end">
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
