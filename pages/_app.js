import Head from "next/head";

import Navbar from "../components/Navbar";

import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LA CTF | Home</title>
        <meta
          name="description"
          content="LA CTF is a jeopardy-style capture-the-flag (CTF) cybersecurity competition hosted by ACM Cyber at UCLA & Psi Beta Rho!"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
