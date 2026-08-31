import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white border border-gray-200 rounded p-8 lg:p-12 shadow-sm">
      <div className="mb-10">
        <h2 className="text-sm font-black uppercase text-gray-500 mb-3 flex items-center">
          <span className="w-2 h-2 bg-orange-500 mr-2"></span> Legal Information
        </h2>
        <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4">
          Privacy Policy
        </h3>
        <p className="text-sm text-gray-500 font-medium">Last Updated: October 2023</p>
      </div>

      <div className="prose prose-gray max-w-none text-gray-600 space-y-8 font-medium leading-relaxed">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-orange-500" />
            <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight m-0">1. Introduction</h4>
          </div>
          <p>
            HD Contractor Limited ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-orange-500" />
            <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight m-0">2. Information We Collect</h4>
          </div>
          <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
              <span><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you request a quote or contact us.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
              <span><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</span>
            </li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-6 w-6 text-orange-500" />
            <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight m-0">3. Use of Your Information</h4>
          </div>
          <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
              <span>Respond to product and customer service requests.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
              <span>Deliver targeted advertising, newsletters, and other information regarding promotions and the Site to you.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
              <span>Monitor and analyze usage and trends to improve your experience with the Site.</span>
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-4">4. Contact Us</h4>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:<br /><br />
            <strong>HD Contractor Limited</strong><br />
            Auckland, New Zealand<br />
            Email: privacy@hdcontractor.co.nz
          </p>
        </section>
      </div>
    </div>
  );
}
