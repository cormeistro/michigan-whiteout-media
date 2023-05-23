import styles from "./PhotographyPage.module.css";
import HeroSection from "./sections/HeroSection";
import IntensitySection from "./sections/IntensitySection";

const PhotographyPage = () => {
  return (
    <div className={styles.photographyPage}>
      <HeroSection />
      <IntensitySection />
    </div>
  );
};

export default PhotographyPage;
