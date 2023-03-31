import React from "react";
import Image from "next/image";
import styles from "../styles/ContentSectionOne.module.css";

const ContentSectionOne = () => {
  return (
    <div className={styles.pageContainer}>
      {/* <div> */}
        <Image
          src="/images/rupeeGoldCoin.png"
          alt="gold coin image"
          width={300}
          height={300}
          className={styles.goldCoin}
        />
      {/* </div> */}

      {/* <div > */}
        <Image
          src="/images/fCoin.png"
          alt="f coin image"
          width={340}
          height={340}
          className={styles.fCoin}
        />
      {/* </div> */}

      <div className={styles.contentContainer}>
        <h1 className={styles.contentHeading}>Stress-Free Investing</h1>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br />
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <button className={styles.waitlistBttn}>Join Waitlist</button>
      </div>

      <Image
        src="/images/percentCoin.png"
        alt="percent coin"
        width={220}
        height={220}
        className={styles.percentCoin}
      />

      <Image
        src="/images/arrowCoin.png"
        alt="arrow coin"
        width={228}
        height={228}
        className={styles.arrowCoin}
      />
    </div>
  );
};

export default ContentSectionOne;
