import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Foo
      </main>
      <footer className={styles.footer}>
      Bar
      </footer>
    </div>
  );
}
