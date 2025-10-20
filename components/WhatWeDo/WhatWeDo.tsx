import styles from "./WhatWeDo.module.css";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT — title with hover glow + flashlight "do" */}
          <div className={styles.titleGroup}>
            <div className={styles.titleGlow} aria-hidden="true" />
            <h2 className={styles.heading}>
              What we
              <span className={styles.flashDo} data-text="do">do</span>
            </h2>
          </div>

          {/* RIGHT — three Lovable-style cards */}
          <div className={styles.cards}>
            <div className={`${styles.card} ${styles.toneA}`}>
              <div className={styles.cardWash} aria-hidden="true" />
              <p className={styles.cardText}>
                We build simple, yet effective websites for{" "}
                <strong>small–medium carriers and brokerages</strong>.
              </p>
            </div>

            <div className={`${styles.card} ${styles.toneB}`}>
              <div className={styles.cardWashAlt} aria-hidden="true" />
              <p className={styles.cardText}>
                If you already have a site, we&apos;ll help you make it useful. If not,
                we&apos;ll build your first one the right way.
              </p>
            </div>

            <div className={`${styles.card} ${styles.toneA}`}>
              <div className={styles.cardWash} aria-hidden="true" />
              <p className={styles.cardText}>
                Backed by real logistics and tech partnerships, we consult across supply chain,
                IT/product, SEO &amp; content, custom software, and web strategy{" "}
                <span className={styles.addendum}>
                  (including SMEs and SaaS/dev firms targeting supply-chain customers)
                </span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
