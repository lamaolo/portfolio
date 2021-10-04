import Head from "next/head";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Menu from "../components/Menu";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const gradient = window.localStorage.getItem("gradient") || 1;
    document.body.className = `gradient${gradient}`;
  }, []);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Component {...pageProps} />
      {isMenuOpen ? <Menu setIsMenuOpen={setIsMenuOpen} /> : null}
    </>
  );
}

export default MyApp;
