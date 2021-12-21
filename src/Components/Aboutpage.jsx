import React from "react";
import Navigation from "./Navigation";
import styles from './general.module.css';

function Aboutpage() {
  return (
    <section>
      <div className={styles.aboutSection}>
        <h2 className={styles.aboutHead}>About</h2>
        <p className={styles.aboutContent}>
          I'm a B.Sc (Computer Science) Graduate passed out in 2021 in the month of July.
          I was studied in Agurchand Manmull Jain College of Arts and Science, Meeanambakkam, Chennai.
        </p>
        <p className={styles.aboutContent}>
          I'm a Passionate learner, learning Full-stack Web Development. I'm an IT Aspirant and Frontend Web Development Enthusiast.
          I know the fundamentals of HTML5, CSS3, JavaScript and Bootstrap. I have done lot of mini projects such as Login Validation,
          Marksheet Evaluation and Single Page Responsive Website to get trained with basic HTML, CSS, JavaScript and Bootstrap. I have designed
          the Landing Page of Netflix and Sample Professional Personal Portfolio with the Help of 7 days free bootcamp provided by ShapeAI.
          Currently I'm working on E-Commerce Website which have the aim to make people easier to buy cloths from their home through online.
        </p>
      </div>
    </section>
  );
}

export default Aboutpage;