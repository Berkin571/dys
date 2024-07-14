import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Contact, FAQ, LectureCompanies, Process } from "./pages";
import { Footer, Header } from "./components";
import { AboutUs } from "./pages/about-us/about-us";

import "./i18n/i18n";

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
          <Route
            path="/vortragsgesellschaften"
            element={<LectureCompanies />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
