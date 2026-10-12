import React from 'react';
import { HERITAGE_DATA } from '../../../data/designAData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HeritageProcess: React.FC = () => {
  return (
    <section id="process" className="py-12 sm:py-20 lg:py-28 bg-[#FBF9F5] text-[#2B231F] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="max-w-2xl space-y-2.5 sm:space-y-3">
          <div className="text-[11px] sm:text-xs font-serif text-[#7A6E5F] uppercase tracking-wider sm:tracking-widest border-b border-[#C5A880]/50 inline-block pb-1">
            Chambers Protocol & Case Lifecycle
          </div>
          <h2 className="font-heritage text-xl sm:text-3xl lg:text-4xl text-[#1C2B22] font-bold tracking-tight">
            How Chambers Engagement Works
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#574B3F]">
            Every appellate brief undergoes rigorous chamber scrutiny to protect client interests and judicial economy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HERITAGE_DATA.consultationSteps.map((step) => (
            <div
              key={step.step}
              className="p-5 sm:p-6 rounded-xl bg-[#F4EFE6] border border-[#E0D7C7] space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="font-editorial text-2xl font-bold text-[#C5A880]">
                  {step.step}
                </span>
                <h3 className="font-heritage text-base font-bold text-[#1C2B22] mt-2">
                  {step.title}
                </h3>
                <p className="text-xs font-serif text-[#574B3F] mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAE3D5] flex items-center gap-1.5 text-[11px] font-serif text-[#1C2B22]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1C2B22]" />
                <span>Verified Chamber Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
