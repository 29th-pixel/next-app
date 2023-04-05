import React from 'react'
import styles from '../styles/HeroSectionEight.module.css'
import Image from 'next/image'

const HeroSectionEight = () => {
    return (
        <div className={["pageContainer", styles.sectionContainer].join(" ")}>
            <div className={styles.contentContainer}>
                <div className={styles.contentText}>
                    <h1 className={styles.contentHeading}>In the press</h1>
                    <p className={styles.content}>
                        Discover the passion, expertise, and values that drive our
                        team and fuel their commitment to excellence.
                    </p>
                </div>
                <div className={styles.contentImages}>
                    <Image
                        src="/images/sectionEight/yourStory.png"
                        alt="NA"
                        width={285}
                        height={102}
                        className={styles.yourStoryImage}
                    />
                    <Image
                        src="/images/sectionEight/news18.png"
                        alt="NA"
                        width={289}
                        height={116}
                        className={styles.news18Image}
                    />
                    <Image
                        src="/images/sectionEight/liveMint.png"
                        alt="NA"
                        width={306}
                        height={94}
                        className={styles.liveMintImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSectionEight