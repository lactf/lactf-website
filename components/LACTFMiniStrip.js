import Image from "next/image";

import foodSvg from "../public/images/lactfmini-food.svg";
import tshirtSvg from "../public/images/lactfmini-tshirt.svg";
import hangoutSvg from "../public/images/lactfmini-hangout.svg";

import styles from "../styles/AboutStrip.module.css";

const AboutStrip = () => {
  return (
    <div className={styles.aboutFlexContainer}>
      <AboutCard icon={foodSvg} big={true} title="Food" />
      <AboutCard icon={tshirtSvg} big={true} title="Swag" />
      <AboutCard
        icon={hangoutSvg}
        big={true}
        title="Hang out with other CTF-ers!"
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
