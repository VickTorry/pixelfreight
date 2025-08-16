import styles from "./OurServices.module.css";

const steps = [
  { title: "Audit", description: "Free 30-min call to assess what you need." },
  { title: "Offer", description: "You get a detailed scope with pricing." },
  { title: "Build", description: "We design and code your site from scratch." },
  { title: "Launch", description: "Go live in under 30 days, optimized and tested." },
  { title: "Support", description: "We’re here for updates or changes later." },
];

export default function OurServices() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.chevronChain}>
        {steps.map((step, index) => (
          <div
            className={`${styles.step} ${index === 0 ? styles.first : ""} ${index === steps.length - 1 ? styles.last : ""}`}
            key={index}
          >
            <div className={styles.stepContent}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDescription}>{step.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
