import React from 'react'
import styles from '../styles/HeroSectionSix.module.css'
import Image from 'next/image'
import Data from '../pages/api/pageData.json'
import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'

const HeroSectionSix = () => {
    const [cardData, setCardData] = useState(4);

    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log(window.innerHeight, window.innerWidth)
            if (window.innerWidth <= 480)
            {
                setCardData(2);
            }
            else {   
                setCardData(4);
            }
        })
    })

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
                    {Data.learningBlogs.slice(0, cardData).map((item) => {
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
                <button className={styles.moreBttn} href='/'>More Insights</button>
            </div>
        </div>
    )
}

export default HeroSectionSix