import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={`section-tall-padding ${styles.heroSection}`}>
      <h1>Capturing every moment</h1>
      <h2>
        down to the last <span>detail</span>.
      </h2>
    </section>
  );
};

export default HeroSection;
