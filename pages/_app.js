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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="title" content="Lucero Amaolo" />
        <meta
          name="description"
          content="Hey! I'm Lucero Amaolo, a front-end developer. This is my personal portfolio. Here you can see my work and contact me. "
        />
        <meta
          name="keywords"
          content="lucero Amaolo, lamaolo, github, frontend developer, designer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="/seo-bg.png" />
        <meta property="og:title" content="Lucero Amaolo" />
        <meta
          property="og:description"
          content="Hey! I'm Lucero Amaolo, a front-end developer. This is my personal portfolio. Here you can see my work and contact me."
        />
        <meta property="og:image" content="/seo-bg.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Lucero Amaolo" />
        <meta
          property="twitter:description"
          content="Hey! I'm Lucero Amaolo, a front-end developer. This is my personal portfolio. Here you can see my work and contact me."
        />
        <meta property="twitter:image" content="/seo-bg.png" />
      </Head>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Component {...pageProps} />
      {isMenuOpen ? <Menu setIsMenuOpen={setIsMenuOpen} /> : null}
    </>
  );
}

export default MyApp;
