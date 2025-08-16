'use client';

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/ButtonWrapper/button";
import styles from "./Hero.module.css";

export default function Hero() {
  // Smooth scroll to section by ID
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

  return (
    <section className={styles.section}>
      {/* Dark-mode background override */}
      <div className={styles.darkOverlay} />

      {/* Overlay for better readability */}
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div>
          {/* Main Headline */}
          <h1 className={styles.headline}>
            Websites that <span className={styles.primaryHighlight}>deliver</span>.
          </h1>

          {/* Subheadline */}
          <p className={styles.subheadline}>
            Robust freight websites for carriers and brokers
          </p>

          {/* CTA Button */}
          <div className={styles.cta}>
            <Button
              size="lg"
              className="font-geist"
              onClick={() =>
                window.open("https://calendly.com/pixelfreight/30min-audit", "_blank")
              }
            >
              Book Free Audit
              <ArrowRight style={{ marginLeft: "0.5rem" }} size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
