import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Countdown from "../components/Countdown";

import CyberGM from "../public/images/cyberGM.png";
import Discord from "../public/images/discord.png";
import Email from "../public/images/email.png";
import Instagram from "../public/images/instagram.png";
import LongLogo from "../public/images/LongLogoWaving.gif";
import WavingFlag from "../public/images/TransparentWavingFlag.gif";
import BackgroundMasks from "../public/images/BackgroundMasks.svg.js";

import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";
import AboutStrip from "../components/AboutStrip";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Home | LA CTF"
        description="LA CTF is a jeopardy-style capture-the-flag (CTF) cybersecurity competition hosted by ACM Cyber at UCLA & Psi Beta Rho!"
        openGraph={{
          images: [
            {
              url: "https://lactf.uclaacm.com/images/LongLogoWaving.gif",
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
      <main>
        <BackgroundMasks />

        <section className={styles.hero}>
          <div className={styles.mainInfoContainer}>
            <div className={styles.logoContainer}>
              <Image src={LongLogo} alt="Pink LA CTF flag." />
            </div>
            <p className={styles.subheading}>
              Feb 10, 8:00PM PST - Feb 12, 2:00PM PST
            </p>
            <Countdown />
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
            LA CTF will have prizes for both the beginner and open sections!
            More information to come.
          </p>
        </section>

        <section className={`${styles.sponsors} ${styles.wavySection}`}>
          <h2 id="sponsors">
            <span className={styles.headerText}>Sponsors</span>
          </h2>
          <p className={styles.headerDesc}>
            LA CTF would not be possible without all of these amazing sponsors!
            Want your company to be a sponsor? Reach out to{" "}
            <a href="mailto:uclacyber@gmail.com" className={styles.mailto}>
              uclacyber@gmail.com
            </a>
            !
          </p>
        </section>

        <section>
          <div>
            <div className={styles.rightColumn} id="contact">
              <Image
                src={WavingFlag}
                width={50}
                height={60}
                alt="Waving pink LA CTF flag."
              />
              <span className={styles.headerText}>Contacts</span>
              <ul className={styles.contacts}>
                <li>
                  <Image
                    src={Discord}
                    height={45}
                    width={55}
                    alt="Discord logo."
                  />
                  <Link href="/discord">
                    <a className={`${styles.contactsLink} ${styles.discord}`}>
                      lactf.uclaacm.com/discord
                    </a>
                  </Link>
                </li>
                <li>
                  <Image
                    src={Email}
                    height={50}
                    width={50}
                    alt="Email symbol."
                  />
                  <a
                    href="mailto:uclacyber@gmail.com"
                    className={styles.contactsLink}
                  >
                    uclacyber@gmail.com
                  </a>
                </li>
                <li>
                  <Image
                    src={Instagram}
                    height={50}
                    width={50}
                    alt="Instagram logo."
                  />
                  <a
                    href="https://www.instagram.com/uclacyber"
                    className={styles.contactsLink}
                  >
                    @uclacyber
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
