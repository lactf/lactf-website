import Image from "next/image";

import Countdown from "../components/Countdown";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Flag from "../public/images/flag.png";
import CyberGM from "../public/images/cyberGM.png";
import Discord from "../public/images/discord.png";
import Email from "../public/images/email.png";
import Instagram from "../public/images/instagram.png";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to LA CTF!</h1>
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
          <div className={styles.prizes}>
            <Image src={Flag} width={60} height={60} alt="Pink LA CTF flag." />
            <span className={styles.headerText}>Prizes</span>
            <p>
              LA CTF will have prizes for both the beginner and open sections!
              More information to come.
            </p>
          </div>

          <div className={styles.contacts}>
            <Image src={Flag} width={60} height={60} alt="Pink LA CTF flag." />
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
          <Image src={Flag} width={60} height={60} alt="Pink LA CTF flag." />
          <span className={styles.headerText}>Speakers</span>
        </h2>
        <p>
          Here are some of the exciting speakers that will be attending LA CTF!
        </p>

        <h2 id="sponsors">
          <Image src={Flag} width={60} height={60} alt="Pink LA CTF flag." />
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
