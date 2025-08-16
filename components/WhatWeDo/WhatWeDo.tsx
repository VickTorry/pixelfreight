import styles from "./WhatWeDo.module.css";

export default function WhatWeDo() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.heading}>What we do</h2>
      </div>
      <div className={styles.right}>
        <p>
          We build simple, yet effective websites for <strong>small–medium carriers and brokerages</strong>.
        </p>
        <p>
          If you already have a site, we&apos;ll help you make it useful. If not, we&apos;ll build your first one the right way.
        </p>
        <p>
          Our team handles everything: <strong>architecture, design, copywriting, development, hosting setup</strong>, and <strong>affordable ongoing support</strong> whenever you need it.
        </p>
      </div>
    </section>
  );
}
