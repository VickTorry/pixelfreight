"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  Shield,
  FileText,
  Users,
  Smartphone,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import styles from "./website.module.css";

export default function WebsiteConsultingPage() {
  const pains = [
    {
      title: "Outdated and generic sites",
      text:
        "Cookie-cutter designs that don't build trust or showcase unique capabilities.",
    },
    {
      title: "Low conversion rates",
      text:
        "Visitors leave without requesting quotes or submitting applications.",
    },
    {
      title: "Missing trust signals",
      text:
        "No credentials, testimonials, or proof points that establish credibility.",
    },
  ];

  const solutions = [
    {
      icon: Shield,
      title: "Trust-first design",
      description:
        "Credibility signals, certifications, and social proof that establish authority.",
    },
    {
      icon: FileText,
      title: "RFQ and hiring flows",
      description:
        "Optimized forms and processes that convert visitors into leads and applicants.",
    },
    {
      icon: Smartphone,
      title: "Mobile-first UX",
      description:
        "Responsive design that works perfectly on all devices, especially mobile.",
    },
    {
      icon: Users,
      title: "Content strategy",
      description:
        "Logistics-focused copywriting that speaks directly to your target audience.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroDecor}>
          <div className={styles.heroBoxA} />
          <div className={styles.heroBoxB} />
          <ArrowRight className={styles.heroArrow} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Websites that deliver for carriers and brokers
          </h1>
          <p className={styles.heroSubtitle}>
            Trust-first website design and strategy that converts visitors into
            customers and quality hires.
          </p>
        </div>
      </section>

      {/* PAIN POINTS + MOCKUP */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.columns}>
            {/* pains */}
            <div>
              <h2 className={styles.sectionTitle}>Why most logistics websites fail</h2>
              <ul className={styles.painsList}>
                {pains.map((p) => (
                  <li className={styles.painItem} key={p.title}>
                    <AlertCircle className={styles.painIcon} />
                    <div>
                      <h3 className={styles.painTitle}>{p.title}</h3>
                      <p className={styles.painText}>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* mockup */}
            <div className={styles.panelMuted}>
              <h3 className={styles.panelTitle}>Website transformation</h3>

              {/* Before */}
              <div className={styles.mockGroup}>
                <h4 className={`${styles.mockHeading} ${styles.redText}`}>
                  Before: Generic site
                </h4>
                <div className={`${styles.mockCard} ${styles.mockRed}`}>
                  <div className={`${styles.skel} ${styles.skelLg}`} />
                  <div className={styles.skelRow}>
                    <div className={`${styles.skel} ${styles.skelSm}`} />
                    <div className={`${styles.skel} ${styles.skelSm}`} />
                    <div className={`${styles.skel} ${styles.skelSm}`} />
                  </div>
                  <div className={`${styles.skel} ${styles.skelBtn}`} />
                  <div className={styles.mockNote}>❌ No trust signals, unclear messaging</div>
                </div>
              </div>

              {/* After */}
              <div>
                <h4 className={`${styles.mockHeading} ${styles.greenText}`}>
                  After: Trust-first design
                </h4>
                <div className={`${styles.mockCard} ${styles.mockGreen}`}>
                  <div className={`${styles.skel} ${styles.skelLgStrong}`} />
                  <div className={styles.skelRow}>
                    <div className={`${styles.skel} ${styles.skelSmStrong}`} />
                    <div className={`${styles.skel} ${styles.skelSmStrong}`} />
                    <div className={`${styles.skel} ${styles.skelSmStrong}`} />
                  </div>
                  <div className={`${styles.skel} ${styles.skelBtnStrong}`} />
                  <div className={styles.mockNote}>
                    ✅ Clear RFQ form, trust badges, mobile-first
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className={styles.sectionMuted}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Our website approach for logistics</h2>

          <div className={styles.gridCards}>
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div className={styles.card} key={s.title}>
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

      {/* WEBSITE ELEMENTS SHOWCASE */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            Essential elements for logistics websites
          </h2>

          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseCard}>
              <h3 className={styles.showcaseHeading}>
                <Shield className={styles.showcaseIcon} />
                Trust Signals
              </h3>
              <ul className={styles.dotList}>
                <li>DOT/MC numbers prominently displayed</li>
                <li>Insurance and safety certifications</li>
                <li>Customer testimonials and reviews</li>
                <li>Years in business and fleet size</li>
              </ul>
            </div>

            <div className={styles.showcaseCard}>
              <h3 className={styles.showcaseHeading}>
                <FileText className={styles.showcaseIcon} />
                Conversion Tools
              </h3>
              <ul className={styles.dotList}>
                <li>Clear “Get Quote” forms</li>
                <li>Driver application portals</li>
                <li>One-click contact options</li>
                <li>Mobile-optimized interfaces</li>
              </ul>
            </div>

            <div className={styles.showcaseCard}>
              <h3 className={styles.showcaseHeading}>
                <Users className={styles.showcaseIcon} />
                Service Pages
              </h3>
              <ul className={styles.dotList}>
                <li>Equipment and specialization details</li>
                <li>Primary lanes and coverage areas</li>
                <li>Industry experience highlights</li>
                <li>Compliance and safety records</li>
              </ul>
            </div>

            <div className={styles.showcaseCard}>
              <h3 className={styles.showcaseHeading}>
                <Smartphone className={styles.showcaseIcon} />
                Technical Excellence
              </h3>
              <ul className={styles.dotList}>
                <li>Fast loading speeds</li>
                <li>Search engine optimization</li>
                <li>Mobile-first responsive design</li>
                <li>Analytics and tracking setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className={styles.sectionMuted}>
        <div className={styles.sectionInner}>
          <div className={styles.impactWrap}>
            <h2 className={styles.sectionTitle}>
              The impact of a well-designed logistics website
            </h2>

            <div className={styles.impactGrid}>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>3-5x</div>
                <div className={styles.impactLabel}>Better brand credibility</div>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>40-60%</div>
                <div className={styles.impactLabel}>More loads booked</div>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>2x</div>
                <div className={styles.impactLabel}>Better driver recruitment</div>
              </div>
            </div>

            <p className={styles.impactNote}>
              A professional website becomes your best sales rep—working 24/7 to
              build trust, generate leads, and attract quality drivers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBlue}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Ready for a website that works as hard as you do?
          </h2>
          <p className={styles.ctaText}>
            Let’s discuss how a trust-first website can help your logistics
            business attract more customers and quality drivers.
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
