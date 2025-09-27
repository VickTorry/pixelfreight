'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/ButtonWrapper/button";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Carriers", href: "#carriers" },
  { name: "Brokers", href: "#brokers" },
  { name: "Why us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

const consultingPages = [
  { name: "Supply chain consulting", href: "/consulting/supply-chain" },
  { name: "IT & product company consulting", href: "/consulting/it-product" },
  { name: "SEO & content consulting", href: "/consulting/seo-content" },
  { name: "Custom software consulting", href: "/consulting/custom-software" },
  { name: "Website consulting & building", href: "/consulting/website" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoContainer} aria-label="Go to Pixelfreight home" title="Home">
          <Image src="/logo-header.png" alt="Pixelfreight" width={32} height={32} className={styles.logo} priority />
          <span className={styles.logoText}>Pixelfreight</span>
        </Link>

        {/* Desktop nav */}
        <div className={styles.desktopNav}>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className={styles.navLink}>
              {item.name}
            </a>
          ))}

          {/* Consulting: scroll to section + dropdown to pages */}
          <div className={styles.consulting}>
            <Link href="/#consulting" className={`${styles.navLink} ${styles.consultingTrigger}`}>
              Consulting <ChevronDown size={14} className={styles.chevron} aria-hidden />
            </Link>

            <div className={styles.dropdown} role="menu" aria-label="Consulting">
              {consultingPages.map((item) => (
                <Link key={item.name} href={item.href} className={styles.dropdownLink}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.desktopActions}>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className={styles.mobileActions}>
          <ThemeToggle />
          <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={styles.mobileMenuButton} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </Button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContainer}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Consulting (scroll) */}
            <Link
              href="/#consulting"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Consulting
            </Link>
            <div className={styles.mobileSubmenu}>
              {consultingPages.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.mobileSubLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
