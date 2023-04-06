import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Data from '../pages/api/pageData.json'

const Footer = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.summaryContainer}>
        <Image
          src="/images/footer/footerLogo.png"
          alt="logo"
          width={108.75}
          height={30}
          className={styles.footerLogo}
        />
        <p>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div className={styles.optionsContainer}>
        <div className={styles.contactContainer}>
          <h1>Want to talk?</h1>
          <p>
            Call us and we will solve all your doubts and help you grow your business
          </p>

          <div className={styles.contactNumber}>
            <Image
              src="/images/footer/phoneIcon.png"
              alt="phoneIcon"
              width={24}
              height={24}
            />
            <p>
              Call {Data.footer.contactUs}
            </p>
          </div>
        </div>

        <div className={styles.companyContainer}>
          <h1>Company</h1>
          <div className={styles.companySubOptions}>
            <ul style={{ listStyle: 'none' }}>

              {Data.footer.companySection?.map((item) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <li>
                    <Link href={item.href} className={styles.companyItems}>
                      {item.optionName}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className={styles.companyContainer} style={{ marginLeft: "48px" }}>
          <h1>Invest</h1>
          <div className={styles.companySubOptions}>
            <ul style={{ listStyle: 'none' }}>
              {Data.footer.investSection.map((item) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <li>
                    <Link href={item.href} className={styles.companyItems}>
                      {item.optionName}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.licensingText}>
        <p>{Data.footer.licensingText}</p>
      </div>

      <div className={styles.mediaHandles}>
        {Data.footer.socialMediaHandles.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Image 
              src={item.imageSrc}
              alt={item.handle}
              width={24}
              height={24}
              href={item.href}
            />
          )
        })}
      </div>
    </div >
  )
}

export default Footer