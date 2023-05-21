import { useState } from "react";
import TopBar from "./components/TopBar";
import { HomePage } from "./pages";
import "./styles/App.css";
import "./styles/Colors.css";
import "./styles/CompStyles.css";
import "./styles/Fonts.css";
import ContactForm from "./components/ContactForm";

function App() {
  const [contactVisible, setContactVisible] = useState(false);

  return (
    <div className="App">
      {contactVisible && (
        <ContactForm hideContact={() => setContactVisible(false)} />
      )}
      <TopBar showContact={() => setContactVisible(true)} />
      <HomePage showContact={() => setContactVisible(true)} />
    </div>
  );
}

export default App;
