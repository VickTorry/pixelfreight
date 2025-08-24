'use client';

import Image from 'next/image';
import styles from './TrustedBy.module.css';

export default function TrustedBy() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Trusted by</h2>

        <div className={styles.grid}>

          {/* GoodFirms Badge */}
          <div className={styles.badgeWrapper}>
            <a
              href="https://www.goodfirms.co/directory/cms/top-website-development-companies"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badgeLink}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://assets.goodfirms.co/badges/color-badge/top-website-development-companies.svg"
                alt="Top Web Development Company on GoodFirms"
                title="Top Web Development Company"
                width={120}
                height={160}
                className={styles.badge}
                loading="lazy"
              />
            </a>
          </div>
          {/* DesignRush Badge */}
          <div className={styles.badgeWrapper}>
            <Image
              src="/designrush-transparent.png"
              alt="DesignRush Badge Light"
              width={120}
              height={160}
              className={`${styles.badge} ${styles.switchableLight}`}
              priority
            />
            <Image
              src="/designrush-transparent.png"
              alt="DesignRush Badge Dark"
              width={120}
              height={160}
              className={`${styles.badge} ${styles.switchableDark}`}
              priority
            />
          </div>
          {/* Clutch Badge */}
          <div className={styles.badgeWrapper}>
            <iframe
              src="https://clutch.co/share/badges/2541548/14232?utm_source=clutch_top_company_badge&utm_medium=image_embed"
              width="120"
              height="120"
              className={styles.clutchFrame}
              title="Top Clutch Consulting Company Odesa 2025"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
