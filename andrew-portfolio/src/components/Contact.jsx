import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`section section-border ${styles.section}`}>
      <div className="wrap">
        <h2 className={styles.heading}>Have a project in mind?</h2>
        <p className={styles.sub}>
          Send over what you're building — you'll get a direct reply, not an
          account manager.
        </p>
        <a className={styles.button} href="mailto:hello@adesignz.studio">
          hello@adesignz.studio
        </a>
      </div>
    </section>
  );
}
