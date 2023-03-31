import Link from "next/link";
import React from "react";
import styles from "../styles/DropDownMenu.module.css";

const DropDownMenu = () => {
  return (
    <div className={styles.dropDownMenu}>
      <Link className={styles.dropDownItems} href="/">
        FD Bazaar
      </Link>
      <Link className={styles.dropDownItems} href="/">
        Savings++
      </Link>
      <Link className={styles.dropDownItems} href="/">
        Tax Saver
      </Link>
    </div>
  );
};

export default DropDownMenu;
