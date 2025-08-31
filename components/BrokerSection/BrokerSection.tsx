// components/BrokerSection/BrokerSection.tsx
import Image from "next/image";
import { Shield, Users, TrendingUp } from "lucide-react";
import styles from "./BrokerSection.module.css";

type Item = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const items: Item[] = [
  { icon: Shield, title: "Credibility up front", description: 'Clean site with authority info and a strong "Why Us".' },
  { icon: Users, title: "Agent recruitment simplified", description: "Careers page optimized for quick applications." },
  { icon: TrendingUp, title: "Smart insights", description: "Show lanes, specializations, supply-chain tuned UX." },
];

// Put your screenshot file in /public (case-sensitive)
const SCREENSHOT_SRC = "/Broker_example_img.png"; // e.g. /ivia_screenshot.webp or /ivia-screenshot.png

export default function BrokerSection() {
  return (
    <section id="brokers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Content */}
          <div className={styles.left}>
            <h2 className={styles.heading}>Built for lean brokerages</h2>

            <div className={styles.items}>
              {items.map((item, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <item.icon className={styles.icon} />
                  </div>
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Screenshot */}
          <div className={styles.right}>
            <div className={styles.screenshotWrapper}>
              <Image
                src={SCREENSHOT_SRC}
                alt="Broker platform showing load management"
                className={styles.screenshotImg}
                fill
                sizes="(min-width:1024px) 640px, 100vw"
                priority
              />
              <div className={styles.screenshotOverlay} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
