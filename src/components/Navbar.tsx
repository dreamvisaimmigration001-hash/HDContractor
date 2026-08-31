import { useState, useEffect } from 'react';
import { X, HardHat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/', id: '/' },
    { name: 'About', href: '/about', id: '/about' },
    { name: 'Services', href: '/services', id: '/services' },
    { name: 'Projects', href: '/projects', id: '/projects' },
    { name: 'Team', href: '/team', id: '/team' },
    { name: 'Contact', href: '/contact', id: '/contact' },
  ];

  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const NavContent = () => (
    <>
      <div className="">
        <div className="mb-2">
          <img 
            src="https://www.hdcontractor.co.nz/images/HDC%20long%20grey%20fonts.png" 
            alt="HD Contractor" 
            className="h-15 w-full" 
          />
        </div>
        <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Auckland Construction Div.</div>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        <div className="p-2 text-xs font-bold text-gray-500 uppercase tracking-wider">Navigation</div>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.id;
          return (
            <Link
              key={link.name}
              to={link.href}
              onClick={handleLinkClick}
              className={`block rounded p-3 text-sm flex justify-between transition-colors ${
                isActive ? 'bg-orange-600 text-white font-medium shadow-sm' : 'hover:bg-gray-800 text-gray-300'
              }`}
            >
              <span className="uppercase tracking-tight font-bold">{link.name}</span>
              {isActive && <span className="bg-orange-700 px-1.5 rounded text-[10px] flex items-center shadow-inner tracking-widest uppercase font-bold">VIEW</span>}
            </Link>
          );
        })}
      </nav>
      <div className="p-6 border-t border-gray-800 mt-4">
        <div className="text-[10px] text-gray-500 uppercase mb-2 font-bold">Parent Organization</div>
        <div className="text-xs text-gray-300 font-bold uppercase tracking-tight">Oneness Holding Private Ltd</div>
        <div className="text-[10px] text-gray-500 uppercase">Singapore Head Office</div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-[#111827] flex-col border-r border-gray-800 shrink-0 h-screen overflow-y-auto">
        <NavContent />
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-gray-900/80 z-[100] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
              className="md:hidden fixed inset-y-0 left-0 w-[280px] bg-[#111827] flex flex-col z-[110] border-r border-gray-800 shadow-2xl"
            >
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-4 text-gray-400 hover:text-white p-2"
              >
                <X className="h-5 w-5" />
              </button>
              <NavContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
