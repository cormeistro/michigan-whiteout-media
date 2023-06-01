import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={`section-tall-padding ${styles.heroSection}`}>
      <div className={styles.wrapper}>
        <div className={styles.headers}>
          <h1>Portrait Photography</h1>
          <h2>More than just sports</h2>
        </div>
        <p>
          We combine over a decade of experience capturing both candid and
          staged moments that will save those memories in a tangible way. Don't
          let these memories slip away.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
