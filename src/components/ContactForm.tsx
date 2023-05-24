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
        <form
          action="https://formsubmit.co/info@michiganwhiteout.com"
          method="POST"
        >
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            id="contact-message"
            name="message"
            placeholder="Your Message"
            required
          />
          <button className="button-solid-red" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
