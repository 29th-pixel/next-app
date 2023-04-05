import React from 'react'
import styles from '../styles/HeroSectionNine.module.css'
import Image from 'next/image'

const Data = [
    {
        id: 1,
        imgSrc: "/images/sectionNine/youtube.png",
        text: "@fixedInvestments"
    },
    {
        id: 2,
        imgSrc: "/images/sectionNine/linkedin.png",
        text: "@fixedInvestments"
    },
    {
        id: 3,
        imgSrc: "/images/sectionNine/telegram.png",
        text: "@fixedInvestments"
    }
]

const HeroSectionNine = () => {
    return (
        <div className={["pageContainer", styles.sectionContainer].join(" ")}>
            <div className={styles.contentContainer}>
                <div className={styles.contentText}>
                    <h1 className={styles.contentHeading}>Follow us</h1>
                    <p className={styles.content}>
                        Discover the passion, expertise, and values that drive our
                        team and fuel their commitment to excellence.
                    </p>
                </div>

                <div className={styles.contentImages}>

                    {Data.map((item) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className={styles.imageContainer}>
                                <Image
                                    src={item.imgSrc}
                                    alt="NA"
                                    width={80}
                                    height={80}
                                    className={styles.image}
                                />
                                <h1>{item.text}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HeroSectionNine