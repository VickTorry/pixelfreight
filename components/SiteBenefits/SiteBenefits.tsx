'use client';

import styles from './SiteBenefits.module.css';

const benefits = [
  {
    title: "Builds trust fast.",
    description: "A clean, working site with your MC#, contacts, and real info makes you look legit, and wins business over competitors who look sketchy."
  },
  {
    title: "Improves visibility.",
    description: "Your site gets indexed by search engines, listed on directories, and drives organic traffic you won't get from just a Facebook page."
  },
  {
    title: "Simplifies collaboration.",
    description: "Add a load request form, insurance docs, or onboarding steps to make working with you smooth from the start."
  },
  {
    title: "Attracts better drivers and carriers.",
    description: "Professionals Google you first. A solid site helps the right people take you seriously and reach out."
  },
  {
    title: "Filters noise.",
    description: "A clear site tells your story, shows your lanes and compliance, and cuts down on bad-fit calls or repetitive questions."
  }
];

export default function SiteBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What a site gets you</h2>
        <div className={styles.benefitList}>
          {benefits.map((item, index) => (
            <div key={index} className={styles.benefitItem}>
              <div className={styles.benefitIcon}>{index + 1}</div>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>{item.title}</h3>
                <p className={styles.benefitDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
