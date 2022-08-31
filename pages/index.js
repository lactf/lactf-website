import Image from "next/image";
import { NextSeo } from "next-seo";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Speaker from "../components/Speaker";
import Countdown from "../components/Countdown";

import CyberGM from "../public/images/cyberGM.png";
import Discord from "../public/images/discord.png";
import Email from "../public/images/email.png";
import Instagram from "../public/images/instagram.png";
import LongLogo from "../public/images/LongLogoWaving.gif";
import WavingFlag from "../public/images/TransparentWavingFlag.gif";

import data from "../data/speakers.js";

import styles from "../styles/Home.module.css";

export default function Home() {
  var speakers = data["speakers"];

  const [index, setIndex] = useState(0);

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
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <Image src={LongLogo} alt="Pink LA CTF flag." />
        </div>
        <p className={styles.subheading}>
          February, 10th 8:00 pm PST - February 12th 2:00 pm PST (42 hours)
        </p>
        <Countdown />

        <div className={styles.aboutContainer} id="about">
          <div className={styles.aboutPic}>
            <Image
              src={CyberGM}
              style={{ borderRadius: "8px" }}
              alt="Cyber General Meeting."
            />
          </div>
          <div className={styles.aboutText}>
            <h2>About Us</h2>
            <p>
              LA CTF is an annual Capture the Flag (CTF) cybersecurity
              competition hosted by ACM Cyber at UCLA. LA CTF is open to all
              skill levels of cybersecurity! Whether you are tackling your first
              exploit or have professional experience, there will be challenges
              just right for you! There will be a variety of events ranging from
              the competition containing jeopardy-style cybersecurity challenges
              to talks from UCLA professors to fun events such as typing
              competitions! If you are interested in attending, join the Discord
              to stay up to date with the latest information about LA CTF!
            </p>
          </div>
        </div>

        <div className={styles.twoColumns}>
          <div className={styles.prizes} id="prizes">
            <Image
              src={WavingFlag}
              width={50}
              height={60}
              alt="Waving pink LA CTF flag."
            />
            <span className={styles.headerText}>Prizes</span>
            <p>
              LA CTF will have prizes for both the beginner and open sections!
              More information to come.
            </p>
          </div>

          <div className={styles.contacts} id="contact">
            <Image
              src={WavingFlag}
              width={50}
              height={60}
              alt="Waving pink LA CTF flag."
            />
            <span className={styles.headerText}>Contacts</span>
            <ul>
              <li>
                <Image
                  src={Discord}
                  height={45}
                  width={55}
                  alt="Discord logo."
                />
                <a
                  href="https://discord.gg/VEJf6gqdP5"
                  className={`${styles.contactsLink} ${styles.discord}`}
                >
                  discord.gg/VEJf6gqdP5
                </a>
              </li>
              <li>
                <Image src={Email} height={50} width={50} alt="Email symbol." />
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

        <h2 id="speakers">
          <Image
            src={WavingFlag}
            width={50}
            height={60}
            alt="Waving pink LA CTF flag."
          />
          <span className={styles.headerText}>Speakers</span>
        </h2>
        <p>
          Here are some of the exciting speakers that will be attending LA CTF!
        </p>
        <div className={styles.slideshow}>
          <a
            className={styles.prev}
            onClick={() =>
              setIndex((index + (speakers.length - 1)) % speakers.length)
            }
          >
            &#10094;
          </a>
          <Speaker
            name={speakers[index].name}
            title={speakers[index].title}
            info={speakers[index].info}
            image={speakers[index].image}
          />
          <a
            className={styles.next}
            onClick={() => setIndex((index + 1) % speakers.length)}
          >
            &#10095;
          </a>
        </div>

        <div className={styles.dots}>
          <span
            className={index == 0 ? styles.active : styles.dot}
            onClick={() => setIndex(0)}
          ></span>
          <span
            className={index == 1 ? styles.active : styles.dot}
            onClick={() => setIndex(1)}
          ></span>
        </div>

        <h2 id="sponsors">
          <Image
            src={WavingFlag}
            width={50}
            height={60}
            alt="Waving pink LA CTF flag."
          />
          <span className={styles.headerText}>Sponsors</span>
        </h2>
        <p>
          LA CTF would not be possible without all of these amazing sponsors!
          Want your company to be a sponsor? Reach out to{" "}
          <a href="mailto:uclacyber@gmail.com" className={styles.mailto}>
            uclacyber@gmail
          </a>
          .
        </p>
      </main>

      <Footer />
    </div>
  );
}
