import Image from "next/image";

import aboutEvents from "../public/images/aboutEvents.png";
import aboutHosts from "../public/images/aboutHosts.png";
import aboutSpeakers from "../public/images/aboutSpeakers.png";
import aboutLevels from "../public/images/aboutLevels.png";

import styles from "../styles/AboutStrip.module.css";

const AboutStrip = () => {
  return (
    <div className={styles.aboutFlexContainer}>
      <AboutCard
        icon={aboutHosts}
        title="Hosts"
        desc="LA CTF is an annual cybersecurity competition hosted by ACM Cyber at UCLA."
      />
      <AboutCard
        icon={aboutEvents}
        big={true}
        title="Events"
        desc="There will be a variety of events ranging from competitive cybersecurity challenges to more relaxed events like typing competitions."
      />
      <AboutCard
        icon={aboutSpeakers}
        title="Speakers"
        desc="Throughout the event, a variety of UCLA professors and cybersecurity experts will be giving talks. Check them out below!"
      />
      <AboutCard
        icon={aboutLevels}
        big={true}
        title="Levels"
        desc="LA CTF will have two divisions, UCLA and Open. No matter your skill level, there will be challenges right for you!"
      />
    </div>
  );
};

const AboutCard = ({ icon, big, title, desc }) => {
  return (
    <div className={styles.aboutBlock}>
      <div className={styles.aboutImageContainer}>
        <Image
          className={big ? styles.aboutImageBig : styles.aboutImageSmall}
          src={icon}
          layout="fill"
          alt="About icon showing details about LA CTF."
        ></Image>
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default AboutStrip;
