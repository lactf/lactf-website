import React from "react";
import Link from 'next/link';
import Image from 'next/image';

import Discord from '../public/discord.png';

import styles from "../styles/Navbar.module.css";

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navbarItems}>
            <li className={styles.navbarElement}><Link href='/#about'>
                <a className={styles.navbarText}>About</a> 
            </Link></li>
            <li className={styles.navbarElement}><Link href='/#speakers' className={styles.navbarText}>
                <a className={styles.navbarText}>Speakers</a>
            </Link></li>
            <li className={styles.navbarElement}><Link href='/#sponsors' className={styles.navbarText}>
                <a className={styles.navbarText}>Sponsors</a>
            </Link></li>
            <li className={styles.discord}>
                <a href='https://discord.gg/qD6vmsgECn'>
                    <Image src={Discord} height={50} width={50}/>
                </a>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar