import styles from "./AreaSection.module.css";

const AreaSection = () => {
  return (
    <section className={`section-tall-padding ${styles.areaSection}`}>
      <h2>Primarily servicing</h2>
      <h1>West Michigan</h1>
      <h2>with capabilities to travel</h2>
    </section>
  );
};

export default AreaSection;
