import { HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400 py-12 border-t-4 border-orange-500 rounded-t mt-12 shadow-2xl">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src="https://www.hdcontractor.co.nz/images/HDC%20long%20grey%20fonts.png" 
                alt="HD Contractor" 
                className="h-40 w-auto object-contain" 
              />
            </div>
            <p className="text-sm text-gray-400 max-w-sm mb-6 uppercase tracking-widest leading-relaxed font-bold">
              A subsidiary of Oneness Holding Private Limited.<br />
              Providing one-stop comprehensive construction solutions for Auckland, New Zealand.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm uppercase hover:text-orange-500 transition-colors font-bold tracking-tight block">Home</Link></li>
              <li><Link to="/about" className="text-sm uppercase hover:text-orange-500 transition-colors font-bold tracking-tight block">About Us</Link></li>
              <li><Link to="/services" className="text-sm uppercase hover:text-orange-500 transition-colors font-bold tracking-tight block">Services</Link></li>
              <li><Link to="/projects" className="text-sm uppercase hover:text-orange-500 transition-colors font-bold tracking-tight block">Projects</Link></li>
              <li><Link to="/careers" className="text-sm uppercase hover:text-orange-500 transition-colors font-bold tracking-tight block">Careers</Link></li>
              <li><Link to="/contact" className="text-sm uppercase hover:text-orange-500 transition-colors font-bold tracking-tight block">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3">
              <li className="text-sm font-bold uppercase tracking-tight flex items-center"><span className="text-gray-500 mr-2">Company No:</span> 7104613</li>
              <li><Link to="/privacy-policy" className="text-sm uppercase hover:text-orange-500 transition-colors font-bold tracking-tight block">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm uppercase hover:text-orange-500 transition-colors font-bold tracking-tight block">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-black uppercase tracking-widest">
          <p>&copy; 2019 HD Contractor Limited. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-orange-500">Serving Auckland since 2018</p>
        </div>
      </div>
    </footer>
  );
}
