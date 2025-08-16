"use client";

import styles from "./BrokerSection.module.css";

const items = [
  {
    title: "Shipper-facing credibility.",
    description:
      'Clean site, visible authority info, client logos, and a clear "Why Us" page to help you close more freight.',
  },
  {
    title: "Carrier onboarding form.",
    description:
      "Let carriers register, upload documents, and express interest, directly on your site.",
  },
  {
    title: "Agent recruiting page.",
    description:
      "Attract and qualify new agents with a focused careers section and simple apply flow.",
  },
  {
    title: "Show your lanes and specializations.",
    description:
      "Whether you're niche or nationwide, we'll help you communicate your value in plain English.",
  },
  {
    title: "Ready for mobile.",
    description:
      "Your site loads fast and looks sharp on dispatchers' phones or your shippers' laptops.",
  },
  {
    title: "And plenty more.",
    description:
      "Clean CTAs, custom quote forms, load visibility links, supply‑chain tuned UX, and all the small touches that say you're not just moving freight, you're growing their business.",
  },
];

export function BrokerSection() {
  return (
    <section id="brokers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            {/* Left - Content */}
            <div className={styles.content}>
              <h2 className={styles.title}>Built for lean brokerages</h2>
              <p className={styles.subtitle}>
                We design broker websites that build trust fast, with shippers,
                agents, and carriers
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

            {/* Right - Visual Mockup */}
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

export default BrokerSection;
