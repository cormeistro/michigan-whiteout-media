import styles from "./HomePage.module.css";
import AreaSection from "./sections/AreaSection";
import CameraSection from "./sections/CameraSection";
import CompareSection from "./sections/CompareSection";
import HeroSection from "./sections/HeroSection";

interface Props {
  showContact: () => void;
}

const HomePage = ({ showContact }: Props) => {
  return (
    <div className={styles.homePage}>
      <HeroSection showContact={showContact} />
      <AreaSection />
      <CompareSection />
      <CameraSection />
    </div>
  );
};

export default HomePage;
