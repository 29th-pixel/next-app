import React from 'react'
import styles from '../styles/HeroSectionTen.module.css'

const HeroSectionTen = () => {
    return (
        <div className={["pageContainer", styles.sectionContainer].join(" ")}>
            <div className={styles.contentContainer}>
                <h1 className={styles.contentHeading}>Start Investing</h1>
                <p className={styles.content}>
                    Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence.
                </p>
                <button className={styles.investBttn}>Invest Now</button>
            </div>
        </div>
    )
}

export default HeroSectionTen