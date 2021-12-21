import React from "react";
import Navigation from "./Navigation";
import styles from './general.module.css';

function Contactpage() {
  return (
    <footer>
      <h1 className={styles.contactHead}>Contact</h1>
      <div className={styles.contactSection}>
        <div className={styles.nameContainer}>
            <div className={styles.fnameContainer}>
              <label>First Name</label>
              <input type="text" className={styles.inputFields} />
            </div>
            <div className={styles.lnameContainer}>
              <label>Last Name</label>
              <input type="text" className={styles.inputFields} />
            </div>
          </div>
          <div className={styles.emailMsgContainer}>
            <label>Email ID</label>
            <input type="email" id="email" className={styles.inputFields1} />
            <label>Message</label>
          <textarea id="msgField" className={styles.inputFields2}></textarea>
          <button type="submit" className={styles.btnSubmit}>SUBMIT</button>
          </div>
        </div>
    </footer>
  );
}

export default Contactpage;