import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";
import Logo from "./assets/MWMv2.svg";

interface Props {
  showContact: () => void;
}

const TopBar = ({ showContact }: Props) => {
  return (
    <section className={`topBar section-short-padding ${styles.topBar}`}>
      <Link to="/">
        <img src={Logo} alt="MWM Logo" />
      </Link>
      <nav className={styles.navigation}>
        <button className="button-outline-red" onClick={showContact}>
          Contact Us
        </button>
      </nav>
    </section>
  );
};

export default TopBar;
