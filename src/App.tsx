import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Contact, Home } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div className="app-container">
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
