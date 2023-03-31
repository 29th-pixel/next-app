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
      </nav>
    </>
  );
};

export default Navbar;
