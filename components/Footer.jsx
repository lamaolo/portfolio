import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>
        designed & coded by{" "}
        <a
          href="https://github.com/lamaolo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucero Amaolo
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
