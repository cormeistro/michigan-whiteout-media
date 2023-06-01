import styles from "./SummerPhotosSection.module.css";

const SummerPhotosSection = () => {
  return (
    <section className={`section-tall-padding ${styles.summerPhotosSection}`}>
      <h1>2023 Summer Portraits</h1>
      <h2>We are now booking portrait sessions</h2>
      <button className="button-solid-red">See More</button>
    </section>
  );
};

export default SummerPhotosSection;
