"use client";

import { Button } from "@/components/ui/ButtonWrapper/button";
import styles from "./BookAuditSection.module.css";

export function BookAuditSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Get a 30-minute website audit — free of charge
          </h2>
          <p className={styles.subtitle}>
            We&apos;ll check your current site (or online presence), identify what&apos;s
            missing or broken, and send back a short action plan
          </p>
          <Button
            size="lg"
            className={styles.button}
            onClick={() =>
              window.open("https://calendly.com/pixelfreight/hopwebsites-meeting", "_blank")
            }
          >
            Book via Calendly
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BookAuditSection;
