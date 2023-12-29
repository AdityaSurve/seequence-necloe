import React, { useEffect, useState } from "react";
import User from "../assets/user.jpg";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full z-30 fixed h-16 animate-expand left-0 top-0 flex justify-end items-center bg-white transition-all duration-300">
      <div
        className={`flex w-fit relative items-center animate-fade-up animate-once animate-delay-[1s] justify-between h-fit gap-4 rounded-full px-3 py-2 hover:bg-gray-200 ${
          show && "bg-gray-200"
        } transition-all duration-200 cursor-pointer`}
        onClick={() => setShow(!show)}
      >
        <div className="flex flex-col text-xs h-full justify-between items-start">
          <div className="w-full h-full gap-4 items-center justify-between flex">
            <div className="font-bold">Free Trial</div>
            <div className="h-[10px] w-[1.5px] bg-secondary-800" />
            <div>2 days left</div>
          </div>
          <div className="h-full w-full text-primary-500 font-semibold">
            Extend free trail
          </div>
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src={User} alt="user" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-caret-down-fill transition-transform h-full flex justify-center items-center duration-200 text-secondary-800 -ms-3 ease-in-out ${
            show ? "transform rotate-180" : ""
          }`}
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
        <div
          className={`absolute h-fit z-[-1] p-2 w-full -mt-6 flex justify-center items-center px-2 top-0 right-0 transition-all duration-300 transform ${
            show ? "translate-y-1/2 opacity-100" : "translate-y-0 opacity-0"
          }`}
        >
          <div
            className={`w-full h-fit z-[-1] text-sm px-2 py-3 bg-gray-200 flex flex-col items-center rounded-b-xl`}
          >
            <div className="py-2 px-3 w-full flex justify-between">
              <div>Profile</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
            </div>
            <div className="bg-secondary-800 bg-opacity-10 h-[0.75px] w-full" />
            <div className="py-2 px-3 w-full flex justify-between">
              <div>Log out</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
