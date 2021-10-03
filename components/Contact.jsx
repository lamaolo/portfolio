import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

import styles from "../styles/Contact.module.css";
import Button from "./Button";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact}>
        <ContactForm />
        <section className={styles.socials}>
          <p className={styles.title}>Socials</p>
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/lamaolo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubLine color="white" size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucero-amaolo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinLine color="white" size={40} />
            </a>
            <a href="mailto:lamaolo.m@gmail.com">
              <AiOutlineMail color="white" size={40} />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
