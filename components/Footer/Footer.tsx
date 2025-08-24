"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { submitToSheet } from "@/lib/submitToSheet";
import styles from "./Footer.module.css";

export function Footer() {
  const navigation = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Carriers", href: "#carriers" },
    { name: "Brokers", href: "#brokers" },
    { name: "Why us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const social = [
    { name: "LinkedIn", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Clutch", href: "#" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
  ];

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
                  <a href={item.href} className={styles.link}>
                    {item.name}
                  </a>
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
                <a key={s.name} href={s.href} className={styles.link}>
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
                  placeholder="Your email *"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <textarea
                  name="message"
                  placeholder="Your message *"
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
          <p className={styles.copy}>© 2024 Pixelfreight. All rights reserved.</p>
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
