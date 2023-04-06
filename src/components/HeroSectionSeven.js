import React from 'react'
import styles from '../styles/HeroSectionSeven.module.css'
import Image from 'next/image'
import Data from '../pages/api/pageData.json'

const HeroSectionSeven = () => {
    return (
        <div className={["pageContainer", styles.sectionContainer].join(" ")}>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <h1>Meet the team</h1>
                    <p>
                        Discover the passion, expertise, and values that drive our team and
                        fuel their commitment to excellence.
                    </p>
                </div>

                <div className={styles.teamContainer}>
                    <div className={styles.topFounder}>
                        <div className={styles.founderCard}>
                            <Image
                                src="/images/sectionSeven/aksharShah.png"
                                width={246}
                                height={282}
                                alt="NA"
                                className={styles.founderImage}
                            />
                            <div className={styles.cardFooter}>
                                <div className={styles.cardText}>
                                    <p className={styles.founderName}><b>Akshar</b> Shah</p>
                                    <p className={styles.designation}>Founder and CEO</p>
                                </div>
                                <Image
                                    src="/images/sectionSeven/linkedin.png"
                                    alt="NA"
                                    width={24}
                                    height={22.93}
                                    className={styles.linkedinLogo}
                                    href="/"
                                />
                            </div>
                        </div>

                        <div className={styles.quoteContainer}>
                            <Image
                                src="/images/sectionSeven/quotesOpen.png"
                                alt="NA"
                                width={59.25}
                                height={38.26}
                                className={styles.openQuotes}
                            />
                            <p>
                                Our vision is to make safe investments with better returns easily accessibly to all indians
                            </p>
                            <Image
                                src="/images/sectionSeven/quotesClose.png"
                                alt="NA"
                                width={59.25}
                                height={38.26}
                                className={styles.closeQuotes}
                            />
                        </div>
                    </div>

                    <div className={styles.founderCardsContainer}>
                        {Data.founderData.map((item) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className={styles.founderCard}>
                                    <Image
                                        src={item.imageSrc}
                                        width={246}
                                        height={282}
                                        alt="NA"
                                        className={styles.founderImage}
                                    />
                                    <div className={styles.cardFooter}>
                                        <div className={styles.cardText}>
                                            <p className={styles.founderName}>
                                                <b>{item.founderFirstName}</b>{item.founderSecondName}
                                            </p>
                                            <p className={styles.designation}>{item.designation}</p>
                                        </div>
                                        <Image
                                            src="/images/sectionSeven/linkedin.png"
                                            alt="NA"
                                            width={24}
                                            height={22.93}
                                            href={item.profileLink}
                                            className={styles.linkedinLogo}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroSectionSeven