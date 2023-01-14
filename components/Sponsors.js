import data from "../data/sponsors";

import styles from "../styles/Sponsors.module.css";

const SponsorsStrip = () => {
  return (
    <div className={styles.sponsorsFlexContainer}>
      {data.sponsors.map((sponsor) => {
        return (
          <figure key={sponsor.name} alt={sponsor.name} className={styles.icon}>
            <img className={styles.logo} src={sponsor.image.src} />
            {sponsor.flag && (
              <div className={styles.flag}>
                <img src={sponsor.flag.image.src} alt={sponsor.flag.blurb} />
              </div>
            )}
          </figure>
        );
      })}
    </div>
  );
};

export default SponsorsStrip;
