import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section className={styles.topIconSection}>
        <Image
          className={styles.efTopIcon}
          width={124}
          height={169}
          src="/efTopIcon.png"
          alt="efTopIcon"
        />
      </section>
      <nav className={styles.footerNav}>
        <li>
          <Link href="/contact">聯絡我們</Link>
        </li>
        <li>0975-282-222</li>
        <li>
          <a href="mailto:mynameisvince24@gmail.com">
            mynameisvince24@gmail.com
          </a>
        </li>
        <li className={styles.footerNavLi}>
          <Link
            href="https://www.facebook.com/profile.php?id=100079762316652"
            target="_blank"
          >
            <Image
              className={styles.footerNavMetaIcon}
              width={29}
              height={29}
              src="/metaIcon.svg"
              alt="metaIcon"
            />
          </Link>
          <Link href="https://line.me/ti/p/v9ETm_J1dk" target="_blank">
            <Image
              className={styles.footerNavLineIcon}
              width={68}
              height={65}
              src="/lineIcon.svg"
              alt="lineIcon"
            />
          </Link>
        </li>
      </nav>
    </footer>
  );
}
