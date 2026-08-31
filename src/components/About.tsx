import { motion } from 'motion/react';
import { Building2, Globe2, ShieldCheck, Trophy, Target, History } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-6">
      <section id="about" className="bg-white border border-gray-200 rounded p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-black uppercase text-gray-500 mb-3 flex items-center">
              <span className="w-2 h-2 bg-orange-500 mr-2"></span> Corporate Profile
            </h2>
            <h3 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-tight">
              A Legacy of Excellence in Construction
            </h3>
            
            <div className="space-y-4 text-base text-gray-600 border-l-2 border-orange-200 pl-6 ml-1 leading-relaxed font-medium">
              <p>
                Established in 2018, <strong className="text-gray-900">HD Contractor Limited (Company Number: 7104613)</strong> is a subsidiary of HD Contractor Private Limited in Singapore, created to serve the heavy and commercial construction needs of Auckland, New Zealand.
              </p>
              <p>
                Our parent company operates under the umbrella of <strong className="text-gray-900">Oneness Holding Private Limited</strong> and has been a key player in the heavy construction industry since its establishment in 2010.
              </p>
              <p>
                As a General Construction Company, HD Contractor Private Limited boasts a rich history of providing comprehensive construction solutions, from initial planning and design to heavy engineering and maintenance. We are renowned for our commitment to excellence and our one-stop approach to massive construction projects.
              </p>
              <p>
                Bringing this same ethos to Auckland, we provide a true one-stop service for all building processes, listening to your specific requirements and manufacturing the best craftsmanship while managing multi-million dollar budgets and tight schedules efficiently.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-6 bg-gray-50 border border-gray-200 rounded shadow-sm">
                <Globe2 className="h-8 w-8 text-orange-500" />
                <span className="text-sm uppercase font-black text-gray-900 tracking-tight">Global Roots</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Singapore & NZ</span>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-gray-50 border border-gray-200 rounded shadow-sm">
                <Building2 className="h-8 w-8 text-orange-500" />
                <span className="text-sm uppercase font-black text-gray-900 tracking-tight">Established</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Since 2010</span>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-gray-900 border border-gray-900 rounded border-l-4 border-l-orange-500 shadow-md">
                <ShieldCheck className="h-8 w-8 text-orange-500" />
                <span className="text-sm uppercase font-black text-white tracking-tight">Trusted</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Quality Assured</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[700px] rounded overflow-hidden border border-gray-200 shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1631&q=80" 
              alt="Construction site" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
            
            {/* Stats Overlay */}
            <div className="absolute top-8 right-8 flex flex-col gap-4">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded shadow border border-white/20 text-center min-w-[140px]">
                <div className="text-4xl font-black text-orange-600">15+</div>
                <div className="text-xs font-bold text-gray-700 uppercase tracking-widest mt-1">Years Exp</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded shadow border border-white/20 text-center min-w-[140px]">
                <div className="text-4xl font-black text-orange-600">500+</div>
                <div className="text-xs font-bold text-gray-700 uppercase tracking-widest mt-1">Projects</div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white p-8 rounded border border-gray-200 border-l-4 border-l-orange-500 shadow-2xl">
                <p className="text-base font-bold text-gray-900 italic leading-relaxed">
                  "Ensuring all features and functionality are met with the best craftsmanship. We don't just build structures; we forge legacies."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-black text-gray-500 text-sm shadow-inner">CEO</div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-tight">Board of Directors</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-0.5">Oneness Holding</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded p-10 shadow-sm flex flex-col items-start border-t-4 border-t-orange-500"
        >
          <div className="p-4 bg-orange-50 rounded mb-6">
            <Target className="h-10 w-10 text-orange-600" />
          </div>
          <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Vision</h4>
          <p className="text-base text-gray-600 leading-relaxed font-medium">Our vision is to excel in all that we do, ensuring that HD Contractor to be synonymous with confidence and emerges as a leading force in the industry, driven by excellence, innovation, and sustainability.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#111827] border border-gray-800 rounded p-10 shadow-sm flex flex-col items-start border-t-4 border-t-orange-500"
        >
          <div className="p-4 bg-gray-800 rounded mb-6">
            <Trophy className="h-10 w-10 text-orange-500" />
          </div>
          <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">Mission</h4>
          <p className="text-base text-gray-400 leading-relaxed font-medium">At HD Contractor, we strive to deliver top-notch construction services that prioritize customer satisfaction through timely project delivery, superior work quality, and workplace safety. We highly value client input and consistently deliver high-quality work tailored to their needs.</p>
        </motion.div>
      </section>

      {/* Accreditations */}
      <section className="bg-white border border-gray-200 rounded p-8">
        <div className="mb-8">
          <h2 className="text-sm font-black uppercase text-gray-500 mb-3 flex items-center">
            <span className="w-2 h-2 bg-orange-500 mr-2"></span> Credentials
          </h2>
          <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">
            Our Accreditations
          </h3>
          <p className="text-base text-gray-600 mb-8 max-w-4xl leading-relaxed font-medium">
            HD Contractor possesses sufficient insurance coverage for public liability, professional indemnity, and statutory liability limits across all projects, thereby providing a sense of assurance and security. We hold full accreditation & are a member of:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Master Builders',
            'Site Safe',
            'Dulux Accredited Painter',
            'Mapei Waterproofing Certified Installer',
            'ARDEX Waterproofing Certified Installer',
            'New Zealand Malaysia Business Association'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-200 rounded shadow-sm hover:border-orange-200 transition-colors">
              <ShieldCheck className="w-6 h-6 text-orange-500 shrink-0" />
              <span className="text-sm font-bold uppercase tracking-tight text-gray-900">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-white border border-gray-200 rounded p-8">
        <div className="mb-10">
          <h2 className="text-sm font-black uppercase text-gray-500 mb-3 flex items-center">
            <span className="w-2 h-2 bg-orange-500 mr-2"></span> History
          </h2>
          <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
            Key Milestones: Global Expansion
          </h3>
        </div>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          {[
            { year: '2000', location: 'Singapore', title: 'Hong Dat Engineering Private Limited', desc: 'M&E Works' },
            { year: '2005', location: 'Dubai', title: 'Hong Dat Technical Works LLC', desc: 'Sub-Contracting Works' },
            { year: '2010', location: 'Singapore', title: 'Hong Dat Construction Private Limited', desc: 'Structural & Wet Trade Works' },
            { year: '2013', location: 'Singapore', title: 'Oneness Holding Private Limited', desc: 'Investment Company' },
            { year: '2015', location: 'Singapore', title: 'HD Contractor Private Limited', desc: 'Main Contracting Works' },
            { year: '2015', location: 'Singapore', title: 'Albedo Design Private Limited', desc: 'Interior Design & Renovation' },
            { year: '2015', location: 'Malaysia', title: 'Cosmos Décor Private Limited', desc: 'Joinery Factory' },
            { year: '2015', location: 'Singapore', title: 'Joydom Engineering Private Limited', desc: 'Handyman & Maintenance' },
            { year: '2015', location: 'Singapore', title: 'MIRS Innovate Private Limited', desc: 'Drone Industrial Application' },
            { year: '2018', location: 'New Zealand', title: 'HD Contractor Limited', desc: 'Main Contracting Works in NZ' },
            { year: '2022', location: 'New Zealand', title: 'SG Merlion Kitchens Limited', desc: 'Cabinetry & Joinery Factory' }
          ].map((milestone, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-orange-500 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <History className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4.5rem)] md:w-[calc(50%-3rem)] p-6 rounded border border-gray-200 bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-600 font-black text-lg">{milestone.year}</span>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{milestone.location}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-2 uppercase tracking-tight">{milestone.title}</h4>
                <p className="text-sm text-gray-600 uppercase tracking-widest font-medium">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
