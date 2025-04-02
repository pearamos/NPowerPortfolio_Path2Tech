import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Paloma</h1>
        <p className={styles.description}>
          I'm a fullstack developer and NPower App Development alumna with experience using the MERN techstack. Reach out if you'd like to learn more!
        </p>
        <a href="https://www.linkedin.com/in/palomaramos26/" className={styles.contactBtn} target="_blank">
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="3D image of me working on a computer"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};