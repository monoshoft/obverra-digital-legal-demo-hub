import React from 'react';
import { MODERN_LEGAL_DATA } from '../../../data/designBData';
import { CheckCircle } from 'lucide-react';

export const ModernJourney: React.FC = () => {
  return (
    <section id="journey" className="py-12 sm:py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="max-w-2xl space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-blue-600 font-semibold tracking-wider">
            Operational Blueprint
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Partner With Companies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A transparent four-stage advisory model designed to deliver legal certainty without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {MODERN_LEGAL_DATA.consultationJourney.map((step) => (
            <div
              key={step.step}
              className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  STAGE {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-3">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Transparent Deliverables</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
