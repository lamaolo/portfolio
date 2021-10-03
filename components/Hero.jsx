import { BsEnvelope } from "react-icons/bs";
import Link from "next/link";

import Button from "./Button";

import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.content}>
        <p>hey there, I&apos;m</p>
        <h1>Lucero Amaolo</h1>
        <p className={styles.subtitle}>
          A front-end web developer, passionate about tech & design.
        </p>
        <div className={styles.cta}>
          <Link passHref href="/#contact-me">
            <a>
              <Button icon={BsEnvelope} style="outline">
                Contact me
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.decorationDots}></div>
    </section>
  );
};

export default Hero;
