import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Contact, Home } from "./pages";
import { Header } from "./components";
import { AboutUs } from "./pages/about-us/about-us";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
