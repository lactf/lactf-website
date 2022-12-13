import styles from "../styles/PrizesStrip.module.css";

const PrizesStrip = () => {
  return (
    <div className={styles.prizesFlexContainer}>
      <div className={styles.prizesBlock}>
        <h2>UCLA Section</h2>
        <p>
          The UCLA Section will be composed of teams of at most four students.
          Members of the team must all be from UCLA, in order to be awarded
          prizes.
        </p>
      </div>
      <div className={styles.prizesBlock}>
        <h2>Open Section</h2>
        <p>
          The Open Section will be composed of teams with no size limit. Teams
          in the option section may consist of members from anywhere.
        </p>
      </div>
    </div>
  );
};

export default PrizesStrip;
