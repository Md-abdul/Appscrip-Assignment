import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Section = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleSection}
        >
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-subHeadingSize mt-3">All</p>
          </div>
          <button className="p-1">
            {isOpen ? (
              <IoIosArrowUp className="text-xl -mt-8" />
            ) : (
              <IoIosArrowDown className="text-xl -mt-8" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="mt-4">
            <p className="text-filterTextColor underline mb-4">Unselect all</p>
            {items.map((item, index) => (
              <label key={index} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2 h-5 w-5" />
                <span className="text-CheckBoxText">{item}</span>
              </label>
            ))}
          </div>
        )}

        <hr className="h-px my-4 bg-horizontalLineColor border-1 mx-auto w-full" />
      </div>
    </>
  );
};

const Sidebar = ({ isOpen }) => {
  const sections = [
    { title: "IDEAL FOR", items: ["Men", "Women", "Baby & Kid"] },
    { title: "OCCASION", items: ["Casual", "Formal", "Party"] },
    { title: "WORK", items: ["Office", "Outdoor", "Home"] },
    { title: "FABRIC", items: ["Cotton", "Silk", "Wool"] },
    { title: "SEGMENT", items: ["Premium", "Economy"] },
    { title: "SUITABLE FOR", items: ["Summer", "Winter", "All Seasons"] },
    { title: "RAW MATERIALS", items: ["Cotton", "Polyester", "Nylon"] },
  ];

  return (
    <div
      className={`absolute top-20 left-0 w-1/3 px-32 h-full transition-transform duration-200 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 hidden lg:block">
        <div className="flex items-center mt-5">
          <input type="checkbox" className="h-6 w-6" />
          <h1 className="text-2xl font-bold ml-3">CUSTOMIZABLE</h1>
        </div>
        <hr className="h-px my-4 bg-horizontalLineColor border-1 mx-auto w-full" />
      </div>

      {sections.map((section, index) => (
        <Section key={index} title={section.title} items={section.items} />
      ))}
    </div>
  );
};

export default Sidebar;
