// components/CarrierSection/CarrierSection.tsx
import Image from "next/image";
import { Truck, Users, MapPin } from "lucide-react";
import styles from "./CarrierSection.module.css";

type Item = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const items: Item[] = [
  { icon: Truck, title: "Easy freight intake", description: "Load-request form to simplify shippers and brokers contacting you." },
  { icon: Users, title: "Driver hiring flows", description: "Qualify owner-operators right from your careers page." },
  { icon: MapPin, title: "Show your lanes", description: "Communicate regions and specializations in plain, bold copy." },
];



export default function CarrierSection() {
  return (
    <section id="carriers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Screenshot */}
          <div className={styles.left}>
            <div className={styles.screenshotWrapper}>
              <Image
                src="/Carrier_example_img.png"
                alt="Illustrative carrier website"
                className={styles.screenshotImg}
                fill
                sizes="(min-width:1024px) 640px, 100vw"
                priority
              />
              <div className={styles.screenshotOverlay} />
            </div>
          </div>

          {/* Right: Content */}
          <div className={styles.right}>
            <h2 className={styles.heading}>Made for growing carriers</h2>
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

        </div>
      </div>
    </section>
  );
}
