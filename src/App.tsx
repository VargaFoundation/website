import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import ScrollToTop from "./components/ScrollToTop";

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contribute from './pages/Contribute';
import Testimonials from './pages/Testimonials';
import UserGuide from './pages/UserGuide';
import Blog from './pages/Blog';
import Mission from './pages/Mission';
import Donate from './pages/Donate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import LegalNotice from './pages/LegalNotice';
import UseOfData from './pages/UseOfData';
import NotFound from './pages/NotFound';
import Trust from './pages/Trust';
import Vulnerabilities from './pages/Vulnerabilities';
import Contact from './pages/Contact';
import Trademark from './pages/Trademark';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contribute" element={<Contribute />} />
          {/*<Route path="/testimonials" element={<Testimonials />} />*/}
          <Route path="/guide" element={<UserGuide />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/use-of-data" element={<UseOfData />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/vulnerabilities" element={<Vulnerabilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trademark" element={<Trademark />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* Route 404 - doit être en dernier */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;