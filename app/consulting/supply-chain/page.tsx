"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  TrendingDown,
  Users,
  Settings,
  FileText,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import styles from "./supply-chain.module.css";

export default function SupplyChainConsultingPage() {
  const steps = ["Leads", "Sales Process", "Operations", "Recruiting", "Admin"];

  const solutions = [
    {
      icon: TrendingDown,
      title: "Sales strategy",
      description:
        "Streamlined lead qualification, clear pricing frameworks, and shorter decision cycles.",
    },
    {
      icon: Users,
      title: "Recruiting playbooks",
      description:
        "Proven screening processes, compelling job descriptions, and retention strategies.",
    },
    {
      icon: Settings,
      title: "Operations streamlining",
      description:
        "Automated workflows, centralized communication, and proactive management systems.",
    },
    {
      icon: FileText,
      title: "Admin efficiency",
      description:
        "Documentation standards, compliance frameworks, and process optimization.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* If a segment/layout renders Header/Footer, delete these two */}
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Consulting for carriers, brokers, and 3PLs
          </h1>
          <p className={styles.heroSubtitle}>
            Strategic guidance to streamline operations, improve sales cycles,
            and scale your logistics business efficiently.
          </p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.columns}>
            <div>
              <h2 className={styles.sectionTitle}>Common challenges we see</h2>

              <ul className={styles.painsList}>
                <li className={styles.painItem}>
                  <AlertCircle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Messy sales cycles</h3>
                    <p className={styles.painText}>
                      Inconsistent lead qualification, unclear pricing strategies,
                      and lengthy decision processes.
                    </p>
                  </div>
                </li>

                <li className={styles.painItem}>
                  <AlertCircle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Poor recruiting outcomes</h3>
                    <p className={styles.painText}>
                      High driver turnover, weak screening processes, and ineffective job postings.
                    </p>
                  </div>
                </li>

                <li className={styles.painItem}>
                  <AlertCircle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Dispatch and admin bottlenecks</h3>
                    <p className={styles.painText}>
                      Manual processes, scattered communication, and reactive instead of proactive management.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Flow panel */}
            <div className={styles.panelMuted}>
              <h3 className={styles.panelTitle}>Typical logistics business flow</h3>
              <div className={styles.flowList}>
                {steps.map((step, i) => (
                  <div key={step} className={styles.flowItem}>
                    <div className={styles.stepCircle}>{i + 1}</div>
                    <div className={styles.stepCard}>
                      <span className={styles.stepLabel}>{step}</span>
                      <div className={styles.stepHint}>Pain points here</div>
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
          <h2 className={styles.sectionTitle}>How we help solve these challenges</h2>

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

      {/* IMPACT */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.impactWrap}>
            <h2 className={styles.sectionTitle}>The impact of getting this right</h2>

            <div className={styles.impactGrid}>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>30–50%</div>
                <div className={styles.impactLabel}>Shorter sales cycles</div>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>2×</div>
                <div className={styles.impactLabel}>Better lead quality</div>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>25%</div>
                <div className={styles.impactLabel}>Reduced overhead</div>
              </div>
            </div>

            <p className={styles.impactNote}>
              When sales, recruiting, and operations work together smoothly, your
              business can focus on growth instead of firefighting daily crises.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to streamline your operations?</h2>
          <p className={styles.ctaText}>
            Let&#39;s discuss how strategic consulting can help your logistics business
            run more efficiently and profitably.
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
