import styles from "./HomePage.module.css";
import AreaSection from "./sections/AreaSection";
import HeroSection from "./sections/HeroSection";

interface Props {
  showContact: () => void;
}

const HomePage = ({ showContact }: Props) => {
  return (
    <div className={styles.homePage}>
      <HeroSection showContact={showContact} />
      <AreaSection />
    </div>
  );
};

export default HomePage;
