import { useEffect } from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Countdown from "../components/Countdown";

import Discord from "../public/images/discord.png";
import Email from "../public/images/email.png";
import Instagram from "../public/images/instagram.png";
import Twitter from "../public/images/twitter.svg";
import LongLogo from "../public/images/LongLogoWavingTransparentBig.gif";
import BackgroundMasks from "../public/images/BackgroundMasks.svg.js";

import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";
import AboutStrip from "../components/AboutStrip";
import TropicalImage from "../components/TropicalImage";
import PrizesStrip from "../components/PrizesStrip";
import SponsorsStrip from "../components/Sponsors";

export default function Home() {
  // there's a really weird bug in Safari where clip paths
  // won't show on first load so we force a CSS reflow here
  useEffect(() => {
    let reflowDone = false;
    let observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.01) {
            if (!reflowDone) {
              entry.target.style.display = "none";
              entry.target.offsetHeight;
              entry.target.style.display = "";
              reflowDone = true;
            }
          }
        }),
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.01],
      }
    );
    observer.observe(document.querySelector("." + styles.speakers));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <NextSeo
        title="Home | LA CTF"
        description="LA CTF is a jeopardy-style capture-the-flag (CTF) cybersecurity competition hosted by ACM Cyber at UCLA & Psi Beta Rho!"
        openGraph={{
          images: [
            {
              url: "https://lactf.uclaacm.com/images/mountains-logo.gif",
              width: 990,
              height: 555,
              alt: "LA CTF logo",
            },
          ],
          site_name: "LA CTF",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Navbar />
      <main className={styles.root}>
        <BackgroundMasks />

        <section className={styles.hero}>
          <div className={styles.mainInfoContainer}>
            <div className={styles.logoContainer}>
              <Image
                src={LongLogo}
                width={990}
                height={550}
                alt="Pink LA CTF flag."
              />
            </div>
            <p className={styles.subheading}>
              Feb 10, 8:00PM PST - Feb 12, 2:00PM PST
            </p>
            <Countdown />
            <div className={styles.heroButtonContainer}>
              <a href="https://forms.gle/gESf8d2EMwfBKzeN6">
                <button
                  className={
                    styles.bigFatPinkButtonThatSaysRegisterUnderTheTimersOrSmth
                  }
                >
                  Register
                </button>
              </a>
              <a href="https://platform.lac.tf/">
                <button
                  className={
                    styles.bigFatPinkButtonThatSaysRegisterUnderTheTimersOrSmth
                  }
                >
                  CTF Platform
                </button>
              </a>
              <a href="https://drive.google.com/file/d/1lsSF9OCtog78hdY_2WNwXgp3086cxMie/view?usp=sharing">
                <button
                  className={
                    styles.bigFatPinkButtonThatSaysRegisterUnderTheTimersOrSmth
                  }
                >
                  Schedule
                </button>
              </a>
            </div>
          </div>
        </section>

        <div className={styles.aboutAndSpeakerBackgroundContainer}>
          <section className={styles.about} id="about">
            <AboutStrip />
          </section>

          <section className={`${styles.speakers} ${styles.wavySection}`}>
            <h2 id="speakers">
              <span className={styles.headerText}>Speakers</span>
            </h2>
            <p className={styles.headerDesc}>
              Here are some of the exciting speakers that will be attending LA
              CTF!
            </p>

            <Carousel />
          </section>
        </div>

        <section className={`${styles.prizes} ${styles.wavySection}`}>
          <h2 id="prizes">
            <span className={styles.headerText}>Prizes</span>
          </h2>
          <p className={styles.headerDesc}>
            LA CTF will have prizes for both the UCLA and open sections! While
            there will be two sections for prizes, all of the challenges will be
            the same for both sections. More information coming soon.
          </p>
          <PrizesStrip />
        </section>

        <section className={`${styles.sponsors} ${styles.wavySection}`}>
          <h2 id="sponsors">
            <span className={styles.headerText}>Sponsors</span>
          </h2>
          <p className={styles.headerDesc}>
            LA CTF would not be possible without all of these amazing sponsors!
            Want your company to be a sponsor? Reach out to{" "}
            <Link href="mailto:uclacyber@gmail.com" className={styles.mailto}>
              uclacyber@gmail.com
            </Link>
            !
          </p>

          <SponsorsStrip />
        </section>

        <section className={styles.contacts}>
          <h2 id="contact">
            <span className={styles.headerText}>Contacts</span>
          </h2>
          <ul>
            <li>
              <a
                href="/discord"
                className={`${styles.contactsLink} ${styles.discord}`}
              >
                <TropicalImage
                  src={Discord}
                  height={45}
                  width={55}
                  alt="Discord logo."
                />
                <span>lactf.uclaacm.com/discord</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/pbrucla"
                className={styles.contactsLink}
              >
                <TropicalImage
                  src={Twitter}
                  height={50}
                  width={50}
                  alt="Twitter logo."
                />
                <span>@pbrucla</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:uclacyber@gmail.com"
                className={styles.contactsLink}
              >
                <TropicalImage
                  src={Email}
                  height={50}
                  width={50}
                  alt="Email symbol."
                />
                <span>uclacyber@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/uclacyber"
                className={styles.contactsLink}
              >
                <TropicalImage
                  src={Instagram}
                  height={50}
                  width={50}
                  alt="Instagram logo."
                />
                <span>@uclacyber</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
