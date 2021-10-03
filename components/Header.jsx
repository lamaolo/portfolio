import Link from "next/link";
import { Slant as Hamburger } from "hamburger-react";

import styles from "../styles/Header.module.css";

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.noBg : null}`}>
      <div>
        <Link href="/">lamaolo</Link>
        <Hamburger
          color="white"
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
        ></Hamburger>
      </div>
    </header>
  );
};

export default Header;
