'use client';

import styles from './OurServices.module.css';

const steps = [
  'Audit',
  'Offer',
  'Build',
  'Launch',
  'Support',
];

const descriptions = [
  'Free 30-min call to assess what you need.',
  'You get a detailed scope with pricing.',
  'We design and code your site from scratch.',
  'Go live in under 30 days, optimized and tested.',
  'We’re here for updates or changes later.',
];

export default function OurServices() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineTrack}>
          <div className={styles.flowDot} />
        </div>

        <div className={styles.stepsRow}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepItem}>
              <div className={styles.dotWrapper}>
                <div className={styles.dot} />
              </div>
              <div className={styles.label}>
                <h3>{step}</h3>
                <p>{descriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}