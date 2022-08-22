import Head from "next/head";
import { NextSeo } from "next-seo";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <NextSeo
          title="Home | LA CTF"
          description="LA CTF is a jeopardy-style capture-the-flag (CTF) cybersecurity competition hosted by ACM Cyber at UCLA & Psi Beta Rho!"
          openGraph={{
            images: [
              {
                url: "https://www.uclaacm.com/images/logo.png",
                width: 1200,
                height: 1200,
                alt: "LA CTF logo",
              },
            ],
            site_name: "LA CTF",
          }}
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
