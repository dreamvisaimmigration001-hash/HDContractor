import { motion } from 'motion/react';

const teamMembers = [
  {
    name: 'David Chen',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Michael Wong',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'James Harrison',
    role: 'Site Supervisor',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  }
];

export default function Team() {
  return (
    <section id="team" className="bg-white border border-gray-200 rounded p-8">
      <div className="mb-8">
        <h2 className="text-sm font-black uppercase text-gray-500 mb-3 flex items-center">
          <span className="w-2 h-2 bg-orange-500 mr-2"></span> Our People
        </h2>
        <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
          Meet Our Experts
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col items-center sm:items-start sm:flex-row sm:space-x-4 bg-gray-50 p-6 border border-gray-200 rounded hover:border-orange-200 transition-colors shadow-sm"
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 mb-4 sm:mb-0 border-2 border-white shadow">
              <img 
                src={member.image} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-gray-900 uppercase tracking-tight">{member.name}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
