import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styles from "../CustomeStyle/Sidebar.module.css";

const Section = ({ title, items, index, openSections, toggleSection }) => {
  return (
    <div className={styles.section}>
      <div
        className={styles.sectionHeader}
        onClick={() => toggleSection(index)}
      >
        <div>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionSubtitle}>All</p>
        </div>
        <button className={styles.toggleButton}>
          {openSections[index] ? (
            <IoIosArrowUp className={styles.icon} />
          ) : (
            <IoIosArrowDown className={styles.icon} />
          )}
        </button>
      </div>
      {openSections[index] && (
        <div className={styles.items}>
          <p className={styles.unselectAll}>Unselect all</p>
          {items.map((item, itemIndex) => (
            <label key={itemIndex} className={styles.item}>
              <input type="checkbox" className={styles.itemCheckbox} />
              <span className={styles.itemText}>{item}</span>
            </label>
          ))}
        </div>
      )}
      <hr className={styles.separator} />
    </div>
  );
};

const Sidebar = ({ isOpen }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  if (!isOpen) return null;

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
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={styles.sidebarSection}>
        <div className={styles.customizable}>
          <input type="checkbox" className={styles.checkbox} />
          <h1 className={styles.customizableTitle}>CUSTOMIZABLE</h1>
        </div>
        <hr className={styles.separator} />
      </div>

      {sections.map((section, index) => (
        <Section
          key={index}
          index={index}
          title={section.title}
          items={section.items}
          openSections={openSections}
          toggleSection={toggleSection}
        />
      ))}
    </div>
  );
};

export default Sidebar;
