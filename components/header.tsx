import Link from "next/link";
import styles from "@/styles/header.module.css";

export default function Header({
  home
}: {
  home?: boolean
}) {
  const homeImage = <img src="/icons/home.svg" alt="Home" className={styles.image} />;

  return (
    <nav className={styles.navigation}>
      <a href="https://github.com/seg-mx/country-guesser">
        <img src="/icons/github.svg" alt="GitHub" className={styles.image} />
      </a>
      {home ? (
        <a>{homeImage}</a>
      ) : (
        <Link href="/">
          {homeImage}
        </Link>
      )}
    </nav>
  );
}
