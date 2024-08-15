import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/Homepage";

const Imprint = lazy(() => import("./pages/Imprint"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));

function App() {
  return (
    <Router>
      <div className="h-full w-full">
        <Header />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
