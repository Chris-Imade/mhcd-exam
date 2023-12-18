import React, { memo } from "react";
import TTT from "../images/ttt.png";

const ExamsList = ({ setSelectedCourse }) => {
  return (
    <div>
      {/* Search Section */}
      <div className="m-6 transition-all duration-500 ease-in-out">
        <div className="flex items-center">
          <div className="mr-5">
            <select name="Filter" id="Filter">
              <option value="popular">Popular</option>
              <option value="latest">Latest</option>
              <option value="free">Free</option>
            </select>
          </div>
          <input
            className="bg-gray-300 rounded-l-full w-full py-2 px-6 outline-0"
            type="text"
          />
          <button
            type="submit"
            className="py-2 px-5 bg-[#E85F2F] rounded-r-full text-white font-semibold"
          >
            Search
          </button>
        </div>
      </div>
      <hr />

      {/* Courses */}
      <div className="lg:m-6 pt-12 lg:pt-0 flex flex-col lg:flex-row justify-between items-center lg:flex-wrap w-full">
        <div
          onClick={() => setSelectedCourse("Training The Trainer")}
          className="max-w-[300px] bg-slate-200 pb-3 hover:cursor-pointer hover:shadow-md transition-all duration-500 ease-in-out hover:scale-110"
        >
          <img className="" src={TTT} alt="TTT" />
          <h4 className="font-semibold my-3 ml-2 text-xl">Train The Trainer</h4>
          <p className="ml-2">
            This training is intended to give facilitators full know-how of
            online facilitating strategies
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(ExamsList);
