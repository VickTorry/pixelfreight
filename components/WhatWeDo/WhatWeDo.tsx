import styles from "./WhatWeDo.module.css";

export default function WhatWeDo() {
  return (
    <section className={styles.section} id="what-we-do">
      {/* LEFT: Title with soft animated gradient on 'do' */}
      <div className={styles.left}>
        <div className={styles.titleWrap}>
          <h2 className={styles.heading}>
            What we
            <span aria-hidden="true" className={styles.gradientWord}>do</span>
          </h2>
        </div>
      </div>

      {/* RIGHT: Three content cards (Lovable-style, but CSS Modules) */}
      <div className={styles.right}>
        <div className={styles.card}>
          <p className={styles.cardText}>
            We build simple, yet effective websites for{" "}
            <strong>small–medium carriers and brokerages</strong>.
          </p>
        </div>

        <div className={styles.cardAlt}>
          <p className={styles.cardText}>
            If you already have a site, we&apos;ll help you make it useful. If not, we&apos;ll build your first one the right way.
          </p>
        </div>

        <div className={styles.card}>
          <p className={styles.cardText}>
            Backed by real logistics and tech partnerships, we consult across supply chain, IT/product, SEO &amp; content,
            custom software, and web strategy{" "}
            <span className={styles.mutedAddendum}>
              (including SMEs and SaaS/dev firms targeting supply-chain customers)
            </span>.
          </p>
        </div>
      </div>
    </section>
  );
}
