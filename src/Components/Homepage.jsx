import React from "react";
import styles from './general.module.css';
import Navigation from "./Navigation";

function Homepage() {
  return (
    <main>
      <div className={styles.mainContent}>
        <h1 className={styles.myName}>Santhosh Sivan A</h1>
        <h5 className={styles.myDesignation}>I'm a Passionate Learner and <br /> Frontend Web Development Enthusiast</h5>
      </div>
    </main>
  );
}

export default Homepage;