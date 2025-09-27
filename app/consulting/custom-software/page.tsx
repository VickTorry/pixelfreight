"use client";


import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  Settings,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import styles from "./custom-software.module.css";

export default function CustomSoftwareConsultingPage() {
  const roadmap = [
    { step: "Pain", phase: "Define the problem" },
    { step: "Scope", phase: "Map requirements" },
    { step: "Vendor Brief", phase: "RFP or dev brief" },
    { step: "ROI", phase: "Validate the business case" },
  ];

  const solutions = [
    {
      icon: Settings,
      title: "Requirement mapping",
      description:
        "Clear specifications that translate business needs into technical requirements.",
    },
    {
      icon: Users,
      title: "Vendor briefs",
      description:
        "Detailed RFPs and development briefs that help you find the right team or solution.",
    },
    {
      icon: CheckCircle,
      title: "Buy vs. build advice",
      description:
        "Honest assessment of whether to customize existing solutions or build from scratch.",
    },
    {
      icon: DollarSign,
      title: "ROI validation",
      description:
        "Business case analysis to ensure the project justifies the investment.",
    },
  ];

  const beforeList = [
    "Vague requirements",
    "Budget overruns",
    "Endless revisions",
    "Wrong vendor choice",
    "Failed ROI",
  ];
  const afterList = [
    "Crystal clear specs",
    "Predictable costs",
    "Controlled scope",
    "Right vendor match",
    "Measurable ROI",
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroDecor}>
          <Settings className={styles.heroIconA} />
          <div className={styles.heroBox} />
          <ArrowRight className={styles.heroIconB} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>De-risk your logistics software project</h1>
          <p className={styles.heroSubtitle}>
            Strategic guidance and scoping for logistics software projects—not development.
          </p>

          <div className={styles.noteBox}>
            <p>
              <strong>Note:</strong> This is strategic consulting, not software development.
              We help you plan and de-risk, not build.
            </p>
          </div>
        </div>
      </section>

      {/* PAIN POINTS + ROADMAP */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.columns}>
            <div>
              <h2 className={styles.sectionTitle}>Common software project failures</h2>

              <ul className={styles.painsList}>
                <li className={styles.painItem}>
                  <AlertTriangle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Unclear requirements</h3>
                    <p className={styles.painText}>
                      Vague specifications that lead to endless revisions and scope creep.
                    </p>
                  </div>
                </li>

                <li className={styles.painItem}>
                  <AlertTriangle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Wasted budgets</h3>
                    <p className={styles.painText}>
                      Over-engineering solutions or choosing the wrong development approach.
                    </p>
                  </div>
                </li>

                <li className={styles.painItem}>
                  <AlertTriangle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Vendor confusion</h3>
                    <p className={styles.painText}>
                      Difficulty evaluating development teams or existing software solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* roadmap */}
            <div className={styles.pipelinePanel}>
              <h3 className={styles.pipelineTitle}>Software project roadmap</h3>
              <div className={styles.pipelineList}>
                {roadmap.map((r, i) => (
                  <div key={r.step} className={styles.pipelineItem}>
                    <div className={styles.stepCircle}>{i + 1}</div>
                    <div className={styles.stepCard}>
                      <span className={styles.stepLabel}>{r.step}</span>
                      <div className={styles.stepFlow}>{r.phase}</div>
                    </div>
                    {i < roadmap.length - 1 && (
                      <ArrowRight className={styles.flowArrow} />
                    )}
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
          <h2 className={styles.sectionTitle}>How we de-risk your software project</h2>

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

      {/* BLUEPRINT VISUAL */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.exampleWrap}>
            <h2 className={styles.sectionTitle}>Strategic planning before development</h2>

            <div className={styles.exampleGrid}>
              <div className={`${styles.exampleCol} ${styles.colRed}`}>
                <h3 className={styles.exampleTitle}>Without Strategic Planning</h3>
                <ul className={styles.exampleList}>
                  {beforeList.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.exampleCol} ${styles.colGreen}`}>
                <h3 className={styles.exampleTitle}>With Strategic Planning</h3>
                <ul className={styles.exampleList}>
                  {afterList.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className={styles.sectionMuted}>
        <div className={styles.sectionInner}>
          <div className={styles.impactWrap}>
            <h2 className={styles.sectionTitle}>The value of getting it right upfront</h2>

            <div className={styles.impactGrid}>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>60–80%</div>
                <div className={styles.impactLabel}>Reduced scope creep</div>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>50%</div>
                <div className={styles.impactLabel}>Faster vendor negotiations</div>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>3×</div>
                <div className={styles.impactLabel}>Better budget clarity</div>
              </div>
            </div>

            <p className={styles.impactNote}>
              Strategic planning isn’t just about avoiding problems—it’s about
              setting your project up for success from day one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBlue}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to plan your software project strategically?</h2>
          <p className={styles.ctaText}>
            Let’s discuss how strategic planning can de-risk your logistics software
            project and set it up for success.
          </p>

          <ButtonLink
            href="https://calendly.com/pixelfreight"
            size="lg"
            className={styles.ctaButtonInvert}
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
