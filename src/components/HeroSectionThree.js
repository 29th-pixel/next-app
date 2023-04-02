import React from 'react'
import styles from '../styles/HeroSectionThree.module.css'
const HeroSectionThree = () => {
    return (
        <div className={['pageContainer', styles.sectionThreeContainer].join(" ")}>
            <div className={styles.contentContainer}>
                <h1 className={styles.contentHeading}>Savings++</h1>
                <p className={styles.content}>
                    Get access to stable and low risk investment options
                    for goals where you cannot afford losses
                </p>
                <button className={styles.exploreBttn}>Save Now</button>
            </div>
            <div className={styles.contentImage}>
            </div>
        </div>
    )
}

export default HeroSectionThree