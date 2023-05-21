import styles from "./ContactForm.module.css";
import { RiCloseLine } from "react-icons/ri";

interface Props {
  hideContact: () => void;
}

const ContactForm = ({ hideContact }: Props) => {
  return (
    <div className={styles.contactForm}>
      <div className={`icon ${styles.icon}`} onClick={hideContact}>
        <RiCloseLine />
      </div>
      <div className={styles.wrapper}>
        <h1>Let's Connect</h1>
        <form>
          <input id="contact-name" type="text" placeholder="Your Name" />
          <input id="contact-email" type="email" placeholder="Your Email" />
          <textarea id="contact-message" placeholder="Your Message" />
          <button className="button-solid-red" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
