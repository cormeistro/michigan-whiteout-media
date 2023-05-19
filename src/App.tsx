import TopBar from "./components/TopBar";
import { HomePage } from "./pages";
import "./styles/App.css";
import "./styles/Colors.css";
import "./styles/CompStyles.css";
import "./styles/Fonts.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <HomePage />
    </div>
  );
}

export default App;
