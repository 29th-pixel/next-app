import React, { useState } from 'react'
import styles from '../styles/HamburgerMenu.module.css'
import Link from 'next/link'
import Image from 'next/image'

const HamburgerMenu = () => {

    const [subInvestState, setSubInvestState] = useState(styles.hideSubInvest);

    const subInvest = () => {
        if (subInvestState === styles.hideSubInvest)
            setSubInvestState(styles.subMenuInvest)
        else
            setSubInvestState(styles.hideSubInvest)
    }

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.menuContainer}>
                <nav className={styles.nav}>
                    <div className={[styles.menuItemContainer, styles.subMenuBttn].join(" ")}>
                        <Link className={styles.menuItems} href="/">
                            Invest
                        </Link>
                        <Image
                            src='/images/navbar/arrow.png'
                            alt='submenu button'
                            width={12}
                            height={6}
                            onClick={subInvest}
                        />
                    </div>
                    <div className={subInvestState}>
                        <Link className={styles.subMenuItems} href='/'>FD Bazaar</Link>
                        <Link className={styles.subMenuItems} href='/'>Savings++</Link>
                        <Link className={styles.subMenuItems} href='/'>Tax Saver</Link>
                    </div>
                    <div className={styles.menuItemContainer}>
                        <Link className={styles.menuItems} href="/">
                            Blogs
                        </Link>
                    </div>
                    <div className={styles.menuItemContainer}>
                        <Link className={styles.menuItems} href="/">
                            About
                        </Link>
                    </div>
                </nav>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Best Investment Options</button>
            </div>
        </div>
    )
}

export default HamburgerMenu