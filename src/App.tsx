import "./styles/App.css";
import Logo from "./assets/MWM.svg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="MWM Logo" />
      <h1>Michigan Whiteout Media</h1>
      <h2>West-Michigan's Premiere Action Photographers</h2>
      <p>
        This website is currently under construction. Please connect with us via
        social media for immediate responses.
      </p>
      <div className="social-links">
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
          href="https://twitter.com/whiteoutmedia"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon">
            <BsTwitter />
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
