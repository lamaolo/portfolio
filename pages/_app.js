import { useEffect, useState } from "react";
import Animated from "react-mount-animation";

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
      <Animated.div
        show={isMenuOpen}
        mountAnim={` 
            0% {opacity: 0}
            100% {opacity: 1}
        `}
        time={0.35}
      >
        <Menu setIsMenuOpen={setIsMenuOpen} />
      </Animated.div>
    </>
  );
}

export default MyApp;
