'use client';

import { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/ButtonWrapper/button";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

/** Section links: use hashes (without '#'); we'll root them to '/#...' */
const navigation = [
  { name: "Home",   hash: "" },            // -> "/"
  { name: "Services", hash: "services" },  // -> "/#services"
  { name: "Carriers", hash: "carriers" },
  { name: "Brokers",  hash: "brokers" },   // <-- insert Consulting AFTER this
  { name: "Why us",   hash: "why-us" },
  { name: "Contact",  hash: "contact" },
];

const consultingPages = [
  { name: "Supply chain consulting", href: "/consulting/supply-chain" },
  { name: "IT & product company consulting", href: "/consulting/it-product" },
  { name: "SEO & content consulting", href: "/consulting/seo-content" },
  { name: "Custom software consulting", href: "/consulting/custom-software" },
  { name: "Website consulting & building", href: "/consulting/website" },
];

/** Build a rooted hash URL so section links work from any route */
const rooted = (hash?: string) => (hash ? `/#${hash}` : "/");

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
        <Link
          href="/"
          className={styles.logoContainer}
          aria-label="Go to Pixelfreight home"
          title="Home"
        >
          <Image
            src="/logo-header.png"
            alt="Pixelfreight"
            width={32}
            height={32}
            className={styles.logo}
            priority
          />
          <span className={styles.logoText}>Pixelfreight</span>
        </Link>

        {/* Desktop nav */}
        <div className={styles.desktopNav}>
          {navigation.map((item) => (
            <Fragment key={item.name}>
              <Link href={rooted(item.hash)} className={styles.navLink}>
                {item.name}
              </Link>

              {/* Insert the Consulting dropdown immediately after Brokers */}
              {item.name === "Brokers" && (
                <div className={styles.consulting}>
                  <Link
                    href="/#consulting"
                    className={`${styles.navLink} ${styles.consultingTrigger}`}
                  >
                    Consulting <ChevronDown size={14} className={styles.chevron} aria-hidden />
                  </Link>

                  <div className={styles.dropdown} role="menu" aria-label="Consulting">
                    {consultingPages.map((p) => (
                      <Link key={p.name} href={p.href} className={styles.dropdownLink}>
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className={styles.desktopActions}>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className={styles.mobileActions}>
          <ThemeToggle />
          <Button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className={styles.mobileMenuButton}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </Button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContainer}>
            {navigation.map((item) => (
              <Fragment key={item.name}>
                <Link
                  href={rooted(item.hash)}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>

                {/* Insert Consulting (and its submenu) after Brokers */}
                {item.name === "Brokers" && (
                  <>
                    <Link
                      href="/#consulting"
                      className={styles.mobileNavLink}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Consulting
                    </Link>
                    <div className={styles.mobileSubmenu}>
                      {consultingPages.map((p) => (
                        <Link
                          key={p.name}
                          href={p.href}
                          className={styles.mobileSubLink}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
