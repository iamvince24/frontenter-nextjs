import Image from "next/image";
import styles from "./page.module.scss";

function EffectBtn({ name, btnType }: { name: string; btnType: string }) {
  return <button className={styles[btnType]}>{name}</button>;
}

export default function Home() {
  return (
    <main>
      <section className={styles.keyVisual}>
        <div className={styles.keyVisualContent}>
          <h1 className={styles.keyVisualTitile}>FRONT-ENTER</h1>
          <p>前端轉職資訊</p>
          <Image
            className={styles.arrowIcon}
            width={22}
            height={22}
            src="/arrowIcon.svg"
            alt="arrowIcon"
          />
        </div>
      </section>

      <section className={styles.testSection}>
        <p>想知道自己適合什麼學習環境嗎？</p>
        <p>可以點擊按鈕測測看哦！</p>
        <EffectBtn name={"測試 GO"} btnType={"outlinedBtn"} />
      </section>

      <section className={styles.articleSection}>
        <p>教室精選</p>
        <EffectBtn name={"AppWorks School"} btnType={"outlinedBigBtn"} />
        <EffectBtn name={"彭彭的課程教學"} btnType={"outlinedBigBtn"} />
        <EffectBtn name={"五倍紅寶石"} btnType={"outlinedBigBtn"} />
      </section>

      <section className={styles.informationSection}>
        <div className={styles.informationSectionCard}>
          <Image
            className={styles.efPenIcon}
            width={40}
            height={40}
            src="/efPenIcon.png"
            alt="efPenIcon"
          />
          <p className={styles.informationSectionTitle}>探索</p>
          <hr />
          <p className={styles.informationSectionContent}>
            我們提供公正的資訊， 幫您順利轉職， 並追蹤最新的業界動態。
          </p>
          <EffectBtn name={"找學校"} btnType={"filledBtn"} />
        </div>
        <div className={styles.informationSectionCard}>
          <Image
            className={styles.efPenIcon}
            width={40}
            height={40}
            src="/efPenIcon.png"
            alt="efPenIcon"
          />
          <p className={styles.informationSectionTitle}>技能樹</p>
          <hr />
          <p className={styles.informationSectionContent}>
            前端包含哪些技術？ 你又學會了哪些？ 趕緊點進來試試看。
          </p>
          <EffectBtn name={"技能樹"} btnType={"filledBtn"} />
        </div>
      </section>

      <section className={styles.aboutSection}>
        <p className={styles.aboutSectionTitle}>關於</p>
        <hr />
        <p className={styles.aboutSectionContent}>
          近年來，社會對於軟體工程師的需求急速增加，全台各地的補習也如雨後春筍般開業，
          然而人的時間有限，要如何找到適合自己的學習環境？
          <br />
          <br />
          「Front-Enter」特別針對前端工程的學習資源，進行蒐集、分類，
          期待讓有志成為前端工程師的人，找到最適合自己的學習環境。
        </p>
      </section>
    </main>
  );
}
