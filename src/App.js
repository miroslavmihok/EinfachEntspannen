import Home from "../src/components/home/home";
import Dienstleistungen from "../src/components/dienstleistungen/dienstleistungen";
import Referenzen from "../src/components/referenzen/referenzen";
import Marken from "./components/marken/marken";
import Kontakt from "./components/kontakt/kontakt";
import Social from "./components/social/social";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./App.css";

function App() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Header />
      <Home />
      <Dienstleistungen />
      <Referenzen />
      <Marken />
      <Social />
      <Kontakt />
      <Footer />
    </div>
  );
}

export default App;
