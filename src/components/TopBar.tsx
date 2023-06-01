import styles from "./TopBar.module.css";
import Logo from "./assets/MWMv2.svg";
import { Link, NavLink } from "react-router-dom";

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
        <NavLink to="/portraits">Portraits</NavLink>
        <button className="button-outline-red" onClick={showContact}>
          Contact Us
        </button>
      </nav>
    </section>
  );
};

export default TopBar;
