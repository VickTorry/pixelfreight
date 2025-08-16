'use client';

import { Truck, Clock, FileText, Smartphone, TrendingUp } from "lucide-react";
import styles from "./TrustBar.module.css";

export  default function TrustBar() {
  // List of items with icon and text
  const trustItems = [
    { icon: Truck, text: "Built for freight teams" },
    { icon: Clock, text: "Free 30-min audit" },
    { icon: FileText, text: "Estimate in 24 hours" },
    { icon: Smartphone, text: "Mobile-friendly" },
    { icon: TrendingUp, text: "Ready for scale" }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.trustList}>
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={styles.trustItem}>
                <Icon className={styles.icon} />
                <span className={styles.text}>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
