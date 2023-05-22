import styles from "./Footer.module.css";
import Logo from "./assets/MWMv2.svg";

const Footer = () => {
  return (
    <section className={`section-standard-padding ${styles.footer}`}>
      <div className={styles.section}>
        <img src={Logo} alt="Michigan Whiteout Logo" className={styles.logo} />
        <h4>Michigan Whiteout Media</h4>
        <a href="mailto:info@michiganwhiteout.com">
          <p>info@michiganwhiteout.com</p>
        </a>
        <p>Holland, MI</p>
        <br />
        <p>&copy; 2023 Corey Collins, M.</p>
        <p>All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
