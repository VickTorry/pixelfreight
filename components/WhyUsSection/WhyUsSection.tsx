"use client";

import styles from "./WhyUsSection.module.css";

const items = [
  {
    title: "15 years of combined experience.",
    description:
      "We've worked in logistics operations and software delivery, so we build with supply chain realities in mind.",
  },
  {
    title: "Custom, not copy-paste.",
    description:
      "No prebuilt WordPress themes. We scope and design based on your freight flows, hiring needs, and customer interactions.",
  },
  {
    title: "Built for speed and scale.",
    description:
      "We use modern technologies, not just block-based builders, so your site can grow with your network and load volume.",
  },
  {
    title: "Small and responsive.",
    description:
      "You work directly with the team building your site. No middlemen. No handoffs.",
  },
  {
    title: "Fast turnaround.",
    description:
      "Most sites go live in under 30 days, ready for compliance checks, shipper onboarding, or carrier recruiting.",
  },
  {
    title: "Ongoing support.",
    description:
      "Need updates, new features, or content changes later? We're here when you need us. No monthly retainers required.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            We know logistics, and we know how to build for it
          </h2>

          <div className={styles.grid}>
            {items.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.badge}>{index + 1}</div>
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.asSeenOn}>
            <p className={styles.asSeenLabel}>As listed on:</p>
            <div className={styles.asSeenLogos}>
              <div className={styles.logo}>Clutch</div>
              <div className={styles.logo}>G2</div>
              <div className={styles.logo}>GoodFirms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
