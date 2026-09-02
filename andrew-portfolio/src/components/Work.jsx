import { useState } from "react";
import styles from "./Work.module.css";

const PROJECTS = [
  {
    id: "adesignz",
    tag: "brand + full-stack build",
    title: "ADeSignZ",
    summary: "A coded brand and portfolio site, built as a working proof of concept.",
    ask: "Bring a freelance design/development practice to a real, coded site — not a template — that could credibly show senior-level work to prospective clients.",
    approach:
      "Built the full type and color system from scratch, then implemented every page by hand: navigation, case studies, pricing, and a working contact flow.",
    result:
      "A live, working site that is itself the first case study — proof the design system holds up in production, not just in a mockup.",
  },
  {
    id: "lotus",
    tag: "illustration + garment design",
    title: "Custom Lotus Flower Design",
    summary: "Hand-illustrated logo art for a client's hoodie, taken from sketch to print.",
    ask: "A client wanted an original lotus flower illustration for a custom hoodie, tied to her personal practice.",
    approach:
      "Drew the lotus by hand in Procreate, explored several colorways, then finished the art in Photoshop and Illustrator for garment printing.",
    result:
      "The client wore the finished piece out and reported getting compliments on it the same day.",
  },
];

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.card}>
      <button
        type="button"
        className={styles.cardHeader}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className={styles.mark} aria-hidden="true">
          <svg viewBox="0 0 48 48" width="40" height="40">
            <circle cx="24" cy="24" r="21" fill="none" stroke="var(--brass)" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="4" fill="var(--brass)" />
          </svg>
        </div>
        <div className={styles.cardHeaderText}>
          <p className={`mono ${styles.tag}`}>{project.tag}</p>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.summary}>{project.summary}</p>
        </div>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`} aria-hidden="true">
          ⌄
        </span>
      </button>

      {open && (
        <div className={styles.detail}>
          <div>
            <p className={`mono ${styles.detailLabel}`}>the ask</p>
            <p>{project.ask}</p>
          </div>
          <div>
            <p className={`mono ${styles.detailLabel}`}>approach</p>
            <p>{project.approach}</p>
          </div>
          <div>
            <p className={`mono ${styles.detailLabel}`}>result</p>
            <p>{project.result}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className={`section section-border ${styles.section}`}>
      <div className="wrap">
        <h2 className={styles.heading}>Selected work</h2>
        <div className={styles.list}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
