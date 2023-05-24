import styles from "./HomePage.module.css";
import AreaSection from "./sections/AreaSection";
import CameraSection from "./sections/CameraSection";
import CompareSection from "./sections/CompareSection";
import HeroSection from "./sections/HeroSection";
import LastDetailSection from "./sections/LastDetailSection";

interface Props {
  showContact: () => void;
}

const HomePage = ({ showContact }: Props) => {
  return (
    <div className={styles.homePage}>
      <HeroSection showContact={showContact} />
      <AreaSection />
      <LastDetailSection />
      <CompareSection />
      <CameraSection />
    </div>
  );
};

export default HomePage;
