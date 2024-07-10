import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Contact, FAQ, Process } from "./pages";
import { Header } from "./components";
import { AboutUs } from "./pages/about-us/about-us";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ablauf" element={<Process />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
