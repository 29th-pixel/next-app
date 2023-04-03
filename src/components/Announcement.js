import React from "react";
import Image from "next/image";
import Link from "next/link";
import announceData from "../pages/api/pageData.json";
import styles from "../styles/Announcement.module.css"

const Announcement = () => {
  return (
    <div className={styles.announcementBar}>
      <Image
        src="/images/megaphone.png"
        alt="top logo"
        width={29.5}
        height={22.27}
        className={styles.megaPhone}
      />

      <p>{announceData.announce.text}</p>

      <Link
        className={styles.takeActionBttn}
        href={announceData.announce.href}
      >
        Take Action
      </Link>
    </div>
  );
};

export default Announcement;
