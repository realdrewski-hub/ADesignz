import { useMemo, useState } from "react";
import styles from "./Hero.module.css";

const PROJECT_TYPES = [
  { id: "landing", label: "Landing page", base: 1200, weeks: 1.5 },
  { id: "multipage", label: "Multi-page site", base: 2500, weeks: 3 },
  { id: "brand", label: "Full brand system", base: 4500, weeks: 5 },
];

function formatUSD(n) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function Hero() {
  const [typeId, setTypeId] = useState("multipage");
  const [pages, setPages] = useState(5);
  const [illustration, setIllustration] = useState(false);
  const [commerce, setCommerce] = useState(false);
  const [rushed, setRushed] = useState(false);

  const type = PROJECT_TYPES.find((t) => t.id === typeId);

  const estimate = useMemo(() => {
    const extraPages = Math.max(0, pages - 3);
    let low = type.base + extraPages * 120;
    let high = type.base + extraPages * 180;

    if (illustration) {
      low += 600;
      high += 1200;
    }
    if (commerce) {
      low += 1200;
      high += 2200;
    }

    let weeks = type.weeks + extraPages * 0.15;
    if (illustration) weeks += 0.5;
    if (commerce) weeks += 1;

    if (rushed) {
      low = Math.round(low * 1.2);
      high = Math.round(high * 1.2);
      weeks = Math.max(1, weeks * 0.7);
    }

    return {
      low: Math.round(low / 50) * 50,
      high: Math.round(high / 50) * 50,
      weeks: Math.round(weeks * 2) / 2,
    };
  }, [type, pages, illustration, commerce, rushed]);

  return (
    <section id="top" className={styles.hero}>
      <div className={`wrap ${styles.wrap}`}>
        <div className={styles.intro}>
          <p className={`mono ${styles.eyebrow}`}>design + development, one builder</p>
          <h1 className={styles.headline}>
            I build sites the same way I build anything —
            <br />
            measure first, then cut once.
          </h1>
          <p className={styles.sub}>
            Ten years across design and development, plus a background in
            skilled trades. The estimator below is live — it runs the same
            rough math I use when scoping a real project.
          </p>
        </div>

        <div className={styles.tool} aria-label="Project scope estimator">
          <p className={`mono ${styles.toolLabel}`}>scope estimator — v1</p>

          <div className={styles.field}>
            <span className={styles.fieldLabel}>Project type</span>
            <div className={styles.pillRow}>
              {PROJECT_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`${styles.pill} ${typeId === t.id ? styles.pillActive : ""}`}
                  onClick={() => setTypeId(t.id)}
                  aria-pressed={typeId === t.id}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.field}>
            <span className={styles.fieldLabel}>
              Pages <span className="mono">{pages}</span>
            </span>
            <input
              type="range"
              min="1"
              max="15"
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className={styles.slider}
            />
          </div>

          <div className={styles.toggleRow}>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={illustration}
                onChange={(e) => setIllustration(e.target.checked)}
              />
              <span>Custom illustration / brand art</span>
            </label>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={commerce}
                onChange={(e) => setCommerce(e.target.checked)}
              />
              <span>E-commerce or booking</span>
            </label>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={rushed}
                onChange={(e) => setRushed(e.target.checked)}
              />
              <span>Rushed timeline</span>
            </label>
          </div>

          <div className={styles.result}>
            <div>
              <span className={`mono ${styles.resultLabel}`}>estimated range</span>
              <span className={styles.resultValue}>
                {formatUSD(estimate.low)}–{formatUSD(estimate.high)}
              </span>
            </div>
            <div>
              <span className={`mono ${styles.resultLabel}`}>estimated timeline</span>
              <span className={styles.resultValue}>{estimate.weeks} weeks</span>
            </div>
          </div>
          <p className={styles.disclaimer}>
            Ballpark only — every real quote starts with a conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
