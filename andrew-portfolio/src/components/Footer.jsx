import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <span className="mono">Roscoe, Illinois</span>
        <span className="mono">© {new Date().getFullYear()} Andrew Stinson</span>
      </div>
    </footer>
  );
}
