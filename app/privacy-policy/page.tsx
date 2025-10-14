// app/privacy-policy/page.tsx
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./privacy-policy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main} role="main">
        <section className={styles.section}>
          <div className={styles.container}>
            <header className={styles.headerBlock}>
              <h1 className={styles.title}>Privacy Policy</h1>
              <p className={styles.updated}>Last updated: October 2025</p>
            </header>

            <div className={styles.content}>
              <section>
                <h2 className={styles.h2}>1. Information we collect</h2>
                <p className={styles.p}>
                  We collect information to operate our website effectively, improve our content, and communicate with potential clients.
                </p>
                <p className={styles.p}>You may provide us with:</p>
                <ul className={styles.ul}>
                  <li>Your name, company name, and email address (when you contact us)</li>
                  <li>Any details you include in your message or request</li>
                </ul>
                <p className={styles.p}>We automatically collect:</p>
                <ul className={styles.ul}>
                  <li>IP address and approximate location</li>
                  <li>Browser type, operating system, device data</li>
                  <li>Pages viewed, time spent, clicks, scrolls, and other usage interactions</li>
                  <li>Referring websites or campaigns</li>
                  <li>Cookies and analytics data from Google Analytics 4 (GA4) and Microsoft Clarity</li>
                </ul>
              </section>

              <section>
                <h2 className={styles.h2}>2. How we use your information</h2>
                <p className={styles.p}>We use collected information to:</p>
                <ul className={styles.ul}>
                  <li>Respond to messages and service inquiries</li>
                  <li>Improve our website&apos;s performance and usability</li>
                  <li>Understand how visitors interact with our pages (via GA4 and Clarity insights)</li>
                  <li>Maintain site security and detect technical issues</li>
                  <li>Comply with legal or regulatory requirements</li>
                </ul>
                <p className={styles.p}>
                  We do not sell, rent, or trade your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className={styles.h2}>3. Cookies and analytics</h2>
                <p className={styles.p}>
                  We use cookies and similar technologies to collect anonymous analytics and behavioral data.
                </p>

                <h3 className={styles.h3}>Google Analytics 4 (GA4)</h3>
                <p className={styles.p}>
                  GA4 helps us understand how visitors use our site. Google may collect information such as:
                </p>
                <ul className={styles.ul}>
                  <li>Pages visited, session duration, browser type, and approximate location</li>
                  <li>Device identifiers and referral sources</li>
                  <li>
                    Data is processed in accordance with{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google&apos;s Privacy Policy
                    </a>
                    .
                  </li>
                </ul>

                <h3 className={styles.h3}>Microsoft Clarity</h3>
                <p className={styles.p}>
                  We use Clarity to record anonymized session data (mouse movements, clicks, scrolls) to identify usability
                  issues and improve our site. Clarity does not record personally identifiable information.
                </p>
                <p className={styles.p}>
                  See{" "}
                  <a
                    href="https://privacy.microsoft.com/en-us/privacystatement"
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft&apos;s Privacy Statement
                  </a>{" "}
                  for details.
                </p>
                <p className={styles.p}>
                  You can control or delete cookies in your browser settings. Some site functions may not work properly if cookies are disabled.
                </p>
              </section>

              <section>
                <h2 className={styles.h2}>4. How we share data</h2>
                <p className={styles.p}>We may share limited data with:</p>
                <ul className={styles.ul}>
                  <li>Service providers who host or support our website</li>
                  <li>Google and Microsoft, as analytics processors under their respective terms</li>
                  <li>Legal authorities, when required to comply with law or protect our rights</li>
                </ul>
                <p className={styles.p}>
                  We do not share personal data with advertisers or unrelated third parties.
                </p>
              </section>

              <section>
                <h2 className={styles.h2}>5. Data retention</h2>
                <ul className={styles.ul}>
                  <li>We keep personal data only as long as necessary for the purpose it was collected.</li>
                  <li>Analytics data may be stored by GA4 and Clarity for standard retention periods (typically up to 26 months).</li>
                  <li>When data is no longer needed, it is securely deleted or anonymized.</li>
                </ul>
              </section>

              <section>
                <h2 className={styles.h2}>6. Your rights (GDPR and similar laws)</h2>
                <p className={styles.p}>
                  If you are located in the EU or another jurisdiction with privacy laws, you have the right to:
                </p>
                <ul className={styles.ul}>
                  <li>Access, correct, or delete your data</li>
                  <li>Restrict or object to processing</li>
                  <li>Withdraw consent at any time</li>
                  <li>File a complaint with your local data protection authority</li>
                </ul>
                <p className={styles.p}>
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:hello@pixelfreight.com" className={styles.link}>
                    hello@pixelfreight.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className={styles.h2}>7. Security</h2>
                <ul className={styles.ul}>
                  <li>
                    We use reasonable technical and organizational measures to protect your data (secure hosting, encryption, limited access).
                  </li>
                  <li>However, no system is completely secure. You use our website at your own risk.</li>
                </ul>
              </section>

              <section>
                <h2 className={styles.h2}>8. Children&apos;s privacy</h2>
                <ul className={styles.ul}>
                  <li>We do not knowingly collect data from children under 16.</li>
                  <li>If we learn that we have done so, we will promptly delete it.</li>
                </ul>
              </section>

              <section>
                <h2 className={styles.h2}>9. Updates to this policy</h2>
                <ul className={styles.ul}>
                  <li>We may update this Privacy Policy periodically.</li>
                  <li>All updates will be posted on this page with the revised date above.</li>
                </ul>
              </section>

              <section>
                <h2 className={styles.h2}>10. Contact</h2>
                <p className={styles.p}>For any privacy-related questions or requests, contact us at:</p>
                <p className={styles.p}>
                  <a href="mailto:hello@pixelfreight.com" className={styles.link}>
                    hello@pixelfreight.com
                  </a>
                </p>
              </section>
            </div>{/* .content */}
          </div>{/* .container */}
        </section>
      </main>

      <Footer />
    </div>
  );
}
