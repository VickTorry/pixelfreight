'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo-header.png"
            alt="Pixelfreight"
            width={32}
            height={32}
            className={styles.logo}
          />
          <span className={styles.logoText}>Pixelfreight</span>
        </div>
        <div className={styles.desktopNav}>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className={styles.navLink}>
              {item.name}
            </a>
          ))}
        </div>
        <div className={styles.desktopActions}>
          <ThemeToggle />
        </div>
        <div className={styles.mobileActions}>
          <ThemeToggle />
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileMenuButton}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </Button>
        </div>
      </nav>

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
          </div>
        </div>
      )}
    </header>
  );
}
