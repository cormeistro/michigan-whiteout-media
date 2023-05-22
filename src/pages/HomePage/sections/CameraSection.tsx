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
            Only <span>Quality</span> Equipment
          </h1>
          <h2>We use the best tools for the job</h2>
        </div>
        <p>
          Combining Canon's beautiful Aobe RGB profile for accurate colors,
          alongide the sharpest and brightest glass, we capture images with an
          accuracy that has you wanting for more.
        </p>
        <h3>Never too much</h3>
        <p>
          We utilize natural light and artificial intelligence to capture and
          edit photos that will require minimal setup for on-site photos and
          won't get in the way.
        </p>
      </div>
    </section>
  );
};

export default CameraSection;
