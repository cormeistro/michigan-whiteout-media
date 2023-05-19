import styles from "./HomePage.module.css";
import HeroSection from "./sections/HeroSection";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />
    </div>
  );
};

export default HomePage;
