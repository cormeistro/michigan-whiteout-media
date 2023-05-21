import styles from "./CameraSection.module.css";
import Camera from "../assets/Canon.png";
import Lens from "../assets/Lens.png";

const CameraSection = () => {
  return (
    <section className={`section-tall-padding ${styles.cameraSection}`}>
      <div className={styles.topLeft}>
        <img src={Camera} alt="Canon r5 Camera" />
      </div>
      <div className={styles.topRight}>
        <img src={Lens} alt="Canon 24-105 Lens" />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.header}>
          <h1>
            Using <span>Quality</span> Equipment
          </h1>
          <h2>We use the best tools for the job</h2>
        </div>
        <p>
          Combining Canon's beautiful Aobe RGB profile for accurate colors,
          alongide the sharpest and brightest glass, we capture images with an
          accuracy that has you wanting for more.
        </p>
        <h3>We Edit Too</h3>
        <p>
          Using Adobe Photoshop combined with Serif's Affinity Photo, we have
          the skills to touch up blemishes, remove unwanted backgrounds, and
          correct issues with any image's composition.
        </p>
      </div>
    </section>
  );
};

export default CameraSection;
