import styles from "./LastDetailSection.module.css";

const LastDetailSection = () => {
  return (
    <section
      className={`section-very-tall-padding ${styles.lastDetailSection}`}
    >
      <div className={styles.header}>
        <h1>Capturing every moment</h1>
        <h2>
          down to the last <span>detail</span>.
        </h2>
      </div>
      <p>
        On average, we take roughly 2000-5000 photos per game, and we review ALL
        of them for the best quality.
      </p>
    </section>
  );
};

export default LastDetailSection;
