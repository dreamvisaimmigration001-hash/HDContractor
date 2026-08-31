import {
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Search,
  X,
  FileText,
  Calendar,
  DollarSign,
  User,
  Building,
  UploadCloud,
  Check,
} from "lucide-react";
import React, { useState, useRef } from "react";

export default function Careers() {
  const [isOfferDialogOpen, setIsOfferDialogOpen] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [offerData, setOfferData] = useState<any>(null);

  // Application form states
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [applyForm, setApplyForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSearchOffer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!referenceCode.trim()) return;

    setLoading(true);
    setError("");
    setOfferData(null);

    try {
      const response = await fetch(
        `https://offer-letter-app-one.vercel.app/api/v1/public/offers?companyId=6a9508aeb9a4e9ef5cedb08d&reference=${referenceCode}`,
      );
      const data = await response.json();

      if (data.success && data.data) {
        setOfferData(data.data);
      } else {
        setError("Offer letter not found or invalid reference code.");
      }
    } catch (err) {
      setError("An error occurred while fetching the offer letter.");
    } finally {
      setLoading(false);
    }
  };

  const closeDialog = () => {
    setIsOfferDialogOpen(false);
    setReferenceCode("");
    setOfferData(null);
    setError("");
  };

  const openApplyDialog = (jobTitle: string = "General Application") => {
    setSelectedJob(jobTitle);
    setIsApplyDialogOpen(true);
    setApplySuccess(false);
  };

  const closeApplyDialog = () => {
    setIsApplyDialogOpen(false);
    setApplyForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setResumeFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplying(true);

    // Mock upload & submit delay
    setTimeout(() => {
      setIsApplying(false);
      setApplySuccess(true);
      setTimeout(() => {
        closeApplyDialog();
      }, 2000);
    }, 1500);
  };

  const jobs = [
    {
      title: "Project Manager",
      type: "Full-time",
      location: "Auckland",
      department: "Management",
    },
    {
      title: "Site Supervisor",
      type: "Full-time",
      location: "Auckland",
      department: "Operations",
    },
    {
      title: "Senior Carpenter",
      type: "Full-time",
      location: "Auckland",
      department: "Construction",
    },
    {
      title: "Quantity Surveyor",
      type: "Full-time",
      location: "Auckland",
      department: "Finance",
    },
  ];

  return (
    <section className="bg-white border border-gray-200 rounded p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h2 className="text-sm font-black uppercase text-gray-500 mb-3 flex items-center">
            <span className="w-2 h-2 bg-orange-500 mr-2"></span> Join Our Team
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4">
            Build Your Career With Us
          </h3>
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed font-medium">
            At HD Contractor, we believe that our people are our greatest asset.
            We are always looking for passionate, skilled, and dedicated
            individuals to join our growing team. Whether you're an experienced
            professional or just starting your career in the construction
            industry, we offer a dynamic and supportive environment where you
            can thrive.
          </p>
        </div>

        <button
          onClick={() => setIsOfferDialogOpen(true)}
          className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-bold uppercase tracking-widest rounded transition-colors shadow-sm border border-gray-300"
        >
          <FileText className="w-4 h-4 mr-2" />
          Verify Offer Letter
        </button>
      </div>

      {isOfferDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
          <div className="bg-white rounded shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                <FileText className="w-5 h-5 mr-3 text-orange-500" /> Verify
                Offer Letter
              </h3>
              <button
                onClick={closeDialog}
                className="text-gray-500 hover:text-gray-900 transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 flex-grow">
              <form onSubmit={handleSearchOffer} className="mb-8">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-tight mb-2">
                  Offer Reference Code
                </label>
                <div className="flex gap-3">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={referenceCode}
                      onChange={(e) => setReferenceCode(e.target.value)}
                      placeholder="e.g. OFF-2000-000000"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500 text-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-widest text-sm rounded transition-colors shadow disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {loading ? "Searching..." : "Search"}
                  </button>
                </div>
                {error && (
                  <p className="mt-3 text-sm text-red-600 font-medium">
                    {error}
                  </p>
                )}
              </form>

              {offerData && (
                <div className="border border-gray-200 rounded overflow-hidden">
                  <div className="bg-gray-50 p-6 border-b border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-2.5 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest rounded mb-2">
                          {offerData.status}
                        </span>
                        <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
                          {offerData.employment?.position}
                        </h4>
                      </div>
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                        Ref: {offerData.reference}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-start">
                        <Building className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                            Company
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                            {offerData.company?.name}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <User className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                            Candidate
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                            {offerData.employee?.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {offerData.employee?.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <DollarSign className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                            Salary
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: offerData.employment?.currency || "USD",
                            }).format(offerData.employment?.salary)}{" "}
                            / year
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                            Joining Date
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                            {offerData.employment?.joiningDate
                              ? new Date(
                                  offerData.employment.joiningDate,
                                ).toLocaleDateString(undefined, {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })
                              : "TBD"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h5 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">
                      Offer Content
                    </h5>
                    <div className="prose prose-sm max-w-none text-gray-600 font-medium whitespace-pre-wrap leading-relaxed">
                      {offerData.offerContent}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
              <button
                onClick={closeDialog}
                className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-bold uppercase tracking-widest text-xs rounded transition-colors shadow"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 mt-8">
        <div className="bg-gray-50 p-8 rounded border border-gray-200 border-l-4 border-l-orange-500">
          <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
            Why Work With Us?
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start text-sm text-gray-700 font-bold">
              <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
              <span>Competitive compensation and benefits packages.</span>
            </li>
            <li className="flex items-start text-sm text-gray-700 font-bold">
              <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
              <span>
                Opportunities for professional growth and career advancement.
              </span>
            </li>
            <li className="flex items-start text-sm text-gray-700 font-bold">
              <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
              <span>
                A strong commitment to workplace safety and employee well-being.
              </span>
            </li>
            <li className="flex items-start text-sm text-gray-700 font-bold">
              <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
              <span>Collaborative and inclusive team culture.</span>
            </li>
            <li className="flex items-start text-sm text-gray-700 font-bold">
              <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
              <span>
                Work on exciting and diverse projects across Auckland.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-[#111827] text-white p-8 rounded border border-gray-800 flex flex-col justify-center">
          <Briefcase className="h-12 w-12 text-orange-500 mb-6" />
          <h4 className="text-2xl font-black uppercase tracking-tight mb-4">
            Ready to Apply?
          </h4>
          <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">
            If you don't see a specific role listed below that matches your
            skills, we still want to hear from you. Send us your CV and a cover
            letter detailing how you can contribute to our team.
          </p>
          <button
            onClick={() => openApplyDialog()}
            className="inline-flex items-center text-orange-500 hover:text-orange-400 font-bold uppercase tracking-widest text-sm transition-colors text-left"
          >
            Submit Application <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <div>
        <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-6">
          Current Openings
        </h4>
        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white border border-gray-200 rounded hover:border-orange-500 transition-colors shadow-sm group"
            >
              <div className="mb-4 sm:mb-0">
                <h5 className="text-lg font-bold text-gray-900 uppercase tracking-tight">
                  {job.title}
                </h5>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-100 px-2 py-1 rounded">
                    {job.department}
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-100 px-2 py-1 rounded">
                    {job.type}
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-100 px-2 py-1 rounded">
                    {job.location}
                  </span>
                </div>
              </div>
              <button
                onClick={() => openApplyDialog(job.title)}
                className="self-start sm:self-auto inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 hover:bg-orange-500 text-white text-sm font-bold uppercase tracking-widest rounded transition-colors shadow"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {isApplyDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
          <div className="bg-white rounded shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col relative">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                <Briefcase className="w-5 h-5 mr-3 text-orange-500" /> Apply:{" "}
                {selectedJob}
              </h3>
              <button
                onClick={closeApplyDialog}
                className="text-gray-500 hover:text-gray-900 transition-colors p-1"
                disabled={isApplying || applySuccess}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 flex-grow">
              {applySuccess ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-500">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">
                    Application Submitted!
                  </h4>
                  <p className="text-gray-600 text-center font-medium">
                    Thank you for applying. We will review your application and
                    get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={applyForm.firstName}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={applyForm.lastName}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            lastName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={applyForm.email}
                        onChange={(e) =>
                          setApplyForm({ ...applyForm, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        value={applyForm.phone}
                        onChange={(e) =>
                          setApplyForm({ ...applyForm, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                      Cover Letter / Message
                    </label>
                    <textarea
                      rows={4}
                      value={applyForm.message}
                      onChange={(e) =>
                        setApplyForm({ ...applyForm, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm resize-none bg-gray-50 focus:bg-white"
                      placeholder="Tell us why you're a great fit for this role..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                      Resume / CV (PDF, DOCX)
                    </label>
                    <div
                      className={`border-2 border-dashed rounded p-6 text-center cursor-pointer transition-colors ${resumeFile ? "border-orange-500 bg-orange-50" : "border-gray-300 hover:border-gray-400 bg-gray-50 hover:bg-gray-100"}`}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                      {resumeFile ? (
                        <div className="flex items-center justify-center text-orange-600 font-bold text-sm">
                          <FileText className="w-5 h-5 mr-2" />
                          {resumeFile.name}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-gray-500">
                          <UploadCloud className="w-8 h-8 mb-2 text-gray-400" />
                          <p className="text-sm font-medium">
                            Click to upload your resume
                          </p>
                          <p className="text-xs mt-1 opacity-70">
                            Max file size: 5MB
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button
                      type="submit"
                      disabled={isApplying || !resumeFile}
                      className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white text-sm font-black uppercase tracking-widest rounded transition-colors shadow-md flex items-center justify-center"
                    >
                      {isApplying ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
