import React from 'react'
import styles from '../styles/HeroSectionTwo.module.css'
import Image from 'next/image'

const HeroSectionTwo = () => {
    return (
        <div className={['pageContainer', styles.sectionTwoContainer].join(" ")}>
            <div className={styles.contentImage}>
            </div>

            <div className={styles.contentContainer}>
                <h1 className={styles.contentHeading}>FD Bazaar</h1>
                <p className={styles.content}>
                    Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc<br />
                    vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <button className={styles.exploreBttn}>Explore FDs</button>
            </div>
        </div>
    )
}

export default HeroSectionTwo