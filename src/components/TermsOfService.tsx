import { FileWarning, Scale, FileText, CheckCircle2 } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="bg-white border border-gray-200 rounded p-8 lg:p-12 shadow-sm">
      <div className="mb-10">
        <h2 className="text-sm font-black uppercase text-gray-500 mb-3 flex items-center">
          <span className="w-2 h-2 bg-orange-500 mr-2"></span> Legal Information
        </h2>
        <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4">
          Terms of Service
        </h3>
        <p className="text-sm text-gray-500 font-medium">Last Updated: October 2023</p>
      </div>

      <div className="prose prose-gray max-w-none text-gray-600 space-y-8 font-medium leading-relaxed">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="h-6 w-6 text-orange-500" />
            <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight m-0">1. Agreement to Terms</h4>
          </div>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and HD Contractor Limited ("Company", "we", "us", or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileWarning className="h-6 w-6 text-orange-500" />
            <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight m-0">2. Intellectual Property Rights</h4>
          </div>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of New Zealand.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-orange-500" />
            <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight m-0">3. User Representations</h4>
          </div>
          <p className="mb-4">By using the Site, you represent and warrant that:</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
              <span>All registration information you submit will be true, accurate, current, and complete.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
              <span>You will maintain the accuracy of such information and promptly update such registration information as necessary.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
              <span>You have the legal capacity and you agree to comply with these Terms of Service.</span>
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-4">4. Modifications and Interruptions</h4>
          <p>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-4">5. Contact Us</h4>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:<br /><br />
            <strong>HD Contractor Limited</strong><br />
            Auckland, New Zealand<br />
            Email: info@hdcontractor.co.nz
          </p>
        </section>
      </div>
    </div>
  );
}
