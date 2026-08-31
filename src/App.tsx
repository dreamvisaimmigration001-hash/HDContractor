/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function Layout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'Global Overview: HD Contractor';
      case '/about': return 'Company Profile & History';
      case '/services': return 'Service Offerings & Capabilities';
      case '/projects': return 'Project Portfolio & Case Studies';
      case '/team': return 'Leadership & Site Teams';
      case '/careers': return 'Careers & Opportunities';
      case '/contact': return 'Contact & Inquiries';
      case '/privacy-policy': return 'Privacy Policy';
      case '/terms-of-service': return 'Terms of Service';
      default: return 'HD Contractor';
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#F3F4F6] font-sans text-gray-900 overflow-hidden selection:bg-orange-200 selection:text-orange-900">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div id="scroll-container" className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-[#F3F4F6]" style={{ backgroundImage: 'radial-gradient(#d1d5db 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-50 shrink-0 shadow-sm">
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-sm md:text-lg font-bold truncate max-w-[250px] md:max-w-none">{getPageTitle()}</h1>
            <span className="hidden md:inline-block bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">System Online</span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="hidden sm:block text-right text-[11px]">
              <div className="text-gray-400">AUCKLAND TIME</div>
              <div className="font-bold uppercase">14:22 NZDT</div>
            </div>
          </div>
        </header>
        <main className="p-4 md:p-6 max-w-7xl mx-auto w-full flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

