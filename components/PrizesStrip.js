import styles from "../styles/PrizesStrip.module.css";

const PrizesStrip = () => {
  return (
    <div className={styles.prizesFlexContainer}>
      <div className={styles.prizesBlock}>
        <h2>UCLA Section</h2>
        <p>
          The UCLA Section will be composed of teams that must consist of a
          maximum of four current UCLA undergraduate students in order to be
          eligible for prizes.
        </p>
      </div>
      <div className={styles.prizesBlock}>
        <h2>Open Section</h2>
        <p>
          The Open Section will be composed of teams with no size limit and can
          be from anywhere to be eligible for prizes. All skill levels and
          experiences are welcomed!
        </p>
      </div>
    </div>
  );
};

export default PrizesStrip;
