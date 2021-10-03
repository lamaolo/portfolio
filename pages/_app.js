import { useState } from "react";

import Header from "../components/Header";
import Menu from "../components/Menu";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Component {...pageProps} />
      {isMenuOpen ? <Menu /> : null}
    </>
  );
}

export default MyApp;
