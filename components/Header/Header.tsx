'use client';

import { useState } from "react";
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

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo section */}
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

        {/* Desktop nav links */}
        <div className={styles.desktopNav}>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className={styles.navLink}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop actions (theme toggle) */}
        <div className={styles.desktopActions}>
          <ThemeToggle />
        </div>

        {/* Mobile actions: theme toggle + hamburger icon */}
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

      {/* Mobile nav dropdown */}
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