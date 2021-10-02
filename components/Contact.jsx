import { RiGithubLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FiChevronsRight } from "react-icons/fi";

import styles from "../styles/Contact.module.css";
import Button from "./Button";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact}>
        <form className={styles.form}>
          <p className={styles.title}>Let&apos;s stay in touch</p>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your name</label>
            <input
              placeholder="Type your name here..."
              type="text"
              name="name"
              id="name"
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              placeholder="Write the subject of the email"
              type="text"
              name="subject"
              id="subject"
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Write the message here"
              type="text"
              name="message"
              rows={3}
              id="message"
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <Button iconPosition="right" icon={FiChevronsRight} style="outline">
              Send
            </Button>
          </div>
        </form>
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
