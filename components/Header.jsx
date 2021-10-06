import Link from "next/link";
import { Slant as Hamburger } from "hamburger-react";

import styles from "../styles/Header.module.css";

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.noBg : null}`}>
      <div className={styles.content}>
        <Link href="/">lamaolo</Link>
        <Hamburger
          role="button"
          label="Toggle menu"
          hideOutline={false}
          color="white"
          toggled={isMenuOpen}
          size={26}
          toggle={setIsMenuOpen}
        ></Hamburger>
      </div>
    </header>
  );
};

export default Header;
