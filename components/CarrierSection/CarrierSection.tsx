"use client";

import styles from "./CarrierSection.module.css";

const items = [
  {
    title: "Load request form.",
    description:
      "Make it easy for brokers or customers to send you freight info, or to get a hold of you.",
  },
  {
    title: "Driver hiring page.",
    description:
      "Attract owner-operators or company drivers, and procure them on your website.",
  },
  {
    title: "Show off your lanes and cargo.",
    description:
      "We'll map your regions or highlight them in plain text.",
  },
  {
    title: "Ready for mobile.",
    description:
      "Your site works cleanly on any phone — critical for dispatchers and drivers on the go.",
  },
  {
    title: "Broker-and-shipper-friendly trust signals.",
    description:
      "Add MC#, DOT link, insurance certs, safety info, and photos, everything brokers look for before picking up the phone.",
  },
  {
    title: "And plenty more.",
    description:
      'Day/night mode (for night dispatch or drivers\' convenience), supply-chain optimized UX and visuals, effective copy, and all the little touches that say "we\'re here to haul," not "we booked and disappeared."',
  },
];

export function CarrierSection() {
  return (
    <section id="carriers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            {/* Left - Content */}
            <div className={styles.content}>
              <h2 className={styles.title}>Made for growing carriers</h2>
              <p className={styles.subtitle}>
                We build websites that show you&apos;re serious, to shippers,
                brokers, dispatchers and drivers
              </p>

              <div className={styles.list}>
                {items.map((item) => (
                  <div key={item.title} className={styles.listItem}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDesc}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Mockup visual */}
            <div className={styles.mockupWrap}>
              <div className={styles.mockupCard} aria-hidden="true">
                <div className={styles.blockPrimary}>
                  <div className={styles.lineLg}></div>
                  <div className={styles.lineSm}></div>
                  <div className={`${styles.lineSm} ${styles.w75}`}></div>
                </div>

                <div className={styles.blockList}>
                  <div className={styles.line}></div>
                  <div className={`${styles.line} ${styles.w85}`}></div>
                  <div className={`${styles.line} ${styles.w80}`}></div>
                </div>

                <div className={styles.blockCta}>
                  <div className={styles.ctaBar}></div>
                </div>
              </div>
            </div>
            {/* /Right */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarrierSection;
