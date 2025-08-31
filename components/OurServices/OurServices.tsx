"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Truck } from "lucide-react";
import styles from "./OurServices.module.css";

type Step = { title: string; text: string };

const STEPS: Step[] = [
  { title: "Audit",   text: "Free 30-min call to assess what you need." },
  { title: "Offer",   text: "You get a detailed scope with pricing." },
  { title: "Build",   text: "We design and code your site from scratch." },
  { title: "Launch",  text: "Go live in under 30 days, optimized and tested." },
  { title: "Support", text: "We’re here for updates or changes later." },
];

export default function OurServices() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [centers, setCenters] = useState<number[]>([]);
  const [truckX, setTruckX] = useState<number>(0);
  const [durationMs, setDurationMs] = useState<number>(400);
  const [ready, setReady] = useState<boolean>(false);
  const [facingLeft, setFacingLeft] = useState<boolean>(false);
  const prevX = useRef<number>(0);

  // measure step centers relative to wrapper and park the truck at step 1
  const measure = () => {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    const wrapRect = wrap.getBoundingClientRect();
    const c = stepRefs.current.map((el) => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      return r.left + r.width / 2 - wrapRect.left; // center X in wrapper coords
    });
    if (c.length) {
      setCenters(c);
      prevX.current = c[0];
      setTruckX(c[0]);
      setReady(true);
    }
  };

  useLayoutEffect(() => {
    // initial & next-tick measure (handles font/CLS)
    measure();
    const t = window.setTimeout(measure, 0);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moveTo = (idx: number) => {
    const nextX = centers[idx];
    if (nextX == null) return;
    setFacingLeft(nextX < prevX.current);
    const dist = Math.abs(nextX - prevX.current);
    setDurationMs(Math.max(180, Math.min(700, dist * 1.1)));
    prevX.current = nextX;
    setTruckX(nextX);
  };

  return (
    <section id="services" className={styles.servicesSection} aria-label="Our services">
      <div ref={wrapperRef} className={styles.timelineWrapper}>
        {/* Truck (no rails/circles). Outer moves; inner flips left/right. */}
        <div
          className={styles.truck}
          style={{
            transform: `translateX(${truckX}px) translateX(-50%)`,
            transitionDuration: `${durationMs}ms`,
            opacity: ready ? 1 : 0,
          }}
          aria-hidden="true"
        >
          <div className={facingLeft ? styles.faceLeft : styles.faceRight}>
            <Truck className={styles.truckIcon} />
          </div>
        </div>

        {/* Steps (entire li is the hover/focus target) */}
        <ol className={styles.stepsRow}>
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              ref={(el) => { stepRefs.current[i] = el; }}
              className={styles.stepItem}
              tabIndex={0}
              onMouseEnter={() => moveTo(i)}
              onFocus={() => moveTo(i)}
              aria-label={s.title}
            >
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
