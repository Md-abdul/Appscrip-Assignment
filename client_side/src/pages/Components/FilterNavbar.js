import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import styles from "../CustomeStyle/FilterNavbar.module.css";

const FilterNavbar = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <span className={styles.itemCount}>20 ITEMS</span>

          <h1 onClick={onToggleSidebar} className={styles.toggleButton}>
            <span className={styles.filterText}>
              {isSidebarOpen ? "HIDE FILTER" : "SHOW FILTER"}
            </span>
            {isSidebarOpen ? <VscChevronLeft /> : <VscChevronRight />}
          </h1>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.recommendedSection}>
            <button
              className={styles.recommendedButton}
              onClick={toggleSection}
            >
              <h2 className={styles.recommendedText}>RECOMMENDED</h2>
              {isOpen ? (
                <IoIosArrowUp className={styles.recommendedIcon} />
              ) : (
                <IoIosArrowDown className={styles.recommendedIcon} />
              )}
            </button>

            {isOpen && (
              <div className={styles.dropdownMenu}>
                <ul className="py-1 text-right bg-white">
                  <li className={styles.dropdownMenuItem}>RECOMMENDED</li>
                  <li className={styles.dropdownMenuItem}>NEWEST FIRST</li>
                  <li className={styles.dropdownMenuItem}>POPULAR</li>
                  <li className={styles.dropdownMenuItem}>
                    PRICE: HIGH TO LOW
                  </li>
                  <li className={styles.dropdownMenuItem}>
                    PRICE: LOW TO HIGH
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className={styles.horizontalLine} />
    </>
  );
};

export default FilterNavbar;
