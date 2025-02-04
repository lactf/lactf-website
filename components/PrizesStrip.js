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
                    {
                        <ul className={styles.prizelist}>
                            <li>
                                1st place: $200 +<br />
                                <a
                                    className={styles.prizelink}
                                    href="https://www.latticeworkinc.com/hardware/amberpro/"
                                >
                                    1x Amber Pro Smart Storage Device
                                </a>{" "}
                                + <br />
                                <a
                                    className={styles.prizelink}
                                    href="https://binary.ninja/features/"
                                >
                                    2x Binary Ninja Licenses
                                </a>{" "}
                            </li>
                            <li>
                                2nd place: $140 +<br />
                                <a
                                    className={styles.prizelink}
                                    href="https://www.latticeworkinc.com/hardware/amberpro/"
                                >
                                    1x Amber Pro Smart Storage Device
                                </a>{" "}
                                + <br />
                                <a
                                    className={styles.prizelink}
                                    href="https://binary.ninja/features/"
                                >
                                    2x Binary Ninja Licenses
                                </a>{" "}
                            </li>
                            <li>3rd place: $100</li>
                            <li>4th & 5th place: $80</li>
                            <li>6th-10th place: $40</li>
                        </ul>
                    }
                    <br />
                    {
                        <p>
                            UCLA division prizes will be distributed directly to individual
                            team members in the form of{" "}
                            <a className={styles.prizelink} href="https://www.amazon.com/">
                                US amazon.com gift cards
                            </a>
                            . Amounts listed are per team.
                        </p>
                    }
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
                    {
                        <ul className={styles.prizelist}>
                            <li>
                                1st place: $500 + <br />
                                <a
                                    className={styles.prizelink}
                                    href="https://binary.ninja/features/"
                                >
                                    2× Binary Ninja Licenses
                                </a>{" "}
                            </li>
                            <li>
                                2nd place: $300 + <br />
                                <a
                                    className={styles.prizelink}
                                    href="https://binary.ninja/features/"
                                >
                                    1× Binary Ninja License
                                </a>{" "}
                            </li>
                            <li>3rd place: $200</li>
                            <li>4th & 5th place: $100</li>
                        </ul>
                    }
                    <br />
                    {
                        <p>
                            Open division prizes will be distributed to the email linked to
                            the given winning teams in the form of{" "}
                            <a className={styles.prizelink} href="https://www.amazon.com/">
                                US amazon.com gift cards
                            </a>
                            . Amounts listed are per team.
                        </p>
                    }
                    <br />
                </div>
            </div>
            {
                <p className={styles.prizebetween}>
                    Additionally,{" "}
                    <a className={styles.prizelink} href="https://binary.ninja/features/">
                        1 Binary Ninja License
                    </a>{" "}
                    will be awarded for the best Binary Ninja writeup (either division).{" "}
                    <br />
                    Prizes are subject to change and may be made conditional on proof of
                    challenge completion (writeups).
                </p>
            }
            <div className={styles.writeprizecontainer}>
                <div className={styles.writeupprizelist}>
                    <h3>Writeup Prizes:</h3>
                    <br />
                    <ul>
                        <li>
                            A pool of $700 worth of prize money will be given out via writeup
                            prizes, of which $150 is reserved for UCLA students.
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrizesStrip;


