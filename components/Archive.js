import Image from "next/image";

import data from "../data/archive.js";
import websiteImage from "../public/images/archiveWebsiteLight.png";
import platformImage from "../public/images/archivePlatformLight.png";
import githubImage from "../public/images/archiveGithubLight.png";
import styles from "../styles/Archive.module.css";

const Archive = () => {
  return (
    <div className={styles.archiveFlexContainer}>
      {data.entries.map((entry) => {
        return (
          <div key={entry.year} className={styles.archiveYearFlexContainer}>
            <h1 className={styles.archiveYearText}>{entry.year}</h1>

            <div className={styles.archiveItems}>
              <a href={entry.website}>
                <div className={styles.archiveVertCenter}>
                  <Image src={websiteImage} width={40} height={40} alt={"I"} />
                  <p>Website</p>
                </div>
              </a>

              <a href={entry.platform}>
                <div className={styles.archiveVertCenter}>
                  <Image
                    src={platformImage}
                    width={40}
                    height={40}
                    alt={"Mountain with a flag icon"}
                  />
                  <p>Platform</p>
                </div>
              </a>

              <a href={entry.github}>
                <div className={styles.archiveVertCenter}>
                  <Image
                    src={githubImage}
                    width={40}
                    height={40}
                    alt={"Github icon"}
                  />
                  <p>GitHub</p>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Archive;
