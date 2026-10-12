import React from 'react';
import { BAR_COUNCIL_DISCLAIMER } from '../../data/sharedLegalData';
import { Shield, Check, X, FileText } from 'lucide-react';

interface BarCouncilDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BarCouncilDisclaimerModal: React.FC<BarCouncilDisclaimerModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bci-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl p-4 sm:p-6 text-neutral-100 space-y-4 sm:space-y-5 my-auto max-h-[92vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h2 id="bci-modal-title" className="text-sm sm:text-base font-semibold text-white leading-tight">
                {BAR_COUNCIL_DISCLAIMER.title}
              </h2>
              <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5 truncate">
                {BAR_COUNCIL_DISCLAIMER.rulesReference}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
            aria-label="Close disclaimer modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 text-xs text-neutral-300 leading-relaxed bg-neutral-950/60 p-3.5 sm:p-4 rounded-xl border border-neutral-800">
          <p>{BAR_COUNCIL_DISCLAIMER.statement}</p>
          <div className="h-px bg-neutral-800 my-2" />
          <p className="text-neutral-400">
            {BAR_COUNCIL_DISCLAIMER.acceptanceNote}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <span className="text-[11px] text-neutral-400 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>BCI Compliant Architecture</span>
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            <span>I Acknowledge & Proceed</span>
          </button>
        </div>
      </div>
    </div>
  );
};
