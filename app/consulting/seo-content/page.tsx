"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  Search,
  FileText,
  TrendingUp,
  Link as LinkIcon,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import styles from "./seo-content.module.css";

export default function SEOContentConsultingPage() {
  const pipeline = [
    { step: "Keywords", flow: "Target freight terms" },
    { step: "Content", flow: "Route & service pages" },
    { step: "Rankings", flow: "Show up in search" },
    { step: "Traffic", flow: "Qualified visitors" },
    { step: "RFQs", flow: "Inbound business" },
  ];

  const solutions = [
    {
      icon: Search,
      title: "Keyword research",
      description:
        "Target freight-specific terms, routes, and equipment types that actually drive business.",
    },
    {
      icon: FileText,
      title: "Freight-tuned copy",
      description:
        "Content that speaks directly to shippers, drivers, and logistics decision-makers.",
    },
    {
      icon: TrendingUp,
      title: "On-page SEO",
      description:
        "Technical optimization for logistics sites including local search and mobile performance.",
    },
    {
      icon: LinkIcon,
      title: "Backlink strategy",
      description:
        "Authority building via industry publications, directories, and logistics partnerships.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroDecor}>
          <Search className={styles.heroIconA} />
          <FileText className={styles.heroIconB} />
          <div className={styles.heroBox} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>SEO and content for logistics companies</h1>
          <p className={styles.heroSubtitle}>
            Strategic search optimization and content specifically tailored for carriers,
            brokers, and 3PLs.
          </p>
        </div>
      </section>

      {/* PAIN POINTS + PIPELINE */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.columns}>
            {/* pains */}
            <div>
              <h2 className={styles.sectionTitle}>
                Why most logistics companies struggle online
              </h2>

              <ul className={styles.painsList}>
                <li className={styles.painItem}>
                  <AlertCircle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Invisible websites</h3>
                    <p className={styles.painText}>
                      Sites that don’t show up when shippers or drivers search for relevant
                      services.
                    </p>
                  </div>
                </li>
                <li className={styles.painItem}>
                  <AlertCircle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Missing lanes and keywords</h3>
                    <p className={styles.painText}>
                      Not targeting the specific routes, cargo types, and services that drive
                      business.
                    </p>
                  </div>
                </li>
                <li className={styles.painItem}>
                  <AlertCircle className={styles.painIcon} />
                  <div>
                    <h3 className={styles.painTitle}>Outdated content</h3>
                    <p className={styles.painText}>
                      Generic copy that doesn’t speak to specific logistics challenges and
                      solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* pipeline */}
            <div className={styles.pipelinePanel}>
              <h3 className={styles.pipelineTitle}>SEO to business pipeline</h3>
              <div className={styles.pipelineList}>
                {pipeline.map((item, i) => (
                  <div key={item.step} className={styles.pipelineItem}>
                    <div className={styles.stepCircle}>{i + 1}</div>
                    <div className={styles.stepCard}>
                      <span className={styles.stepLabel}>{item.step}</span>
                      <div className={styles.stepFlow}>{item.flow}</div>
                    </div>
                    {i < pipeline.length - 1 && (
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
          <h2 className={styles.sectionTitle}>Our logistics-focused SEO approach</h2>

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

      {/* VISUAL SEARCH EXAMPLE */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.exampleWrap}>
            <h2 className={styles.sectionTitle}>What logistics SEO looks like</h2>

            <div className={styles.exampleCard}>
              <div className={styles.exampleHeader}>
                <div className={styles.exampleSearchRow}>
                  <Search className={styles.exampleSearchIcon} />
                  <span className={styles.exampleSearchLabel}>Search example:</span>
                </div>
                <div className={styles.exampleQueryBox}>
                  &quot;flatbed trucking Los Angeles to Phoenix&quot;
                </div>
              </div>

              <div className={styles.exampleGrid}>
                <div className={`${styles.exampleCol} ${styles.colGreen}`}>
                  <h4 className={styles.exampleTitle}>Keyword Research</h4>
                  <ul className={styles.exampleList}>
                    <li>• Route-specific terms</li>
                    <li>• Equipment types</li>
                    <li>• Cargo specializations</li>
                  </ul>
                </div>

                <div className={`${styles.exampleCol} ${styles.colBlue}`}>
                  <h4 className={styles.exampleTitle}>Content Strategy</h4>
                  <ul className={styles.exampleList}>
                    <li>• Lane-specific pages</li>
                    <li>• Service descriptions</li>
                    <li>• Local market content</li>
                  </ul>
                </div>

                <div className={`${styles.exampleCol} ${styles.colPurple}`}>
                  <h4 className={styles.exampleTitle}>Results</h4>
                  <ul className={styles.exampleList}>
                    <li>• Higher search rankings</li>
                    <li>• More qualified leads</li>
                    <li>• Better visibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className={styles.sectionMuted}>
        <div className={styles.sectionInner}>
          <div className={styles.impactWrap}>
            <h2 className={styles.sectionTitle}>
              The business impact of logistics SEO
            </h2>

            <div className={styles.impactGrid}>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>3–5×</div>
                <div className={styles.impactLabel}>More inbound RFQs</div>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>40–60%</div>
                <div className={styles.impactLabel}>Better search rankings</div>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactValue}>2×</div>
                <div className={styles.impactLabel}>Recruiting visibility</div>
              </div>
            </div>

            <p className={styles.impactNote}>
              When done right, SEO becomes a reliable source of qualified leads
              without constant cold outreach or expensive ads.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBlue}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to get found online?</h2>
          <p className={styles.ctaText}>
            Let&#39;s discuss how strategic SEO and content can drive more qualified
            leads to your logistics business.
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
