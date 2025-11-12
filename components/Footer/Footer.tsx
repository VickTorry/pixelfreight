"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { submitToSheet } from "@/lib/submitToSheet";
import styles from "./Footer.module.css";

export function Footer() {
  const navigation = [
    { name: "Home", hash: "#" },
    { name: "Services", hash: "#services" },
    { name: "Carriers", hash: "#carriers" },
    { name: "Brokers", hash: "#brokers" },
    { name: "Why us", hash: "#why-us" },
    { name: "Contact", hash: "#contact" },
  ];

  // socials.ts (or inline)
type Social = {
  name: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

 const social: Social[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/pixelfreight/", target: "_blank", rel: "noopener noreferrer" },
  {
    name: "Clutch",
    href: "https://clutch.co/profile/pixelfreight?utm_source=clutch_top_company_badge&utm_medium=image_embed&badge=14232",
    target: "_blank",
    rel: "noopener noreferrer", 
  },
];


  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
  ];

  const rooted = (hash?: string) => (hash ? `/#${hash}` : "/");

  const [form, setForm] = useState({ email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
  const scriptId = "designrush-widget";
  const existingScript = document.getElementById(scriptId);
  const hasWidgetDiv = document.querySelector("[data-designrush-widget]");

  if (!existingScript && hasWidgetDiv) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://www.designrush.com/topbest/js/widgets/agency-reviews.js";
    script.async = true;
    document.body.appendChild(script);
  }
}, []);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    if (!form.message.trim()) {
      toast.error("Please write a short message.");
      return;
    }

    setSubmitting(true);
    try {
      const ok = await submitToSheet({
        name: "Footer form",
        email: form.email,
        comments: form.message
      });

      if (!ok) throw new Error("Failed to submit");

      toast.success("Sent!");
      setForm({ email: "", message: "" });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer id="contact" className={styles.section}>
      <div className={styles.container}>
        <Toaster position="top-center" />

        <div className={styles.topRow}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <Image
                src="/logo-header.png"
                alt="Pixelfreight"
                width={40}
                height={40}
                className={styles.logo}
              />
              <span className={styles.logoText}>Pixelfreight</span>
            </div>
            <p className={styles.tagline}>Websites that deliver</p>
          </div>

          {/* Navigation */}
          <div className={styles.nav}>
            <h4 className={styles.heading}>Navigation</h4>
            <ul>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={rooted(item.hash)} className={styles.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contact}>
            <h4 className={styles.heading}>Contact</h4>
            <div className={styles.contactItem}>
              <Mail className={styles.icon} />
              <a href="mailto:hello@pixelfreight.com" className={styles.link}>
                hello@pixelfreight.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <Phone className={styles.icon} />
              <a href="tel:+14049752747" className={styles.link}>
                +1 404 975 2747
              </a>
            </div>
            <div className={styles.socials}>
              {social.map((s) => (
              <a
               key={s.name}
               href={s.href}
               className={styles.link}
              target={s.target || undefined}
              rel={s.target === "_blank" ? "noopener noreferrer" : undefined}
              >
             {s.name}
              </a>
              ))}
            </div>

            {/* Review Badge */}
            <div className={styles.reviewBadge}>
              <div
                data-designrush-widget
                data-agency-id="99674"
                data-style="light"
                aria-label="DesignRush agency reviews section"
              ></div>
              <noscript>
                <a
                  href="https://www.designrush.com/agency/profile/pixelfreight#reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Pixelfreight reviews on DesignRush"
                  className={styles.linkSmall}
                >
                  REVIEW US ON DESIGNRUSH
                </a>
              </noscript>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formWrap}>
            <h4 className={styles.heading}>Get in touch</h4>
            {submitted ? (
              <div className={styles.thankYou}>
                <p>Thank you! We&apos;ll be in touch soon.</p>
                <button
                  className={styles.buttonGhost}
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <textarea
                  name="message"
                  placeholder="Message *"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className={styles.textarea}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className={styles.button}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2026 Pixelfreight. Based in Ukraine. All rights reserved.</p>
          <div className={styles.legal}>
            {legal.map((item) => (
              <a key={item.name} href={item.href} className={styles.linkSmall}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
