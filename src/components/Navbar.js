import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {

  const [arrowState, setArrowState] = useState(styles.hideSubMenu)

  const onClick = () => {
    if (arrowState === styles.hideSubMenu)
      setArrowState(styles.subMenu);
    else
      setArrowState(styles.hideSubMenu);
  };

  return (
    <>
      <nav className={styles.nav}>
        <Link href="\">

          <Image
            src="/images/navbar/topLogo.png"
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
                <Image
                  src="/images/navbar/arrow.png"
                  alt="arrow"
                  width={12}
                  height={6}
                  onClick={onClick}
                  style={{ cursor: "pointer" }}
                />
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
            src="/images/navbar/hamburgerIcon.png"
            width={24}
            height={24}
            alt="Menu Icon" />
        </div>
      </nav>

      <div className={arrowState}>
        <Link className={styles.subMenuItems} href='/'>FD Bazaar</Link>
        <Link className={styles.subMenuItems} href='/'>Savings++</Link>
        <Link className={styles.subMenuItems} href='/'>Tax Saver</Link>
      </div>

      {/* <HamburgerMenu/> */}

    </>
  );
};

export default Navbar;
