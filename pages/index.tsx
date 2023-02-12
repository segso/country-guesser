import Layout from "@/components/layout";
import Link from "next/link";
import styles from "@/styles/home.module.css";

export default function HomePage() {
  return (
    <Layout home>
      <h1 className={styles.title}>
        Country Guesser
      </h1>
      <Link href="/play" className={styles.play}>
        Play
      </Link>
    </Layout>
  );
}
