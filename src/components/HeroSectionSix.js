import React from 'react'
import styles from '../styles/HeroSectionSix.module.css'
import Image from 'next/image'
import Data from '../pages/api/pageData.json'
import Link from 'next/link'

const HeroSectionSix = () => {
    return (
        <div className={["pageContainer", styles.sectionContainer].join(" ")}>
            <div className={styles.contentContainer}>
                <div className={styles.headingContainer}>
                    <h1 className={styles.heading}>Keep Learning. Keep Growing.</h1>
                    <p className={styles.content}>
                        Insights and Strategies for Mastering Your Finances: Stay Up-to-Date
                        with the Latest Trends, Tips, and Techniques to Take Control of Your Money
                    </p>
                </div>

                <div className={styles.cardContainer}>

                    {Data.learningBlogs.map((item) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className={styles.card}>
                                <div className={styles.cardHead}>
                                    <Image
                                        src={item.imageSrc}
                                        alt="NA"
                                        width={296}
                                        height={203}
                                        className={styles.cardImage}
                                    />
                                    <div className={styles.cardContent}>
                                        <h1>{item.blogHeading}</h1>
                                        <p>{item.blogIntro}</p>
                                    </div>
                                </div>
                                <div className={styles.cardFooter}>
                                    <p>{item.date}</p>
                                    <Link className={styles.readMore} href={item.readMoreSrc}>Read More</Link>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default HeroSectionSix