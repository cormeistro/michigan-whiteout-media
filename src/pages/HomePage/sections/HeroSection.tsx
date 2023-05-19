import styles from "./HeroSection.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import ImageCollage from "../assets/background.jpg";

const HeroSection = () => {
  return (
    <section className={`section-standard-padding ${styles.heroSection}`}>
      <div className={styles.left}>
        <div className={styles.slogan}>
          <h1>
            Michigan <span>Whiteout</span> Media
          </h1>
          <h2>West-Michigan's Premiere Action Photographers</h2>
        </div>
        <p>
          Sports + Corporate Photography | Web Development & Design |
          Videography and Marketing
        </p>
        <p>
          We combine over a decade of experience in photography & media to
          provide creative content that help capture the emotions our clients
          feel.
        </p>
        <div className={styles.row}>
          <button className="button-solid-red">Contact Us</button>
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
      </div>
      <div className={styles.right}>
        <img
          className="box-shadow-dark"
          src={ImageCollage}
          alt="Collage of sports"
        />
      </div>
    </section>
  );
};

export default HeroSection;
