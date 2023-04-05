import React from 'react'
import styles from '../styles/HamburgerMenu.module.css'
import Link from 'next/link'
import Image from 'next/image'

const HamburgerMenu = () => {
    return (
        <div>
            <div className={styles.menuContainer}>
                <nav className={styles.nav}>
                    <div className={styles.subMenuBttn}>
                        <Link className={styles.menuItems} href="/">
                            Invest
                        </Link>
                        <Image
                            src='/images/arrow.png'
                            alt='submenu button'
                            width={12}
                            height={6}
                        />
                    </div>
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