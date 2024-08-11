import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const FilterNavbar = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center md:px-32 ">
        <div className="flex space-x-3 items-center">
          <span className="text-lg font-TotlaProductCount font-bold hidden md:block">
            20 ITEMS
          </span>

          <h1
            onClick={onToggleSidebar}
            className="flex items-center space-x-2 px-4 py-2 cursor-pointer"
          >
            <span className="font-FilterNavfornt text-filterTextColor">
              <span className="">
                {isSidebarOpen ? "HIDE FILTER" : "SHOW FILTER"}
              </span>
              <span className="hidden sm:inline"></span>
            </span>
            {isSidebarOpen ? <VscChevronLeft /> : <VscChevronRight />}
          </h1>
        </div>

        <div className="relative flex items-center ">
          <button className="p-1 flex" onClick={toggleSection}>
            <h2 className="text-xl font-bold cursor-pointer mr-3">
              RECOMMENDED
            </h2>

            {isOpen ? (
              <IoIosArrowUp className="text-xl mt-1" />
            ) : (
              <IoIosArrowDown className="text-xl mt-1" />
            )}
          </button>

          {isOpen && (
            <div className="absolute mt-12 md:mt-60 -left-16 bg-white border border-gray-300 shadow-lg rounded-md w-64">
              <ul className="py-1 text-right">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  RECOMMENDED
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  NEWEST FIRST
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  POPULAR
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  PRICE: HIGH TO LOW
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  PRICE: LOW TO HIGH
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <hr className="h-px my-4 bg-horizontalLineColor border-1 mx-auto w-5/6"></hr>
    </>
  );
};

export default FilterNavbar;


