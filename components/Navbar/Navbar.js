import React from 'react';
// import "Link" depuis "next/link"
import Link from 'next/link';

// import style
import styles from './Navbar.module.css';


const Navbar = () => {

    return (

        <nav className={styles.navbar}>

            <Link href="/">
                Accueil
            </Link>

            <Link href="/listes">
                Listes
            </Link>

            <Link href="/isr">
                ISR
            </Link>

            <Link href="/coursBitcoin">
                BTC
            </Link>

            <Link href="/add">
                Add (post)
            </Link>
        </nav>
    );
};

export default Navbar;