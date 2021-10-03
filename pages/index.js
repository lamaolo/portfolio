import Head from "next/head";

import Hero from "../components/Hero";
import Separator from "../components/Separator";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucero Amaolo</title>
      </Head>
      <main>
        <Hero />
        <Separator id="my-projects" text="My projects" />
        <MyProjects />
        <Separator id="contact-me" text="Contact me" />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
