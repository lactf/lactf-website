import styles from "../styles/PrizesStrip.module.css";

const PrizesStrip = () => {
  return (
    <div>
      <div className={styles.prizesFlexContainer}>
        <div className={styles.prizesBlock}>
          <h2>UCLA Section</h2>
          <p>
            The UCLA Section will be composed of teams that must consist of a
            maximum of four current UCLA undergraduate students in order to be
            eligible for prizes.
          </p>
          <br />
          <br />
          <ul className={styles.prizelist}>
            {/* <li>
              1st place: $200 + <br />
              <a
                className={styles.prizelink}
                href="https://www.myamberlife.com/amberpro/"
              >
                Amber Pro Smart Storage Device
              </a>{" "}
              + <br />
              <a
                className={styles.prizelink}
                href="https://www.myamberlife.com/amber-x/"
              >
                Amber X Smart Storage Device
              </a>
            </li>
            <li>2nd place: $140</li>
            <li>3rd place: $100</li>
            <li>4th & 5th place: $80</li>
            <li>6th-10th place: $40</li> */}
          </ul>
          <br />
          <p>
            UCLA division prizes will be distributed directly to individual team
            members. Amounts listed are per team.
          </p>
          <br />
        </div>
        <div className={styles.prizesBlock}>
          <h2>Open Section</h2>
          <p>
            The Open Section will be composed of teams with no size limit and
            can be from anywhere to be eligible for prizes. All skill levels and
            experiences are welcomed!
          </p>
          <br />
          <br />
          {/* <ul className={styles.prizelist}>
            <li>1st place: $500</li>
            <li>2nd place: $300</li>
            <li>3rd place: $200</li>
            <li>4th & 5th place: $100</li>
          </ul> */}
          <br />
          <p>
            Open division prizes will be distributed to the email linked to the
            given winning teams. Amounts listed are per team.
          </p>
          <br />
        </div>
      </div>
      <p className={styles.prizebetween}>
        Prizes will be announced closer to the competition date. Stay tuned!
      </p>
      <div className={styles.writeprizecontainer}>
        <div className={styles.writeupprizelist}>
          <h3>Writeup Prizes:</h3>
          <br />
          <ul>
            <li>
              There will be some prizes separately designated for writeups. Stay
              tuned for more information!
            </li>
            {/* <li>
              A pool of $400 worth of prize money will be given out via writeup
              prizes, of which $200 is for UCLA students.
            </li>
            <li>
              Writeup prizes are made out to the individual or group that made
              and submitted a winning writeup.
            </li>
            <li>
              Writeup judgement will be done by the LA CTF Organizers
              collectively. Decisions made by the organizers are final.
            </li>
            <li>
              The writeup submission form will be active for 1 week after the
              CTF is over, and will be posted in our discord.
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrizesStrip;
