import { motion } from 'motion/react';
import { ArrowRight, Hammer, Ruler, HardHat, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="space-y-6">
      <section id="home" className="relative flex items-center justify-center overflow-hidden rounded shadow-xl py-24 md:py-32 border-b-4 border-orange-500">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Construction Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#111827]/80"></div>
        </div>
        
        {/* Caution tape corner */}
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-48 h-8 bg-yellow-400 transform rotate-45 translate-x-12 translate-y-4 flex items-center justify-center overflow-hidden border-y-2 border-black">
            <div className="w-full h-full flex" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-16 h-16 bg-orange-500 rounded flex items-center justify-center mb-8 shadow-lg rotate-3"
          >
            <Hammer className="h-8 w-8 text-white -rotate-3" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none"
          >
            Industrial Grade <br />
            <span className="text-orange-500">Excellence.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-xl font-medium text-gray-300 mb-10 max-w-3xl mx-auto uppercase tracking-widest leading-loose"
          >
            Comprehensive construction solutions from heavy commercial development to bespoke residential builds. Your trusted heavy-duty partner for Auckland's toughest sites.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/projects" className="inline-flex items-center justify-center px-8 py-4 text-sm font-black text-black bg-orange-500 hover:bg-orange-400 transition-colors uppercase tracking-widest shadow-lg rounded">
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-black text-white bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest rounded">
              Contact Command Center
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {[
          { icon: <Ruler className="h-10 w-10 text-orange-500" />, title: 'Precision Engineering', desc: 'Millimeter-perfect accuracy in every structural element.' },
          { icon: <HardHat className="h-10 w-10 text-orange-500" />, title: 'Expert Workforce', desc: 'Certified master builders and specialized heavy machinery operators.' },
          { icon: <ShieldCheck className="h-10 w-10 text-orange-500" />, title: 'Safety First', desc: 'Zero-incident safety record across all major commercial sites.' }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
            className="bg-white border border-gray-200 rounded p-8 shadow-sm border-t-4 border-t-orange-500 hover:shadow-md transition-shadow"
          >
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider leading-relaxed font-bold">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <section className="bg-white border border-gray-200 rounded p-8 lg:p-12 shadow-sm mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-black uppercase text-gray-500 mb-3 flex items-center">
              <span className="w-2 h-2 bg-orange-500 mr-2"></span> Who We Are
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter mb-6">
              Auckland's Premier Construction Partner
            </h3>
            <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
              <p>
                HD Contractor Limited is a trusted name in New Zealand's construction industry, bringing global expertise and local knowledge to every project. We specialize in delivering high-quality commercial, residential, and industrial construction services across Auckland.
              </p>
              <p>
                From groundbreaking new builds to complex renovations and reliable property maintenance, our team of seasoned professionals ensures every aspect of your project is executed with precision, safety, and excellence.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded border border-gray-200 border-l-2 border-l-orange-500">
                <div className="text-3xl font-black text-orange-600">500+</div>
                <div className="text-xs font-bold text-gray-600 uppercase tracking-widest mt-1">Projects Completed</div>
              </div>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 border-l-2 border-l-orange-500">
                <div className="text-3xl font-black text-orange-600">100%</div>
                <div className="text-xs font-bold text-gray-600 uppercase tracking-widest mt-1">Client Satisfaction</div>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-bold uppercase tracking-widest text-sm transition-colors">
                Read Our Story <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <img src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Construction Work" className="rounded shadow-sm w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Interior Renovation" className="rounded shadow-sm w-full h-64 object-cover" />
            </div>
            <div className="space-y-4 pb-8">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Commercial Fitout" className="rounded shadow-sm w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Architectural Structure" className="rounded shadow-sm w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
