import React from 'react';
import { HERITAGE_DATA } from '../../../data/designAData';
import { BookOpen, ArrowRight } from 'lucide-react';

export const HeritageInsights: React.FC = () => {
  return (
    <section id="insights" className="py-12 sm:py-20 lg:py-28 bg-[#F4EFE6] text-[#2B231F] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[#E0D7C7] pb-4 sm:pb-6">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <div className="text-[11px] sm:text-xs font-serif text-[#7A6E5F] uppercase tracking-wider sm:tracking-widest">
              Scholarly Jurisprudence
            </div>
            <h2 className="font-heritage text-xl sm:text-3xl lg:text-4xl text-[#1C2B22] font-bold tracking-tight">
              Appellate Research & Notes
            </h2>
          </div>
          <p className="text-xs font-serif text-[#574B3F] max-w-md">
            Periodic scholarly critiques prepared by our chambers research fellows covering landmark constitution bench decrees and statutory amendments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {HERITAGE_DATA.insights.map((insight) => (
            <article
              key={insight.id}
              className="p-5 sm:p-7 rounded-xl bg-[#FBF9F5] border border-[#DCD3C3] flex flex-col justify-between space-y-4 sm:space-y-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Metadata: unboxed clean text with separators */}
                <div className="flex items-center gap-2 text-xs font-serif text-[#7A6E5F]">
                  <span>{insight.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{insight.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{insight.readTime}</span>
                </div>

                <h3 className="font-heritage text-base sm:text-lg font-bold text-[#1C2B22] leading-snug">
                  {insight.title}
                </h3>

                <p className="text-xs font-serif text-[#574B3F] leading-relaxed line-clamp-3">
                  {insight.excerpt}
                </p>

                {insight.citation && (
                  <div className="text-[11px] font-mono text-[#7A6E5F] bg-[#F4EFE6] p-2 rounded border border-[#EAE3D5]">
                    Reported Citation: {insight.citation}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#EAE3D5]">
                <a
                  href="#contact"
                  className="text-xs font-serif text-[#1C2B22] hover:text-[#C5A880] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span>Request Full Chambers Memo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
