import { useEffect } from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Head from "next/head";

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
import LACTFMiniStrip from "../components/LACTFMiniStrip";
import Archive from "../components/Archive.js";

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
              url: "https://lac.tf/images/mountains-logo.gif",
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
      <Head>
        <link rel="canonical" href="https://lac.tf" />
      </Head>
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
              Feb 7, 2025 08:00PM PST - Feb 9, 2025 02:00PM PST
              <br />
              Covel Grand Horizons
            </p>
            <Countdown />
            <div className={styles.heroButtonContainer}>
              <a href="https://platform.lac.tf/">
                <button
                  className={
                    styles.bigFatPinkButtonThatSaysRegisterUnderTheTimersOrSmth
                  }
                >
                  CTF Platform
                </button>
              </a>
              <a href="https://ctftime.org/ctf/820">
                <button
                  className={
                    styles.bigFatPinkButtonThatSaysRegisterUnderTheTimersOrSmth
                  }
                >
                  CTFtime
                </button>
              </a>
              <a href="https://static.lac.tf/schedule.pdf">
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
              During the competition, we will be having some speakers give
              live-streamed talks. Stay tuned for more information!
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
            the same for both sections.
          </p>
          <PrizesStrip />
        </section>

        <section className={`${styles.sponsors} ${styles.wavySection}`}>
          <h2 id="sponsors">
            <span className={styles.headerText}>Sponsors</span>
          </h2>
          <p className={styles.headerDesc}>
            LA CTF would not be possible without our amazing sponsors! Want your
            company to be a sponsor? Reach out to{" "}
            <Link
              href="mailto:uclacyber+lactf@gmail.com"
              className={styles.mailto}
            >
              uclacyber@gmail.com
            </Link>
            !
          </p>

          <SponsorsStrip />
        </section>

        <section className={`${styles.lactfmini}`}>
          <div className={styles.lactfminiFlexContainer}>
            <h2 id="lactfmini">
              <span className={styles.headerText}>LA CTF Mini</span>
            </h2>
            <img
              src={"/images/flag.png"}
              alt="Flag"
              className={styles.lactfminiFlagIcon}
            />
          </div>

          <p className={styles.headerDesc}>
            This year, we're excited to launch LA CTF Mini, a special program
            inviting high school students from the LA area to participate in LA
            CTF 2025! You'll enjoy all the perks of LA CTF, including:
          </p>
          <br></br>

          <LACTFMiniStrip />

          <br></br>
          <p className={`${styles.headerDesc} ${styles.lactfminiWaiver}`}>
            IMPORTANT: High school students, please sign the following{" "}
            <u>
              <Link
                href="https://request.finance.ucla.edu/?frm_id=EventWaiver&event_id=a1qHp000004gaj9"
                className={styles.mailto}
              >
                waiver
              </Link>
            </u>{" "}
            by <b>Friday, 31st Jan 2025</b>!
          </p>
        </section>

        <section className={`${styles.archive}`}>
          <h2 id="archive">
            <span className={styles.headerText}>Archive</span>
          </h2>
          <p className={styles.archiveHeaderDesc}>
            Check out our past competition challenges and results!
          </p>

          <Archive />
        </section>

        <section className={styles.contacts}>
          <h2 id="contact">
            <span className={styles.headerText}>Contacts</span>
          </h2>
          <ul>
            <li>
              {/* This is an a tag href to a 302 redirect on /discord in case we need
              to update the invite link. As such, react should *not* attempt to load */}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
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
                <span>lac.tf/discord</span>
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
                href="mailto:uclacyber+lactf@gmail.com"
                className={styles.contactsLink}
              >
                <TropicalImage
                  src={Email}
                  height={50}
                  width={50}
                  alt="Email symbol."
                />
                <span>uclacyber+lactf@gmail.com</span>
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
