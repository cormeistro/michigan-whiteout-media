import styles from "./HeroSection.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

interface Props {
  showContact: () => void;
}

const HeroSection = ({ showContact }: Props) => {
  return (
    <section className={`section-very-tall-padding ${styles.heroSection}`}>
      <div className={styles.slogan}>
        <h1>Michigan</h1>
        <h1>
          <span>Whiteout</span>
        </h1>
        <h1>Media</h1>
        <h2>West-Michigan Premier Media</h2>
      </div>
      <p>
        Sports + Corporate Photography | Web Development & Design | Videography
        and Marketing
      </p>
      <p>
        We combine over a decade of experience in photography & media to provide
        creative content that help capture the emotions our clients feel.
      </p>
      <div className={styles.row}>
        <button className="button-solid-red" onClick={showContact}>
          Contact Us
        </button>
        <a
          href="http://facebook.com/michiganwhiteoutmedia"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon">
            <BsFacebook />
          </div>
        </a>
        <a
          href="http://instagram.com/michiganwhiteout"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon">
            <BsInstagram />
          </div>
        </a>
        <a
          href="http://twitter.com/whiteoutmedia"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon">
            <BsTwitter />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
