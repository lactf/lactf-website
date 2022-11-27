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

import aboutEvents from "../public/images/aboutEvents.png";
import aboutHosts from "../public/images/aboutHosts.png";
import aboutSpeakers from "../public/images/aboutSpeakers.png";
import aboutLevels from "../public/images/aboutLevels.png";

import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";

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

        <section className={styles.aboutContainer} id="about">
          <div className={styles.aboutFlexContainer}>
            <div className={styles.aboutBlock}>
              <div className={styles.aboutImageContainer}>
                <Image className={styles.aboutImage} src={aboutHosts}></Image>
              </div>
              <h2>Hosts</h2>
              <p>
                LA CTF is an annual cybersecurity competition hosted by ACM
                Cyber at UCLA
              </p>
            </div>
            <div className={styles.aboutBlock}>
              <div className={styles.aboutImageContainer}>
                <Image className={styles.aboutImage} src={aboutEvents}></Image>
              </div>
              <h2>Events</h2>
              <p>
                There will be a variety of events ranging from competitive
                cybersecurity challenges to more relaxed events like typing
                competitions
              </p>
            </div>
            <div className={styles.aboutBlock}>
              <div className={styles.aboutImageContainer}>
                <Image
                  className={styles.aboutImage}
                  src={aboutSpeakers}
                ></Image>
              </div>
              <h2>Speakers</h2>
              <p>
                Throughout the event, a variety of UCLA professors and
                cybersecurity experts will be giving talks
              </p>
            </div>
            <div className={styles.aboutBlock}>
              <div className={styles.aboutImageContainer}>
                <Image className={styles.aboutImage} src={aboutLevels}></Image>
              </div>
              <h2>Levels</h2>
              <p>
                LA CTF is open to all skill levels! No matter your experience,
                there will be challenges just right for you!
              </p>
            </div>
          </div>
        </section>

        <section className={styles.main}>
          <div className={styles.waivingFlagBlock} id="prizes">
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

          <div className={styles.twoColumns}>
            <div className={styles.waivingFlagBlock}>
              <Image
                src={WavingFlag}
                width={50}
                height={60}
                alt="Waving pink LA CTF flag."
              />
              <span className={styles.headerText}>Beginner Section</span>
              <p>
                The Beginner Section will be composed of teams of at most four
                students. The challenges are designed to be easier and provide
                more learning opportunities for beginners to CTFs. While members
                of the team can be from anywhere, only UCLA teams will be
                awarded prizes for winning in the Beginner Section.
              </p>
            </div>

            <div className={styles.rightColumn}>
              <Image
                src={WavingFlag}
                width={50}
                height={60}
                alt="Waving pink LA CTF flag."
              />
              <span className={styles.headerText}>Open Section</span>
              <p>
                The Open Section will be composed of teams with no size limit.
                The challenges will range from intermediate to advanced
                difficulty. All of the challenges made available for the
                Beginner Section will be made available for the Open section.
                Teams in the Open section may consist of members from anywhere.
              </p>
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
            Here are some of the exciting speakers that will be attending LA
            CTF!
          </p>

          <Carousel />

          <div className={styles.twoColumns}>
            <div className={styles.groupPic}>
              <Image
                src={CyberGM}
                style={{ borderRadius: "8px" }}
                alt="Cyber General Meeting."
              />
            </div>

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
              uclacyber@gmail.com
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
