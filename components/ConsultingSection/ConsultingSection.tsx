"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";

import {
  Handshake,
  Laptop,
  Search,
  Settings,
  Globe,
  ArrowRight,
} from "lucide-react";
import styles from "./ConsultingSection.module.css"; 


// 1) Static service/faq data
const services = [
  {
    icon: Handshake,
    title: "Supply chain consulting",
    description:
      "Strategic guidance for carriers, brokers, and 3PLs to streamline operations and boost growth.",
    href: "/consulting/supply-chain",
  },
  {
    icon: Laptop,
    title: "IT & product company consulting",
    description:
      "Logistics subject-matter expertise for IT firms targeting the supply chain industry.",
    href: "/consulting/it-product",
  },
  {
    icon: Search,
    title: "SEO & content consulting",
    description:
      "Search optimization and content strategy specifically for logistics companies.",
    href: "/consulting/seo-content",
  },
  {
    icon: Settings,
    title: "Custom software consulting",
    description:
      "Strategic guidance to de-risk your logistics software projects and vendor decisions.",
    href: "/consulting/custom-software",
  },
  {
    icon: Globe,
    title: "Website consulting & building",
    description:
      "Trust-first websites that convert visitors into customers and quality hires.",
    href: "/consulting/website",
  },
];

const faqs = [
  {
    question: "What's the typical timeline for consulting projects?",
    answer:
      "Most consulting engagements range from 2–8 weeks depending on scope. We provide clear timelines during the initial consultation.",
  },
  {
    question: "How do you price consulting services?",
    answer:
      "Project-based pricing tailored to needs. Book a consultation to discuss requirements and get a custom quote.",
  },
  {
    question: "Do you work with companies outside the logistics industry?",
    answer:
      "Our specialty is logistics and supply chain, and we also consult for IT and product companies targeting this industry.",
  },
  {
    question: "What makes Pixelfreight different from other consultants?",
    answer:
      "We combine deep logistics knowledge with practical delivery experience. We understand both operations and technology.",
  },
];

// 2) Component rendered inside a single page section (not a full Lovable page)
export default function ConsultingSection() {
  return (
    <section id="consulting" className={styles.wrapper}>

      {/* HERO — visuals controlled by CSS Module for light/dark parity with your references */}
      <div className={styles.hero}>
        {/* Decorative lines/arrows layered via CSS; keep DOM light */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Consulting for logistics and supply chain businesses
          </h1>
          <p className={styles.heroSubtitle}>
            Pixelfreight offers strategic consulting across two key areas,
            operational guidance for carriers, brokers, and 3PLs, and
            subject-matter expertise for IT and product companies serving the
            logistics industry.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Our consulting services</h2>

          <div className={styles.grid}>
  {services.map((service) => {
    const Icon = service.icon;
    return (
      <div key={service.title} className={styles.card}>
        <div className={styles.cardIcon}>
          <Icon className={styles.iconSvg} />
        </div>

        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDesc}>{service.description}</p>

        <div className={styles.cardCta}>
          <ButtonLink href={service.href} variant="secondary" size="sm">
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    );
  })}
</div>
        </div>
      </div>

      {/* FAQ */}
      <div className={styles.sectionMuted}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Frequently asked questions</h2>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <div key={f.question} className={styles.faqCard}>
                <h3 className={styles.faqQ}>{f.question}</h3>
                <p className={styles.faqA}>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to discuss your project?</h2>
          <p className={styles.ctaText}>
            Book a consultation to explore how our expertise can help solve your
            logistics challenges.
          </p>
          <ButtonLink
  href="https://calendly.com/pixelfreight"
  size="lg"
  className={styles.ctaButton}
  target="_blank"
  rel="noopener noreferrer"
>
  Book a consultation <ArrowRight className="ml-2 h-5 w-5" />
</ButtonLink>
        </div>
      </div>
    </section>
  );
}
