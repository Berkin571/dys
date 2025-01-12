import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import {
  Contact,
  FAQ,
  LectureCompanies,
  Process,
  AboutUs,
  Impressum,
  GmbH,
  UG,
} from './pages';
import { Footer, Header } from './components';

import './i18n/i18n';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<AboutUs />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/kaufprozess' element={<Process />} />
          <Route path='/vorratsgesellschaften' element={<LectureCompanies />} />
          <Route path='/gmbh' element={<GmbH />} />
          <Route path='/ug' element={<UG />} />
          <Route path='/impressum' element={<Impressum />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
