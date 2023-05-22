import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import { HomePage, PhotographyPage } from "./pages";
import { useState } from "react";
import "./styles/CompStyles.css";
import "./styles/Colors.css";
import "./styles/Fonts.css";
import "./styles/App.css";

function App() {
  const [contactVisible, setContactVisible] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {contactVisible && (
          <ContactForm hideContact={() => setContactVisible(false)} />
        )}
        <TopBar showContact={() => setContactVisible(true)} />
        <Routes>
          <Route
            path="/"
            element={<HomePage showContact={() => setContactVisible(true)} />}
          />
          <Route path="/photography" element={<PhotographyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
