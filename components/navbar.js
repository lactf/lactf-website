import React from "react";
import Link from 'next/link';
import Image from 'next/image';

import Discord from '../public/discord.png';

import classes from "../styles/Navbar.module.css";

function Navbar() {
    return(
        <nav className={classes.navbar}>
            <ul className={classes.navbarItems}>
            <li><Link href='/#about'>
                About 
            </Link></li>
            <li><Link href='/#speakers'>
                Speakers
            </Link></li>
            <li><Link href='/#sponsors'>
                Sponsors
            </Link></li>
            <li className={classes.discord}>
                <a href='https://discord.gg/qD6vmsgECn'>
                    <Image src={Discord} />
                </a>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar