import { motion } from 'motion/react';
import { Home, Ruler, Hammer, PaintBucket, Wrench, Building, HardHat, CheckCircle2, Factory, ChevronRight } from 'lucide-react';

const serviceCategories = [
  {
    id: 'new-builds',
    title: 'New Builds',
    icon: <Building className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'We bring extensive knowledge and experience to comprehensive new build solutions, ensuring a solid and secure base for your construction.',
    services: [
      { name: 'Foundation Construction', desc: 'Comprehensive foundation solutions ensuring a solid and secure base for your construction.' },
      { name: 'Driveways', desc: 'Removing and replacing old concrete or laying new concrete for driveways, footpaths, and patios.' },
      { name: 'Decks', desc: 'Creating fantastic outdoor living areas to add more entertainment space.' },
      { name: 'Fences', desc: 'Bespoke fencing services tailored for diverse outdoor environments.' },
      { name: 'Timber Retaining Walls', desc: 'Cost-effective solutions that combine functionality with aesthetic appeal.' },
      { name: 'Hard Landscape Pavers', desc: 'Enhance the durability and beauty of your outdoor spaces.' },
      { name: 'Garages', desc: 'Custom-designed single, double, or multi-purpose garages with workshops.' },
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodel',
    icon: <Home className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'From bathrooms to full house extensions, we transform your existing spaces into modern, functional, and aesthetically pleasing environments.',
    services: [
      { name: 'Bathroom & Kitchen', desc: 'Dramatically improve the look and functionality with our cabinetry and makeover team.' },
      { name: 'Full House & Extensions', desc: 'Comprehensive renovations and extensions to revitalize your space and accommodate growth.' },
      { name: 'Commercial Fitouts', desc: 'Minimal disruption and maximum efficiency for commercial spaces to boost your business image.' },
      { name: 'Deck, Fence & Gate Restoration', desc: 'Repairing weathering damage, restoring structures, and maintaining boundaries.' },
      { name: 'Flooring, Tile & Grout', desc: 'Durable, waterproof tile installations and comprehensive grout services.' },
      { name: 'Painting & Artistic Walls', desc: 'Interior, exterior, custom feature walls, and artistic decorative coatings.' },
      { name: 'Carpentry & Waterproofing', desc: 'Custom cabinetry, structural framing repairs, and professional water leakage solutions.' },
      { name: 'Demolition & Removal', desc: 'Seamless demolition for renovation and post-tenancy shoplot removals.' }
    ]
  },
  {
    id: 'handyman',
    title: 'Handyman Services',
    icon: <Wrench className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Reliable general maintenance and minor repair works to keep your property in top condition safely and efficiently.',
    services: [
      { name: 'Door & Window', desc: 'Expert maintenance to keep your home secure and looking its best.' },
      { name: 'Wall & Ceiling Repair', desc: 'Minor patch-ups or new interior walls for additional rooms.' },
      { name: 'Assembly & Installation', desc: 'Furniture assembly, shelves, mirrors, and protection installations.' },
      { name: 'Painting, Deck & Fence', desc: 'Revitalizing fences, decks, and interior/exterior walls with fresh plaster and paint.' },
      { name: 'General Repairs', desc: 'Miscellaneous repair tasks and specialized projects to ensure your home remains in top-notch condition.' }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Property Maintenance',
    icon: <Factory className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Ensure your commercial property or real estate investment stays in top shape with our comprehensive maintenance services.',
    services: [
      { name: 'Building Maintenance', desc: 'Maintaining the integrity and functionality of your property to enhance aesthetics and practicality.' },
      { name: 'Building Repair Services', desc: 'Painting, plastering, and other repair works tailored to meet your commercial needs.' },
      { name: 'House Sales Preparation', desc: 'Making your property shine in the competitive real estate market.' },
      { name: 'End of Tenancy Repair', desc: 'Efficiently prepare rental units for new tenants, ensuring minimal downtime.' }
    ]
  }
];

export default function Services() {
  return (
    <div className="space-y-8">
      <section id="services" className="bg-white border border-gray-200 rounded p-8">
        <div className="mb-12">
          <h2 className="text-xs font-black uppercase text-gray-500 mb-3 flex items-center">
            <span className="w-2 h-2 bg-orange-500 mr-2"></span> Service Capabilities
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4">
            Our Services
          </h3>
          <p className="text-sm text-gray-600 uppercase tracking-widest max-w-4xl leading-relaxed">
            As experienced general contractors, we specialize in both commercial and residential projects, excelling in new builds, renovation, handyman services, and commercial property maintenance. With a focus on quality craftsmanship and client satisfaction, we bring expertise and reliability to every project.
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-5/12 w-full">
                  <div className="overflow-hidden rounded border border-gray-200 shadow-sm relative aspect-[4/3]">
                    <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-white p-3 rounded shadow-lg text-orange-500">
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-7/12 w-full">
                  <div className="mb-6">
                    <h4 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors duration-300">
                      {category.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {category.services.map((service, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 mr-3 mt-1 shrink-0" />
                        <div>
                          <h5 className="text-sm font-bold text-gray-900 tracking-tight">{service.name}</h5>
                          <p className="text-xs text-gray-500 mt-1">{service.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Guarantee Banner */}
      <section className="bg-[#111827] rounded p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between border-b-4 border-orange-500 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="flex items-center mb-8 md:mb-0 relative z-10">
          <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mr-6 border border-white/20">
            <HardHat className="h-8 w-8 text-orange-500" />
          </div>
          <div>
            <h4 className="text-2xl font-black text-white uppercase tracking-tighter">HD Standard Guarantee</h4>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-2 max-w-sm">Quality craftsmanship and client satisfaction on every project. No exceptions.</p>
          </div>
        </div>
        
        <div className="relative z-10 flex gap-8">
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-1">100<span className="text-orange-500 text-2xl">%</span></div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Satisfaction Guarantee</div>
          </div>
          <div className="w-px h-16 bg-gray-700 hidden sm:block"></div>
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-1">24<span className="text-orange-500 text-2xl">/7</span></div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Client Support</div>
          </div>
        </div>
      </section>
    </div>
  );
}
