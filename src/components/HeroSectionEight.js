import React from 'react'
import Image from 'next/image'
import styles from '../styles/HeroSectionEight.module.css'

export const Data = [
    {
        id: 1,
        heading: "Safe investments that beat inflation",
        content: "Low risk, High return investments that are easy to understand",
        imageSrc: "/images/upArrow.png"
    },
    {
        id: 2,
        heading: "Safe investments that protect capital",
        content: "Get access to stable and low risk investment options for goals where you cannot afford losses",
        imageSrc: "/images/safe.png"
    },
    {
        id: 3,
        heading: "Liquid investments to manage emergencies",
        content: "Choose across investments that you can easily withdraw and liquidate in times of need",
        imageSrc: "/images/plus.png"
    },
]

const HeroSectionEight = () => {
    return (
        <div className={['pageContainer', styles.sectionEightContainer].join(" ")}>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.contentHeading}>Why Fixed ?</h1>
                    <p className={styles.content}>
                        Choose across investments that you can easily withdraw and liquidate in times of need
                    </p>
                </div>

                <div className={styles.cardsContainer}>
                    {Data.map((item) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className={styles.card}>
                                <div className={styles.cardHead}>
                                    <Image
                                        src={item.imageSrc}
                                        alt='uparrow'
                                        width={26}
                                        height={26}
                                        className={styles.cardHeadImage}
                                    />
                                    <h1 className={styles.cardHeading}>{item.heading}</h1>
                                </div>
                                <hr />
                                <p className={styles.cardContent}>{item.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default HeroSectionEight