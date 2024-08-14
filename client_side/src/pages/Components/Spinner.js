import styles from "../CustomeStyle/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinnerOuter}></div>
        <div className={styles.spinnerInner}></div>
      </div>
    </div>
  );
};

export default Spinner;
