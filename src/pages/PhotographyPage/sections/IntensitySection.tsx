import styles from "./IntensitySection.module.css";
import Image from "../assets/Freethrow.jpg";

const IntensitySection = () => {
  return (
    <section className={`section-standard-padding ${styles.intensitySection}`}>
      <div className={styles.left}>
        <div className={`box-shadow-light ${styles.imageWrapper}`}>
          <img src={Image} alt="Basketball player at the free throw line" />
        </div>
      </div>
      <div className={styles.right}>
        <h2>Preserving the</h2>
        <h1>INTENSITY</h1>
        <h2>of the game</h2>
      </div>
    </section>
  );
};

export default IntensitySection;
