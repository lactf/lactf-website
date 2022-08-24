import Image from "next/image";

import Navbar from "../components/Navbar";

import Flag from "../public/images/flag.png";

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

        <h2 id="about">
          <Image
            src={Flag}
            width={60}
            height={60}
            className={styles.flag}
            alt="Pink LA CTF flag."
          />
          <span className={styles.headerText}>About</span>
        </h2>
        <p>
          LA CTF is an annual Capture the Flag (CTF) cybersecurity competition
          hosted by ACM Cyper at UCLA. LA CTF is open to all skill levels of
          cybersecurity! Whether you are tackling your first exploit or have
          professional experience, there will be challenges just right for you!
          There will be a variety of events ranging from the competition
          containing jeopardy-style cybersecurity challenges to talks from UCLA
          professors to fun events such as typing competitions! If you are
          interested in attending, join the Discord to stay up to date with the
          latest information about LA CTF!
        </p>

        <h2 id="prizes">
          <Image src={Flag} width={60} height={60} alt="Pink LA CTF flag." />
          <span className={styles.headerText}>Prizes</span>
        </h2>
        <p>
          LA CTF will have prizes for both the beginner and open sections! More
          information to come.
        </p>

        <h2 id="contacts">
          <Image src={Flag} width={60} height={60} alt="Pink LA CTF flag." />
          <span className={styles.headerText}>Contacts</span>
        </h2>

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

      <footer className={styles.footer}>
        <p>© ACM Cyber at UCLA 2022</p>
      </footer>
    </div>
  );
}
