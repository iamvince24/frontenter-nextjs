import Image from "next/image";
import styles from "./navigationBar.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          width={403}
          height={195}
          src="/feLogo.png"
          alt="feLogo"
        />
      </Link>
      <nav>
        <li>
          <Link href="/article" className={styles.navigationBtn}>
            探索
          </Link>
        </li>
        <li>
          <Link href="/skilltree" className={styles.navigationBtn}>
            技能樹
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.navigationBtn}>
            登入
          </Link>
        </li>
        <Image
          className={styles.searchIcon}
          width={56}
          height={60}
          src="/feSearch.png"
          alt="feSearch"
        />
      </nav>
    </header>
  );
}
