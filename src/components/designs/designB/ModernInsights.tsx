import React from 'react';
import { MODERN_LEGAL_DATA } from '../../../data/designBData';
import { ArrowRight, BookOpen } from 'lucide-react';

export const ModernInsights: React.FC = () => {
  return (
    <section id="insights" className="py-12 sm:py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-slate-200 pb-4 sm:pb-6">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-blue-600 font-semibold tracking-wider">
              Legal Intelligence
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Corporate & Regulatory Briefings
            </h2>
          </div>
          <p className="text-xs text-slate-600 max-w-md">
            Direct executive guidance on evolving Indian technology regulations, Reserve Bank directives, and venture deal structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {MODERN_LEGAL_DATA.insights.map((item) => (
            <article
              key={item.id}
              className="bg-slate-50 p-5 sm:p-7 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 sm:space-y-5 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Clean unboxed metadata with bullet separators */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span>{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1.5"
                >
                  <span>Read Complete Regulatory Analysis</span>
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
