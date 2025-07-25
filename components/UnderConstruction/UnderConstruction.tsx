// components/UnderConstruction/UnderConstruction.tsx
import Image from "next/image";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./UnderConstruction.module.css";

export default function UnderConstruction() {
  return (
    <section className={styles.main}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <h1 className={styles.logo}>PIXELFREIGHT</h1>
          <h2 className={styles.heading}>Under construction</h2>
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/underconstruction-img.webp"
            alt="Pixelfreight crane lifting logo"
            width={700}
            height={700}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
