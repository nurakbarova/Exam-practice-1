import React from "react";
import styles from './homepages.module.css'
const HomePages = () => {
  return (
<main className={styles.main}>
      <div className={styles.home_text}>
      <h4>OPENNING ON 21ST FEBRUARY, 2018</h4>
      <h1>Exhibition on Modern Era</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        sed do eiusmod tempor incididunt..
      </p>
      <button className={styles.main_btn}>Get Started</button>
      </div>
    </main>
  );
};

export default HomePages;
