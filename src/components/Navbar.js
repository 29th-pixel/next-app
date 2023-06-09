import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {

  const [arrowState, setArrowState] = useState(styles.hideSubMenu)
  const [menuState, setMenuState] = useState(styles.hideSideMenu)

  const onClick = () => {
    if (arrowState === styles.hideSubMenu)
    {
      setArrowState(styles.subMenu);
      document.getElementById("arrow").style.transform = 'rotate(180deg)';
    }
    else
    {
      setArrowState(styles.hideSubMenu);
      document.getElementById("arrow").style.transform = 'rotate(0deg)';
    }
  };

  const onClickSideMenu = () => {
    if (menuState === styles.hideSideMenu)
      setMenuState(styles.showSideMenu);
    else
      setMenuState(styles.hideSideMenu);
  }

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
                  id = "arrow"
                  className={styles.arrow}
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
            alt="Menu Icon"
            onClick={onClickSideMenu}
            style={{ cursor: "pointer" }}
          />
        </div>
      </nav>

      <div className={arrowState}>
        <Link className={styles.subMenuItems} href='/'>FD Bazaar</Link>
        <Link className={styles.subMenuItems} href='/'>Savings++</Link>
        <Link className={styles.subMenuItems} href='/'>Tax Saver</Link>
      </div>

      <div className={menuState}>
        <HamburgerMenu />
      </div>
    </>
  );
};

export default Navbar;
