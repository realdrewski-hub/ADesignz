import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#top" className={styles.name}>
          Andrew Stinson
        </a>
        <nav className={styles.nav}>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
