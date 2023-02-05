import data from "../data/sponsors";

import styles from "../styles/Sponsors.module.css";

const SponsorsStrip = () => {
  return (
    <div className={styles.sponsorsFlexContainer}>
      {data.sponsors.map((sponsor) => {
        return (
          <a href={sponsor.url} key={sponsor.name} className={styles.icon}>
            <figure className={styles.icon}>
              <img
                className={styles.logo}
                src={sponsor.image.src}
                alt={sponsor.name}
              />
              {sponsor.flag && (
                <div className={styles.flag}>
                  <img src={sponsor.flag.image.src} alt={sponsor.flag.blurb} />
                </div>
              )}
            </figure>
            {sponsor.blurb && <p className={styles.blurb}>{sponsor.blurb}</p>}
          </a>
        );
      })}
    </div>
  );
};

export default SponsorsStrip;
