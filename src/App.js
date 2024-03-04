import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/Homepage";
import Imprint from "./pages/Imprint";
import Datenschutz from "./pages/Datenschutz";

function App() {
  return (
    <Router>
      <div className="h-full w-full">
        {/* overflow-x-hidden */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
