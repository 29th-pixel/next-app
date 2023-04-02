import React from 'react'
import styles from '../styles/HeroSectionFour.module.css'

const HeroSectionFour = () => {
  return (
    <div className={['pageContainer', styles.sectionFourContainer].join(" ")}>
      <div className={styles.contentImage}>
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.contentHeading}>Tax Saver</h1>
        <p className={styles.content}>
          Choose across investments that you can easily withdraw and liquidate in times of need
        </p>
        <button className={styles.exploreBttn}>Save Your Tax</button>
      </div>
    </div>
  )
}

export default HeroSectionFour