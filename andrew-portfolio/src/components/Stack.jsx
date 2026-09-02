import styles from "./Stack.module.css";

const GROUPS = [
  {
    label: "Design",
    items: ["Figma", "Procreate", "Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    label: "Development",
    items: ["React", "HTML / CSS / JS", "Webflow"],
  },
  {
    label: "Certifications",
    items: ["CompTIA A+", "CCNA", "MCSA", "ITIL"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className={`section section-border ${styles.section}`}>
      <div className="wrap">
        <h2 className={styles.heading}>What I work with</h2>
        <div className={styles.grid}>
          {GROUPS.map((group) => (
            <div key={group.label} className={styles.group}>
              <p className={`mono ${styles.groupLabel}`}>{group.label}</p>
              <ul className={styles.itemList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
