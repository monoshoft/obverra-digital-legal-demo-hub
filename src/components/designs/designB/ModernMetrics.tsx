import React from 'react';
import { MODERN_LEGAL_DATA } from '../../../data/designBData';
import { BarChart3, TrendingUp, Globe, Users } from 'lucide-react';

export const ModernMetrics: React.FC = () => {
  return (
    <section id="metrics" className="py-10 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {MODERN_LEGAL_DATA.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 sm:space-y-2 hover:border-blue-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {metric.label}
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Illustrative Benchmark Metric
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
