import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "./TopBar.module.css";
import Logo from "./assets/MWMv2.svg";
import { useState } from "react";

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

  function getNavItems() {
    return (
      <>
        <a onClick={closeMenu} href="">
          Photography
        </a>
        <a onClick={closeMenu} href="">
          Videography
        </a>
        <a onClick={closeMenu} href="">
          Advertising
        </a>
        <a onClick={closeMenu} href="">
          3D Renders
        </a>
        <a onClick={closeMenu} href="">
          About
        </a>
        <button className="button-outline-red" onClick={handleContact}>
          Contact Us
        </button>
      </>
    );
  }

  return (
    <section className={`topBar section-short-padding ${styles.topBar}`}>
      <a href="/">
        <img src={Logo} alt="MWM Logo" />
      </a>
      <nav className={styles.fullNav}>{getNavItems()}</nav>
      <div className={styles.mobileMenu}>
        {menuVisible ? (
          <>
            <div className={`icon ${styles.icon}`} onClick={closeMenu}>
              <RiCloseLine />
            </div>
            <nav className={styles.halfNav}>{getNavItems()}</nav>
          </>
        ) : (
          <div
            className={`icon ${styles.icon}`}
            onClick={() => setMenuVisible(true)}
          >
            <RiMenu3Line />
          </div>
        )}
        {/* <nav className={styles.halfNav}>{getNavItems()}</nav> */}
      </div>
    </section>
  );
};

export default TopBar;
