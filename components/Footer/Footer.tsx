"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({ email: "", message: "" });
    alert("Thanks! We'll get back to you soon.");
  };

  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        {/* Top row */}
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
          </div>

          {/* Contact Form */}
          <div className={styles.formWrap}>
            <h4 className={styles.heading}>Get in touch</h4>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className={styles.textarea}
              />
              <button type="submit" className={styles.button}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2024 Pixelfreight. All rights reserved.
          </p>
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
