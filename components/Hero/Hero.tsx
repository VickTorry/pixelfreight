'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/ButtonWrapper/button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      {/* Dark-mode tone overlay (only visible in dark) */}
      <div className={styles.darkOverlay} />

      {/* Readability overlay */}
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div>
          <h1 className={styles.headline}>
            Websites that <span className={styles.primaryHighlight}>deliver</span>.
          </h1>

          <p className={styles.subheadline}>
            Robust freight websites for carriers and brokers
          </p>

          <div className={styles.cta}>
            <Button
              size="lg"
              className={styles.button}
              onClick={() =>
                window.open('https://calendly.com/pixelfreight/pixelfreight-audit', '_blank')
              }
            >
              Book Free Audit
              <ArrowRight style={{ marginLeft: '0.5rem' }} size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
