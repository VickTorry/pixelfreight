// app/terms/page.tsx
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Reuse the privacy policy CSS module for visual consistency
import styles from "../privacy-policy/privacy-policy.module.css";

export const metadata = {
  title: "Terms and Conditions – Pixelfreight",
  description:
    "Terms and Conditions for using pixelfreight.com and engaging Pixelfreight's services.",
};

export default function TermsOfUse() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main} role="main">
        <section className={styles.section}>
          <div className={styles.container}>
            <header className={styles.headerBlock}>
              <h1 className={styles.title}>Terms and Conditions</h1>
              <p className={styles.updated}>Last updated: October 2025</p>
            </header>

            <div className={styles.content}>
              <section>
                <h2 className={styles.h2}>1. Use of this website</h2>
                <p className={styles.p}>
                  You may browse our website and contact us for services. You agree not to misuse the website — including
                  attempting unauthorized access, distributing spam, scraping content, or using it in a way that could
                  damage our infrastructure or reputation.
                </p>
              </section>

              <section>
                <h2 className={styles.h2}>2. Services</h2>
                <p className={styles.p}>
                  Pixelfreight provides web design, consulting, and subject-matter expertise (SME) for logistics and
                  supply-chain companies, as well as domain consulting for IT and SaaS teams that sell into logistics.
                  Any agreement for specific services (scope, deadlines, or pricing) will be documented separately through
                  a written proposal or contract. This website itself does not create a service relationship.
                </p>
              </section>

              <section>
                <h2 className={styles.h2}>3. Intellectual property</h2>
                <p className={styles.p}>
                  All content on pixelfreight.com, including text, images, designs, and code, is owned or licensed by
                  Pixelfreight. You may not copy, reproduce, or redistribute it without written permission.
                </p>
              </section>

              <section>
                <h2 className={styles.h2}>4. Liability disclaimer</h2>
                <p className={styles.p}>
                  We make every effort to keep our site accurate and secure, but it is provided “as is.” We do not
                  guarantee that it will always be error-free or uninterrupted. To the fullest extent permitted by law,
                  we are not liable for any loss or damage resulting from your use of the site or reliance on its content.
                </p>
              </section>

              <section>
                <h2 className={styles.h2}>5. Links to other websites</h2>
                <p className={styles.p}>
                  Our site may include links to third-party websites (for example, references or partner sites). We are
                  not responsible for the content or privacy practices of those external sites.
                </p>
              </section>

              <section>
                <h2 className={styles.h2}>6. Changes to these terms</h2>
                <p className={styles.p}>
                  We may update these Terms and Conditions periodically. All changes will be posted on this page with a
                  new “Last updated” date. Your continued use of the website after any update means you accept the revised
                  terms.
                </p>
              </section>

              <section>
                <h2 className={styles.h2}>7. Governing law</h2>
                <p className={styles.p}>
                  These Terms are governed by the laws of Ukraine, where Pixelfreight is legally registered and operates,
                  while the company conducts most of its commercial activity within the United States. For the convenience
                  of our U.S. clients, any dispute arising from or related to these Terms may also be interpreted in
                  accordance with U.S. law and resolved in English before a mutually agreed jurisdiction within the United
                  States. Nothing in this clause limits the rights of either party under applicable international trade and
                  contract laws.
                </p>
              </section>

              <section>
                <h2 className={styles.h2}>8. Contact</h2>
                <p className={styles.p}>
                  For any questions about these Terms and Conditions, contact{" "}
                  <a href="mailto:hello@pixelfreight.com" className={styles.link}>
                    hello@pixelfreight.com
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
