import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";
import Logo from "./assets/MWMv2.svg";
import { useState } from "react";
import NavItems from "./NavItems";

interface Props {
  showContact: () => void;
}

const TopBar = ({ showContact }: Props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const closeMenu = () => {
    setMenuVisible(false);
  };

  function handleContact() {
    setMenuVisible(false);
    showContact();
  }

  return (
    <section className={`topBar section-short-padding ${styles.topBar}`}>
      <Link to="/">
        <img src={Logo} alt="MWM Logo" />
      </Link>
      <nav className={styles.fullNav}>
        <NavItems handleContact={handleContact} closeMenu={closeMenu} />
      </nav>
      <div className={styles.mobileMenu}>
        {menuVisible ? (
          <>
            <div className={`icon ${styles.icon}`} onClick={closeMenu}>
              <RiCloseLine />
            </div>
            <nav className={styles.halfNav}>
              <NavItems handleContact={handleContact} closeMenu={closeMenu} />
            </nav>
          </>
        ) : (
          <div
            className={`icon ${styles.icon}`}
            onClick={() => setMenuVisible(true)}
          >
            <RiMenu3Line />
          </div>
        )}
      </div>
    </section>
  );
};

export default TopBar;
