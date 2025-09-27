"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  Target,
  Zap,
  Users,
  MapPin,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import styles from "./it-product.module.css";

export default function ITProductConsultingPage() {
  const gtmFlow = [
    { step: "Idea", status: "Often disconnected" },
    { step: "Market Validation", status: "Surface level" },
    { step: "Messaging", status: "Generic tech speak" },
    { step: "Execution", status: "Misaligned priorities" },
    { step: "Leads", status: "Poor conversion" },
  ];

  const solutions = [
    {
      icon: Target,
      title: "GTM strategy",
      description:
        "Market positioning, messaging frameworks, and competitive analysis for logistics tech.",
    },
    {
      icon: Zap,
      title: "Execution briefs",
      description:
        "Detailed roadmaps for product development priorities and feature validation.",
    },
    {
      icon: Users,
      title: "ICP validation",
      description:
        "Deep customer research to identify and understand your ideal logistics prospects.",
    },
    {
      icon: MapPin,
      title: "Warm introductions",
      description:
        "Connections to logistics decision-makers when appropriate and mutually beneficial.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroDecor} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Logistics subject-matter expertise for IT and product firms
          </h1>
          <p className={styles.heroSubtitle}>
            Strategic guidance to help technology companies successfully enter
            and compete in the logistics market.
          </p>
        </div>
      </section>

      {/* PAIN POINTS + GTM FLOW */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.columns}>
            <div>
              <h2 className={styles.sectionTitle}>Common pitfalls for tech companies</h2>

              <ul className={styles.painsList}>
                <li className={styles.painItem}>
                  <AlertTriangle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Wasted development cycles</h3>
                    <p className={styles.painText}>
                      Building features that logistics companies don’t actually need or want.
                    </p>
                  </div>
                </li>

                <li className={styles.painItem}>
                  <AlertTriangle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Poor GTM alignment</h3>
                    <p className={styles.painText}>
                      Messaging and positioning that miss the mark with logistics decision-makers.
                    </p>
                  </div>
                </li>

                <li className={styles.painItem}>
                  <AlertTriangle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Weak logistics validation</h3>
                    <p className={styles.painText}>
                      Assumptions about the industry that don’t match operational reality.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Flow panel */}
            <div className={styles.panelMuted}>
              <h3 className={styles.panelTitle}>Typical GTM flow for logistics tech</h3>
              <div className={styles.flowList}>
                {gtmFlow.map((item, i) => (
                  <div key={item.step} className={styles.flowItem}>
                    <div className={styles.stepCircle}>{i + 1}</div>
                    <div className={styles.stepCard}>
                      <span className={styles.stepLabel}>{item.step}</span>
                      <div className={styles.stepHint}>{item.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className={styles.sectionMuted}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>How we bridge the knowledge gap</h2>

          <div className={styles.gridCards}>
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className={styles.card}>
                  <div className={styles.cardIcon}>
                    <Icon className={styles.iconSvg} />
                  </div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIAL ANGLE (US market) */}
      <section className={styles.angle}>
        <div className={styles.angleInner}>
          <div className={styles.angleLeft}>
            <h2 className={styles.angleTitle}>Deep US logistics market knowledge</h2>
            <p className={styles.angleText}>
              Having worked directly with carriers, brokers, and 3PLs across different
              regions and specializations, we understand the nuances of the American
              logistics market.
            </p>

            <ul className={styles.angleBullets}>
              <li>Regional differences in trucking operations</li>
              <li>Owner-operator vs fleet dynamics</li>
              <li>Broker-carrier relationship complexities</li>
              <li>Compliance and regulatory landscape</li>
            </ul>
          </div>

          <div className={styles.mapPanel}>
            <h3 className={styles.mapTitle}>US Logistics Market Expertise</h3>
            <div className={styles.mapBox}>
              <MapPin className={styles.mapIcon} />
              <span className={`${styles.dot} ${styles.dotA}`} />
              <span className={`${styles.dot} ${styles.dotB}`} />
              <span className={`${styles.dot} ${styles.dotC}`} />
              <span className={`${styles.dot} ${styles.dotD}`} />
            </div>
            <p className={styles.mapNote}>
              Active across major freight corridors and regional markets
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to crack the logistics market?</h2>
          <p className={styles.ctaText}>
            Let’s discuss how logistics subject-matter expertise can accelerate your
            product-market fit and GTM success.
          </p>

          <ButtonLink
            href="https://calendly.com/pixelfreight"
            size="lg"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a consultation <ArrowRight className={styles.iconRight} />
          </ButtonLink>
        </div>
      </section>

      <Footer />
    </div>
  );
}
