import React from "react";
import styles from "../CustomeStyle/TitleSection.module.css";

const TitleSection = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <span className="hidden md:inline">
            {" "}
            <br />{" "}
          </span>
          <span className="inline md:hidden"> </span>
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <hr className={styles.horizontalLine}></hr>
    </>
  );
};

export default TitleSection;
