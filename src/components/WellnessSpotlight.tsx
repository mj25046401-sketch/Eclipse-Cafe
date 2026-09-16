import React, { useState } from 'react';
import { ADAPTOGENS } from '../data/cafeData';
import { Sparkles, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

interface WellnessSpotlightProps {
  onFilterByMushroom: (mushroom: string) => void;
}

export const WellnessSpotlight: React.FC<WellnessSpotlightProps> = ({
  onFilterByMushroom,
}) => {
  const [activeTab, setActiveTab] = useState(ADAPTOGENS[0].id);

  const selectedAdaptogen = ADAPTOGENS.find((a) => a.id === activeTab) || ADAPTOGENS[0];

  return (
    <section id="wellness" className="py-20 bg-[#0F0F10] relative overflow-hidden">
      {/* Subtle celestial background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Science of Functional Coffee</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-4">
            Nature’s Highest Adaptogens,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              Zero Mushroom Taste.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We extract pure, 100% organic fruiting bodies to infuse your daily specialty roast with certified nootropics. Smooth, full-bodied coffee notes with all the cognitive and cellular benefits.
          </p>
        </div>

        {/* Adaptogen Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10">
          {ADAPTOGENS.map((adaptogen) => {
            const isActive = activeTab === adaptogen.id;
            return (
              <button
                key={adaptogen.id}
                id={`adaptogen-tab-${adaptogen.id}`}
                onClick={() => setActiveTab(adaptogen.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/30 scale-105'
                    : 'bg-[#181B26] text-slate-300 hover:text-white hover:bg-[#202534] border border-slate-800'
                }`}
              >
                <span className="text-base">{adaptogen.icon}</span>
                <span>{adaptogen.name}</span>
                <span className="hidden md:inline-block text-[11px] opacity-75 font-normal">
                  ({adaptogen.commonName.split('&')[0].trim()})
                </span>
              </button>
            );
          })}
        </div>

        {/* Spotlight Card */}
        <div className="relative rounded-2xl bg-[#141722] border border-slate-800 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Detail Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-3 rounded-2xl bg-[#1C2130] border border-slate-700/60 shadow-inner">
                  {selectedAdaptogen.icon}
                </span>
                <div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {selectedAdaptogen.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono italic">
                    {selectedAdaptogen.scientificName} • {selectedAdaptogen.commonName}
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed">
                {selectedAdaptogen.benefit}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {selectedAdaptogen.description}
              </p>

              {/* Key Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#0F1118] border border-slate-800/80">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Standard Potency Per Cup
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-amber-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    {selectedAdaptogen.dosage}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0F1118] border border-slate-800/80">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Ideal Daily Timing
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {selectedAdaptogen.bestFor}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  onClick={() => onFilterByMushroom(selectedAdaptogen.name)}
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 px-6 py-3 rounded-full transition-all shadow-md shadow-amber-500/20"
                >
                  <span>Browse {selectedAdaptogen.name} Drinks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Standard Guarantee Column */}
            <div className="lg:col-span-5 bg-[#0D0F16] rounded-xl p-6 border border-slate-800/80 space-y-4">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                The Eclipse Standard
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Fruiting Bodies:</strong> No mycelium cultivated on oats or grain starch.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Dual-Hot Water & Alcohol Extraction:</strong> Unlocks both water-soluble beta-glucans and alcohol-soluble triterpenes.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Third-Party Lab Verified:</strong> Screened for heavy metals, pesticides, and active bio-compounds.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>No Mushroom Flavor:</strong> Seamlessly dissolves into espresso microfoam and cold brew.
                  </span>
                </li>
              </ul>

              <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 text-[11px] text-amber-300/90 leading-relaxed">
                💡 <em>First time trying adaptogenic coffee?</em> Our baristas recommend starting with the <strong>Signature Eclipse Latte</strong> for a balanced blend of Lion's Mane and Reishi.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
