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
                    <div className={styles.subMenuBttn}>
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
                    {/* <div className={styles.subMenuInvest}>
                        <ul>
                            <li><Link href='/'>FD Bazaar</Link></li>
                            <li><Link href='/'>Savings++</Link></li>
                            <li><Link href='/'>Tax Saver</Link></li>
                        </ul>
                    </div> */}
                    <div>
                        <Link className={styles.menuItems} href="/">
                            Blogs
                        </Link>
                    </div>
                    <div>
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