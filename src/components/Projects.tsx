import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter } from 'lucide-react';

const projects = [
  // Commercial Projects
  { id: 1, title: 'Hair Salon', category: 'Commercial Projects', desc: 'Commercial Fit Out - Interior Renovation including Interior Painting, Splashback & Tiling Work, Featured Wall, Customized Cabinet & Cash Counter.', image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 2, title: 'Anytime Fitness Hobsonville', category: 'Commercial Projects', desc: 'Commercial Fit Out - Interior Renovation Works including floor polishing, vinyl installing, interior painting, feature wall lining & bathroom renovation.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 3, title: 'Tangaroa College', category: 'Commercial Projects', desc: 'Patio Canopy - New Patio Canopy Building Works.', image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 4, title: 'Hutmere Road', category: 'Commercial Projects', desc: 'Cabinetry for Yoga Studio - Custom cabinets.', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 5, title: 'Hunters Plaza', category: 'Commercial Projects', desc: 'Commercial Shop Fit Out - Room Extension (Store Room), Feature Wall, Painting & Plastering, Floor Covering, Cabinetry, Steel Rack Installation.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },

  // New Builds
  { id: 6, title: 'Park View Place', category: 'New Builds', desc: 'Foundation Construction - Foundation Project.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 7, title: 'Mariner Street', category: 'New Builds', desc: 'House Foundations - Foundation Project.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 9, title: 'Ervine Place', category: 'New Builds', desc: 'Garage Builds - New Garage Building Works.', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },

  // Renovation & Remodel
  { id: 10, title: 'Nicola Place 2', category: 'Renovation & Remodel', desc: 'Deck & Pergola Renovation, Carpentry Work.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 11, title: 'Nicola Place', category: 'Renovation & Remodel', desc: 'Full House Renovation - Kitchen, Bathroom, Interior, Laundry Room, Tiling Works, Repainting, HWC, Carpet, Deck, Pergola.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 12, title: 'Vodanovich Road', category: 'Renovation & Remodel', desc: 'Full House Renovation - Kitchen, Bathroom, Laundry, Tiling, Repainting, HWC, Flooring, Carpet, Deck, Staircase.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 13, title: 'Bokeen Lane', category: 'Renovation & Remodel', desc: 'Kitchen Renovation - Kitchen Cabinetry, Splash Back Tiles Works.', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 14, title: 'Summermist Drive', category: 'Renovation & Remodel', desc: 'Timber Decking Renovation - New Deck Project.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 15, title: 'Boyd Avenue', category: 'Renovation & Remodel', desc: 'Kitchen Renovation, Bathroom Renovation, Interior Painting, Tiles & Grouting.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 17, title: 'Ayer Road', category: 'Renovation & Remodel', desc: 'Decks and Stairs Works, Garden Shed Installation.', image: 'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 18, title: 'Drumquin Rise', category: 'Renovation & Remodel', desc: 'Exterior House Painting, Door & Gate Repainting and Other Touch-ups Works.', image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 19, title: 'Cheltenham Road', category: 'Renovation & Remodel', desc: 'Gothic Picket Fence Maintenance & Repainting.', image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 20, title: 'Railside Avenue', category: 'Renovation & Remodel', desc: 'Fire Damage Restoration Works - Demolition, Rebuilding, Finishing.', image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 22, title: 'Ervine Place (Deck)', category: 'Renovation & Remodel', desc: 'Fence & Deck Supply and Installation.', image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 23, title: 'Alexis Avenue', category: 'Renovation & Remodel', desc: 'Interior Painting & Plastering Works.', image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 24, title: 'Thisledew Place', category: 'Renovation & Remodel', desc: 'Floor Covering, Interior Painting & Plastering Works.', image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 25, title: 'Omahu Road', category: 'Renovation & Remodel', desc: 'Cabinetery, Garden Shed & Interior Painting, Wardrobe & Interior Renovation.', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  
  // Rental Repair
  { id: 26, title: 'Kingsland Rental', category: 'Rental Maintenance', desc: 'End of tenancy repair and cleaning.', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 27, title: 'Otahuhu Rental', category: 'Rental Maintenance', desc: 'Partial Renovation to meet requirements.', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { id: 28, title: 'Manurewa Rental', category: 'Rental Maintenance', desc: 'Full Interior Renovations for a rental house.', image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
];

const categories = ['All', 'New Builds', 'Renovation & Remodel', 'Commercial Projects', 'Rental Maintenance'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <section id="projects" className="bg-white border border-gray-200 rounded p-8 mb-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <h2 className="text-sm font-black uppercase text-gray-500 mb-3 flex items-center">
            <span className="w-2 h-2 bg-orange-500 mr-2"></span> Our Work
          </h2>
          <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
            Recent Projects
          </h3>
          <p className="text-base text-gray-600 uppercase tracking-widest mt-2 max-w-2xl leading-relaxed">
            A showcase of our industrial capabilities and precision craftsmanship across Auckland.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <Filter className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded text-sm font-bold uppercase tracking-tight whitespace-nowrap transition-colors ${
              activeCategory === cat 
                ? 'bg-orange-500 text-white shadow' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded overflow-hidden aspect-[4/3] cursor-pointer border border-gray-200 shadow-sm"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 translate-y-6 group-hover:translate-y-0">
                  <span className="inline-block self-start px-3 py-1 bg-orange-500 text-white text-[10px] font-bold rounded uppercase mb-2 shadow tracking-widest">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-black text-white uppercase tracking-tight">{project.title}</h4>
                </div>
                <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-3">
                  <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed font-medium">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
