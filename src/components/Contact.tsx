import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Check, UploadCloud, FileText } from 'lucide-react';
import React, { useState, useRef } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [attachment, setAttachment] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after a few seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setAttachment(null);
        (e.target as HTMLFormElement).reset();
      }, 4000);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachment(e.target.files[0]);
    }
  };

  return (
    <section id="contact" className="bg-white border border-gray-200 rounded p-8">
      <div className="mb-8">
        <h2 className="text-sm font-black uppercase text-gray-500 mb-3 flex items-center">
          <span className="w-2 h-2 bg-orange-500 mr-2"></span> Get In Touch
        </h2>
        <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
          Ready to Start Your Project?
        </h3>
        <p className="text-sm text-gray-500 mt-2 uppercase tracking-widest leading-relaxed max-w-2xl">
          Contact us today for a consultation. Our team is ready to listen to your specific requirements and deliver the best craftsmanship.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-50 p-6 rounded border border-gray-200 h-full shadow-sm">
            <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-6 border-b border-gray-200 pb-3">Contact Information</h4>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white border border-gray-200 p-3 rounded shadow-sm">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div className="ml-4">
                  <p className="font-bold text-xs uppercase text-gray-500 tracking-widest">Address</p>
                  <p className="text-base font-bold text-gray-900 mt-1">54B Tidal Road, Māngere,<br />Auckland 2022</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white border border-gray-200 p-3 rounded shadow-sm">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <div className="ml-4">
                  <p className="font-bold text-xs uppercase text-gray-500 tracking-widest">Phone</p>
                  <p className="text-base font-bold text-gray-900 mt-1">09 264 1442</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white border border-gray-200 p-3 rounded shadow-sm">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <div className="ml-4">
                  <p className="font-bold text-xs uppercase text-gray-500 tracking-widest">Email</p>
                  <a href="mailto:enquiry@hdcontractor.co.nz" className="text-base font-bold text-orange-600 hover:underline mt-1 block">
                    enquiry@hdcontractor.co.nz
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white border border-gray-200 p-3 rounded shadow-sm">
                  <Clock className="h-6 w-6 text-orange-500" />
                </div>
                <div className="ml-4">
                  <p className="font-bold text-xs uppercase text-gray-500 tracking-widest">Operating Hours</p>
                  <p className="text-base font-bold text-gray-900 mt-1">Mon - Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded border border-gray-200 h-full shadow-md border-t-4 border-t-orange-500 relative overflow-hidden">
            {submitSuccess ? (
              <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-500">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">Message Sent!</h4>
                <p className="text-gray-600 font-medium">Thank you for getting in touch. One of our team members will contact you shortly.</p>
              </div>
            ) : null}

            <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-6 border-b border-gray-200 pb-3">Send a Message</h4>
            
            <div className="space-y-4 relative z-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">First Name</label>
                  <input type="text" id="firstName" required className="w-full px-4 py-2.5 border border-gray-300 rounded text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Last Name</label>
                  <input type="text" id="lastName" required className="w-full px-4 py-2.5 border border-gray-300 rounded text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow bg-gray-50 focus:bg-white" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Address</label>
                <input type="email" id="email" required className="w-full px-4 py-2.5 border border-gray-300 rounded text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow bg-gray-50 focus:bg-white" />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Service Required</label>
                <select id="service" className="w-full px-4 py-2.5 border border-gray-300 rounded text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow bg-gray-50 focus:bg-white">
                  <option>New Build</option>
                  <option>Renovation</option>
                  <option>Refurbishment</option>
                  <option>Handyman Services</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Message</label>
                <textarea id="message" required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow resize-none bg-gray-50 focus:bg-white"></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Attachment (Optional)</label>
                <div 
                  className={`border-2 border-dashed rounded p-4 text-center cursor-pointer transition-colors ${attachment ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-gray-400 bg-gray-50 hover:bg-gray-100'}`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    className="hidden" 
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  {attachment ? (
                    <div className="flex items-center justify-center text-orange-600 font-bold text-sm">
                      <FileText className="w-4 h-4 mr-2" />
                      <span className="truncate max-w-[200px]">{attachment.name}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-500 py-2">
                      <UploadCloud className="w-6 h-6 mb-1 text-gray-400" />
                      <p className="text-xs font-medium">Upload plans, photos, or documents</p>
                    </div>
                  )}
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white text-sm font-black uppercase tracking-widest rounded transition-colors mt-4 shadow-md flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Sending...
                  </>
                ) : 'Submit Enquiry'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
