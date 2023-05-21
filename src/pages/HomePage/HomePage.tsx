import styles from "./HomePage.module.css";
import HeroSection from "./sections/HeroSection";

interface Props {
  showContact: () => void;
}

const HomePage = ({ showContact }: Props) => {
  return (
    <div className={styles.homePage}>
      <HeroSection showContact={showContact} />
    </div>
  );
};

export default HomePage;
