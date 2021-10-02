import { BsEnvelope } from "react-icons/bs";

import Button from "./Button";

import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p>hey there, I&apos;m</p>
        <h1>Lucero Amaolo</h1>
        <p className={styles.subtitle}>
          A front-end web developer, passionate about tech & design.
        </p>
        <div className={styles.cta}>
          <Button icon={BsEnvelope} style="outline">
            Contact me
          </Button>
        </div>
      </div>
      <div className={styles.decorationDots}></div>
    </section>
  );
};

export default Hero;
