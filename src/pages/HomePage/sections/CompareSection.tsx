import styles from "./CompareSection.module.css";
import ReactCompareImage from "react-compare-image";
import Image1 from "../assets/compare-original.jpg";
import Image2 from "../assets/compare-denoised.jpg";

const CompareSection = () => {
  return (
    <section className={`section-standard-padding ${styles.compareSection}`}>
      <div className={styles.left}>
        <div className={`box-shadow-light ${styles.imageWrapper}`}>
          <ReactCompareImage leftImage={Image1} rightImage={Image2} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <h2>We use</h2>
          <h1>Artificial Intelligence</h1>
          <h2>to clean up images and remove noise</h2>
        </div>
        <p>
          Sports photography often means a lot of grainy images; it's the nature
          of the beast.
        </p>
        <p>
          We solve that problem by using open lenses combined with AI to reduce
          image noise in post-production and make images appear smooth and
          crispy.
        </p>
      </div>
    </section>
  );
};

export default CompareSection;
