import React, { useState } from 'react';
import { ConsultationFormData } from '../../types';
import { DEMO_CONFIG } from '../../data/sharedLegalData';
import { X, CheckCircle, MessageSquare, AlertCircle, Phone, Mail, Clock, ShieldCheck, Send } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  firmName?: string;
  themeContext?: 'heritage' | 'modern' | 'noir' | 'spatial';
  defaultCategory?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  firmName = 'Kashyap & Sanghi Chambers',
  themeContext = 'heritage',
  defaultCategory = '',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    matterCategory: defaultCategory || 'Supreme Court SLP / Appeal',
    courtJurisdiction: 'Supreme Court of India',
    urgency: 'routine',
    caseSummary: '',
    preferredMode: 'in_person',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ConsultationFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full legal name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for counsel verification';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit contact number';
    }
    if (!formData.caseSummary.trim()) {
      errs.caseSummary = 'Please provide a brief outline of the dispute or matter';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      matterCategory: 'Supreme Court SLP / Appeal',
      courtJurisdiction: 'Supreme Court of India',
      urgency: 'routine',
      caseSummary: '',
      preferredMode: 'in_person',
    });
    onClose();
  };

  // WhatsApp Pre-filled Link
  const whatsappText = encodeURIComponent(
    `Hello ${firmName}, I would like to schedule a preliminary legal consultation regarding: ${formData.matterCategory} before ${formData.courtJurisdiction}. Litigant: ${formData.fullName} (${formData.phone}). Urgency: ${formData.urgency.toUpperCase()}.`
  );
  const whatsappUrl = `https://wa.me/${DEMO_CONFIG.whatsappNumber.replace(/\D/g, '')}?text=${whatsappText}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
    >
      <div
        className={`relative w-full max-w-2xl my-auto max-h-[92vh] flex flex-col rounded-2xl border shadow-2xl transition-all overflow-hidden ${
          themeContext === 'noir'
            ? 'bg-neutral-950 border-neutral-800 text-neutral-100'
            : themeContext === 'heritage'
            ? 'bg-[#FCFAF6] border-[#DED7CA] text-neutral-900'
            : themeContext === 'modern'
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-[#090F1D] border-cyan-900/40 text-neutral-100'
        }`}
      >
        {/* Header */}
        <div
          className={`px-4 sm:px-6 py-3.5 sm:py-5 border-b flex items-center justify-between gap-3 shrink-0 ${
            themeContext === 'noir'
              ? 'border-neutral-800'
              : themeContext === 'heritage'
              ? 'border-[#EAE3D5]'
              : themeContext === 'modern'
              ? 'border-slate-100'
              : 'border-cyan-900/30'
          }`}
        >
          <div className="min-w-0">
            <h2 id="consultation-modal-title" className="text-base sm:text-xl font-semibold tracking-tight truncate">
              Schedule Legal Consultation
            </h2>
            <p className="text-[10px] sm:text-xs opacity-70 mt-0.5 truncate">
              {firmName} · Privileged Inquiry
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg opacity-60 hover:opacity-100 hover:bg-neutral-500/10 transition-colors shrink-0 cursor-pointer"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Consultation Request Dispatched</h3>
                <p className="text-xs max-w-md mx-auto opacity-75 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your inquiry for <strong>{formData.matterCategory}</strong> has been logged for demo testing.
                </p>
              </div>

              {/* Demo Notice Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-left text-xs space-y-2">
                <div className="flex items-center gap-2 font-medium text-amber-500">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Client Demo System Notice</span>
                </div>
                <p className="opacity-80">
                  This is an interactive demonstration for OBVERRA DIGITAL prospective clients. No real appointment has been filed with courts or advocates. In a production deployment, this form automatically syncs to your firm CRM, encrypted email dispatch, or case management software.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Test WhatsApp Dispatch</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-neutral-500/30 hover:bg-neutral-500/10 font-medium text-xs transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium mb-1.5 opacity-80">
                    Full Legal Name / Litigant *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Anand Vikramaditya"
                    className="w-full px-3 py-2 text-sm sm:text-xs rounded-lg border bg-transparent focus:outline-none focus:ring-1 focus:ring-amber-500 border-neutral-400/40"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-medium mb-1.5 opacity-80">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="counsel@company.in"
                    className="w-full px-3 py-2 text-sm sm:text-xs rounded-lg border bg-transparent focus:outline-none focus:ring-1 focus:ring-amber-500 border-neutral-400/40"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium mb-1.5 opacity-80">
                    Phone / WhatsApp (+91) *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98100 23456"
                    className="w-full px-3 py-2 text-sm sm:text-xs rounded-lg border bg-transparent focus:outline-none focus:ring-1 focus:ring-amber-500 border-neutral-400/40"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Matter Category */}
                <div>
                  <label className="block text-xs font-medium mb-1.5 opacity-80">
                    Matter Practice Area
                  </label>
                  <select
                    value={formData.matterCategory}
                    onChange={(e) => setFormData({ ...formData, matterCategory: e.target.value })}
                    className="w-full px-3 py-2 text-sm sm:text-xs rounded-lg border bg-transparent focus:outline-none focus:ring-1 focus:ring-amber-500 border-neutral-400/40"
                  >
                    <option value="Supreme Court SLP / Appeal" className="text-black">
                      Supreme Court SLP / Appellate Review
                    </option>
                    <option value="Commercial Arbitration (Section 9/34)" className="text-black">
                      Commercial Arbitration & Enforcement
                    </option>
                    <option value="Corporate M&A / Term Sheets" className="text-black">
                      Corporate M&A / Transaction Counsel
                    </option>
                    <option value="DPDP Act / Technology Contracts" className="text-black">
                      DPDP Act 2023 / Technology Contracts
                    </option>
                    <option value="White-Collar / PMLA Defense" className="text-black">
                      White-Collar Defense / PMLA Inquiries
                    </option>
                    <option value="High-Stakes Family Trust / Property" className="text-black">
                      Family Trust / Ancestral Estate Dispute
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Court / Forum */}
                <div>
                  <label className="block text-xs font-medium mb-1.5 opacity-80">
                    Court Jurisdiction / Forum
                  </label>
                  <select
                    value={formData.courtJurisdiction}
                    onChange={(e) => setFormData({ ...formData, courtJurisdiction: e.target.value })}
                    className="w-full px-3 py-2 text-sm sm:text-xs rounded-lg border bg-transparent focus:outline-none focus:ring-1 focus:ring-amber-500 border-neutral-400/40"
                  >
                    <option value="Supreme Court of India" className="text-black">Supreme Court of India</option>
                    <option value="High Court of Delhi" className="text-black">High Court of Delhi</option>
                    <option value="Bombay High Court" className="text-black">Bombay High Court</option>
                    <option value="NCLT / NCLAT Appellate" className="text-black">NCLT / NCLAT Benches</option>
                    <option value="Domestic / International Arbitral Seat" className="text-black">Arbitral Tribunal (Ad-hoc / MCIA / SIAC)</option>
                    <option value="Out-of-Court Advisory / Pre-litigation" className="text-black">Pre-litigation Advisory / Contract Review</option>
                  </select>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-xs font-medium mb-1.5 opacity-80">
                    Urgency Assessment
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                    className="w-full px-3 py-2 text-sm sm:text-xs rounded-lg border bg-transparent focus:outline-none focus:ring-1 focus:ring-amber-500 border-neutral-400/40"
                  >
                    <option value="routine" className="text-black">Routine Advisory (7–14 days)</option>
                    <option value="urgent" className="text-black">Urgent Motion (within 7 days)</option>
                    <option value="immediate" className="text-black">Critical / Overnight Stay (&lt; 48 hrs)</option>
                  </select>
                </div>
              </div>

              {/* Consultation Mode */}
              <div>
                <label className="block text-xs font-medium mb-1.5 opacity-80">
                  Preferred Consultation Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'in_person', label: 'Chambers In-Person' },
                    { id: 'video_conference', label: 'Secure Video' },
                    { id: 'phone', label: 'Telephone Conference' },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredMode: mode.id as any })}
                      className={`py-2 px-2 rounded-lg border text-center transition-colors cursor-pointer text-xs ${
                        formData.preferredMode === mode.id
                          ? 'border-amber-500 bg-amber-500/10 font-semibold'
                          : 'border-neutral-500/30 hover:bg-neutral-500/5'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brief Case Summary */}
              <div>
                <label className="block text-xs font-medium mb-1.5 opacity-80">
                  Concise Case Summary / Impugned Order Details *
                </label>
                <textarea
                  rows={3}
                  value={formData.caseSummary}
                  onChange={(e) => setFormData({ ...formData, caseSummary: e.target.value })}
                  placeholder="Outline key facts, dates of the impugned High Court / trial order, or nature of contractual deadlock..."
                  className="w-full px-3 py-2 text-sm sm:text-xs rounded-lg border bg-transparent focus:outline-none focus:ring-1 focus:ring-amber-500 border-neutral-400/40 resize-none"
                />
                {errors.caseSummary && (
                  <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.caseSummary}
                  </p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-neutral-500/20">
                <span className="text-[11px] opacity-60 flex items-center justify-center sm:justify-start gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Privileged & Confidential</span>
                </span>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-initial px-4 py-2 text-xs rounded-lg hover:bg-neutral-500/10 border border-neutral-500/30 transition-colors cursor-pointer text-center"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-initial px-5 py-2 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 transition-colors flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Verifying...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 shrink-0" />
                        <span>Dispatch Request</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
