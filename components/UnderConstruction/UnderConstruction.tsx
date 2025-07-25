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
          <h2 className={styles.heading}>Under Construction</h2>
          <p className={styles.subheading}>
            We&apos;re working on something new. Be the first to know—join our mailing list.
          </p>
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/under-construction-image.png"
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
