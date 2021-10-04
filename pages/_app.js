import { useEffect, useState } from "react";

import Header from "../components/Header";
import Menu from "../components/Menu";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const gradient = window.localStorage.getItem("gradient") || 1;
    document.body.className = `gradient${gradient}`;
  }, []);

  const handleToggleMenu = () => {
    if (isMenuOpen) {
      // Para efectuar un fade-out cuando el componente se desmonta
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 350);

      setIsMenuVisible(false);
    } else {
      setIsMenuOpen(true);
      setIsMenuVisible(true);
    }
  };

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={handleToggleMenu} />
      <Component {...pageProps} />

      {isMenuOpen ? (
        <Menu isMenuVisible={isMenuVisible} setIsMenuOpen={handleToggleMenu} />
      ) : null}
    </>
  );
}

export default MyApp;
