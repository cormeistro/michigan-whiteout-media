import styles from "./TopBar.module.css";
import Logo from "./assets/MWMv2.svg";

interface Props {
  showContact: () => void;
}

const TopBar = ({ showContact }: Props) => {
  return (
    <section className={`topBar section-short-padding ${styles.topBar}`}>
      <a href="/">
        <img src={Logo} alt="MWM Logo" />
      </a>
      <nav className={styles.navigation}>
        <button className="button-outline-red" onClick={showContact}>
          Contact Us
        </button>
      </nav>
    </section>
  );
};

export default TopBar;
