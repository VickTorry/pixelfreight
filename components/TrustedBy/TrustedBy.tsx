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
              href="https://www.goodfirms.co/company/pixelfreight"
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
            <a
              href="https://www.designrush.com/agency/profile/pixelfreight"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badgeLink}
            >
              <Image
                src="/designrush-transparent.png"
                alt="Pixelfreight on DesignRush"
                width={120}
                height={160}
                className={styles.badge}
                priority
              />
            </a>
          </div>

          {/* Clutch Badge */}
          <div className={styles.badgeWrapper}>
            <iframe
              src="https://clutch.co/share/badges/2541548/14232?utm_source=clutch_top_company_badge&utm_medium=image_embed"
              width="120"
              height="120"
              className={`${styles.clutchFrame} ${styles.badgeLink}`} // add hover scaling
              title="Top Clutch Consulting Company Odesa 2025"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
