import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["first-line"]}>
        <h1>There&apos;s a</h1>{" "}
        <Image
          src="/images/hero1.jpg"
          width={308}
          height={408}
          alt="person 1"
          className="person1"
        />
        <h1>better</h1>
      </div>
      <h1> way</h1>
      <Image
        src="/images/hero2.png"
        width={308}
        height={408}
        alt="person 1"
        className="person1"
      />
      <h1>to work</h1>
    </div>
  );
};

export default Hero;
