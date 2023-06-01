import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import { HomePage } from "./pages";
import { useState } from "react";
import "./styles/CompStyles.css";
import "./styles/Colors.css";
import "./styles/Fonts.css";
import "./styles/App.css";

function App() {
  const [contactVisible, setContactVisible] = useState(false);

  return (
    <div className="App">
      {contactVisible && (
        <ContactForm hideContact={() => setContactVisible(false)} />
      )}
      <div className="stick-to-top">
        <TopBar showContact={() => setContactVisible(true)} />
      </div>
      <HomePage showContact={() => setContactVisible(true)} />
      <Footer />
    </div>
  );
}

export default App;
