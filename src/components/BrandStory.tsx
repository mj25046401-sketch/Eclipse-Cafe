import React from 'react';
import { Sparkles, Heart, Coffee, ShieldAlert } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-[#0B0C0E] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Atmospheric Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop"
                alt="Roasting and crafting specialty adaptogenic coffee"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent" />
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#161922] border border-amber-500/40 p-5 rounded-2xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="font-display font-extrabold text-xs uppercase tracking-wider text-amber-300">
                  Tampa Born & Brewed
                </span>
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Coffee should sustain you, not deplete you. That was the vision when opening in Citrus Park."
              </p>
            </div>
          </div>

          {/* Right: Story Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest">
              <Coffee className="w-3.5 h-3.5" />
              <span>Our Roots</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase leading-tight">
              Why We Pioneered Florida’s First{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                Functional Cafe
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Like many coffee lovers, we adored the morning ritual of a rich, velvety espresso. But the afternoon jitters, energy crashes, and caffeine anxiety were taking a toll on our focus and well-being.
              </p>

              <p>
                We spent months consulting herbalists, organic mushroom cultivators, and champion roasters to discover a breakthrough harmony: combining <strong>specialty grade single-origin beans</strong> with concentrated <strong>dual-extracted adaptogenic mushrooms</strong> (Lion's Mane, Reishi, Cordyceps, and Chaga).
              </p>

              <p>
                The result is a silky, rich brew where the earthy adaptogens accentuate the caramel, dark chocolate, and floral notes of the roast—delivering calm, sustained mental clarity with <em>zero mushroom flavor</em>.
              </p>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#141722] border border-slate-800">
                <span className="font-display font-bold text-sm text-white block mb-1">
                  100% Ethical Sourcing
                </span>
                <span className="text-xs text-slate-400">
                  Fair-trade micro-lot farmers and organic Florida certified kitchens.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#141722] border border-slate-800">
                <span className="font-display font-bold text-sm text-white block mb-1">
                  Artisanal Fresh Bakery
                </span>
                <span className="text-xs text-slate-400">
                  Laminated European butter pastries baked fresh in-house every morning at 5 AM.
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
