import React from 'react'
import styles from '../styles/HeroSectionSeven.module.css'

const HeroSectionSeven = () => {
    return (
        <div className={["pageContainer", styles.sectionContainer].join(" ")}>
            <div className={styles.contentContainer}>
                <h1 className={styles.contentHeading}>Meet the team</h1>
                <p className={styles.content}>
                    Discover the passion, expertise, and values that drive our team
                    and fuel their commitment to excellence.
                </p>
            </div>
            <div className={styles.cardsContainer}>
                
            </div>
        </div>
    )
}

export default HeroSectionSeven