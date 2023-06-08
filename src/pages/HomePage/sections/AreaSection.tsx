import styles from "./AreaSection.module.css";

const AreaSection = () => {
  return (
    <section className={`section-very-tall-padding ${styles.areaSection}`}>
      <div className={styles.header}>
        <h2>Primarily servicing</h2>
        <h1>West Michigan</h1>
        <h2>with capabilities to travel</h2>
      </div>
      <p>Our base of operations is located between Holland and Grand Rapids.</p>
      <p>
        We work with you on any travel needs for your events that might require
        overnight stays. We won't let your events go uncovered.
      </p>
    </section>
  );
};

export default AreaSection;
