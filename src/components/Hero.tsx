import React from 'react';
import { Sparkles, ArrowRight, Car, Wifi, Award, Coffee, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreDrinks: () => void;
  onViewMenu: () => void;
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreDrinks,
  onViewMenu,
  onOpenOrderModal,
}) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center"
    >
      {/* Background Decor - Moody Cafe Interior & Celestial Eclipse Glows matching screenshot */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Dark interior texture overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity filter blur-[1px]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop')`
          }}
        />
        {/* Dark radial gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F10] via-[#0F0F10]/95 to-[#0F0F10]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10] via-transparent to-[#0F0F10]" />

        {/* Top-Left Glowing Eclipse Corona (matches screenshot's glowing golden eclipse crescent) */}
        <div className="absolute -top-12 -left-12 w-96 h-96 rounded-full border-[1.5px] border-amber-400/40 opacity-70 blur-[2px] animate-celestial">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 via-transparent to-transparent blur-2xl" />
        </div>
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full border border-amber-300/30 opacity-40 blur-[1px]" />

        {/* Right Celestial Ring Halo (matches screenshot) */}
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full border-[2px] border-cyan-400/20 opacity-40 blur-[3px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full border border-amber-400/20 opacity-30 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Conversion Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Category Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-xs font-black tracking-widest uppercase mb-5 animate-in fade-in duration-500 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Florida’s First Functional Mushroom Cafe</span>
            </div>

            {/* Main Headline from prompt and screenshot */}
            <h1
              id="hero-headline"
              className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 uppercase"
            >
              Specialty Coffee Is More Than A Drink,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 drop-shadow-[0_0_25px_rgba(234,179,8,0.4)]">
                It’s A Feeling.
              </span>
            </h1>

            {/* Subheadline & Location Details */}
            <div className="space-y-2 mb-8 text-slate-300">
              <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed max-w-xl">
                Crafted specialty coffee, adaptogenic brews, and artisanal bakery bites in Citrus Park, Tampa.
              </p>
              
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-slate-400 pt-1">
                <span className="text-amber-400/90 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  6118 Gunn Hwy, Citrus Park, Tampa, FL 33625
                </span>
              </div>

              {/* Status bullet pill list from screenshot */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-200">
                  <Car className="w-3.5 h-3.5 text-amber-400" />
                  DRIVE-THRU Available
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-200">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  App Rewards
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-200">
                  <Wifi className="w-3.5 h-3.5 text-amber-400" />
                  Free Wi-Fi
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-semibold text-amber-300">
                  🍄 100% Lion's Mane & Reishi Infused
                </span>
              </div>
            </div>

            {/* Primary Action Buttons matching screenshot */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-explore-btn"
                onClick={onExploreDrinks}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Functional Drinks</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                id="hero-menu-btn"
                onClick={onViewMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#161922]/90 hover:bg-[#1E293B] text-slate-200 hover:text-white border border-slate-700 hover:border-amber-400/60 font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg"
              >
                <Coffee className="w-4 h-4 text-amber-400" />
                <span>View Full Menu</span>
              </button>
            </div>

            {/* Quick Micro Social/Trust Indicator */}
            <div className="mt-8 flex items-center gap-3 text-xs text-slate-400">
              <span className="text-amber-400">★★★★★</span>
              <span>4.9 / 5.0 Rating in Tampa Bay • 1,400+ 5-Star Local Visits</span>
            </div>
          </div>

          {/* Right Column: Bento Visual Display matching the Screenshot */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient glowing backdrop behind food/drinks */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-cyan-500/10 to-amber-500/15 rounded-3xl blur-2xl -z-10" />

            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 p-2 sm:p-3 rounded-2xl bg-[#161922]/60 border border-slate-800/80 backdrop-blur-sm shadow-2xl">
              
              {/* Top Featured Drink (Full width top card) */}
              <div
                onClick={onOpenOrderModal}
                className="col-span-2 relative group rounded-xl overflow-hidden border border-amber-500/30 bg-[#0F0F10] shadow-lg cursor-pointer hover:border-amber-400 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop"
                    alt="Signature Adaptogenic Mushroom Coffee"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-black/20 to-transparent" />
                </div>

                {/* Handwritten signature label as in screenshot */}
                <div className="absolute top-3 left-4 pointer-events-none">
                  <span className="font-script text-amber-300 text-lg sm:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center gap-1.5">
                    Signature adaptogenic mushroom coffee ☕
                  </span>
                </div>

                {/* Lion's Mane Pill Badge with mushroom graphic */}
                <div className="absolute bottom-3 left-3 bg-[#0F0F10]/90 backdrop-blur-md border border-amber-400/60 rounded-full px-3 py-1 flex items-center gap-2 shadow-lg">
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center text-[10px]">
                    🍄
                  </div>
                  <span className="text-xs font-bold text-amber-300 tracking-wide">Lion's Mane</span>
                </div>

                {/* Price & Quick Add */}
                <div className="absolute bottom-3 right-3 bg-amber-500 text-black font-extrabold text-xs px-3 py-1 rounded-full shadow">
                  $6.75 • Tap to Order
                </div>
              </div>

              {/* Bottom Left Card: Warm Fresh Croissants */}
              <div
                onClick={onViewMenu}
                className="relative group rounded-xl overflow-hidden border border-slate-800 bg-[#0F0F10] shadow-md cursor-pointer hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="relative h-32 sm:h-36 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop"
                    alt="Artisanal French Croissants"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white truncate">Bakery Bites</span>
                  <span className="text-[10px] text-amber-400 font-semibold">Fresh Daily</span>
                </div>
              </div>

              {/* Bottom Right Card: Hot Pressed Panini */}
              <div
                onClick={onViewMenu}
                className="relative group rounded-xl overflow-hidden border border-slate-800 bg-[#0F0F10] shadow-md cursor-pointer hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="relative h-32 sm:h-36 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop"
                    alt="Tuscan Prosciutto & Burrata Panini"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white truncate">Artisan Panini</span>
                  <span className="text-[10px] text-amber-400 font-semibold">Hot Pressed</span>
                </div>
              </div>

            </div>

            {/* Glowing circular rim lights flanking the bento grid */}
            <div className="hidden sm:block absolute -right-6 -bottom-6 w-24 h-24 rounded-full border-2 border-cyan-400/40 opacity-70 blur-[1px] pointer-events-none" />
            <div className="hidden sm:block absolute -left-4 -top-4 w-16 h-16 rounded-full border-2 border-amber-400/40 opacity-60 blur-[1px] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
