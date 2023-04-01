import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {

  const [arrowState, setArrowState] = useState({})

  return (
    <>
      <nav className={styles.nav}>
        <Link href="\">
          <Image
            src="/images/topLogo.png"
            alt="top logo"
            width={108.75}
            height={30}
            className={styles.navbarLogo}
          />
        </Link>
        <div className={styles.navContainer}>
          <ul>
            <li>
              <div className={styles.navDropDown}>
                <Link className={styles.navItems} href="\">
                  Invest
                </Link>
                {/* <div onClick={subMenuHandler}> */}
                <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  width={12}
                  height={6}
                />
                {/* </div> */}
              </div>
            </li>
            <li>
              <Link className={styles.navItems} href="\">
                Blogs
              </Link>
            </li>
            <li>
              <Link className={styles.navItems} href="\">
                About
              </Link>
            </li>
          </ul>
        </div>

        <button className={styles.navBarButton}>Best Investment Options</button>

        <div className={styles.hamburgerMenu}>
          <Image
            src="/images/hamburgerIcon.png"
            width={24}
            height={24}
            alt="Menu Icon" />
        </div>
      </nav>

      <div className={styles.subMenu}>  
        <Link className={styles.subMenuItems} href='/'>FD Bazaar</Link>
        <Link className={styles.subMenuItems} href='/'>Savings++</Link>
        <Link className={styles.subMenuItems} href='/'>Tax Saver</Link>
      </div>
    </>
  );
};

export default Navbar;
