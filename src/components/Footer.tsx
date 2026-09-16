import React from 'react';
import { Instagram, MapPin, Phone, Mail, Clock, Sparkles, Download, ArrowUpRight, Code } from 'lucide-react';
import { LOCATION_DETAILS } from '../data/cafeData';

interface FooterProps {
  onOpenExportModal: () => void;
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenExportModal,
  onOpenOrderModal,
}) => {
  return (
    <footer className="bg-[#0A0A0B] border-t border-slate-800 text-slate-400 text-xs relative">
      {/* App Rewards Teaser Banner */}
      <div className="bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent border-b border-amber-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-black flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/30">
              ☕
            </div>
            <div>
              <h4 className="font-display font-extrabold text-base sm:text-lg text-white">
                Join the Eclipse Club & Earn Free Sips
              </h4>
              <p className="text-xs text-slate-300">
                Get your 1st functional brew free + skip the drive-thru line with mobile express pass.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenOrderModal}
              className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Order Online Now
            </button>
            <button
              onClick={onOpenExportModal}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <Code className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Standalone HTML</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#161922] border border-amber-500/40 flex items-center justify-center">
                <span className="text-amber-400 font-bold text-sm">🌒</span>
              </div>
              <span className="font-display font-black text-lg text-white tracking-[0.2em]">
                ECLIPSE <span className="text-amber-400 font-light">CAFE</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Florida’s first functional mushroom coffee house and artisan bakery. Certified organic adaptogenic infusions paired with craft roasted espresso in Citrus Park, Tampa.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/eclipsecafe.intl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              >
                <Instagram className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-xs">@eclipsecafe.intl</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Navigation
            </h5>
            <ul className="space-y-2">
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Menu & Bakery</a></li>
              <li><a href="#functional-coffee" className="hover:text-amber-400 transition-colors">Functional Brews</a></li>
              <li><a href="#wellness" className="hover:text-amber-400 transition-colors">Adaptogen Science</a></li>
              <li><a href="#story" className="hover:text-amber-400 transition-colors">Our Story</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">Drive-Thru & Map</a></li>
            </ul>
          </div>

          {/* Adaptogens */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Functional Infusions
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><span className="text-amber-300 font-medium">Lion’s Mane</span> — Cognitive Focus & NGF</li>
              <li><span className="text-purple-300 font-medium">Reishi</span> — Nervous System & Calm</li>
              <li><span className="text-orange-300 font-medium">Cordyceps</span> — Natural ATP Energy</li>
              <li><span className="text-emerald-300 font-medium">Chaga</span> — Antioxidant Defense</li>
              <li><span className="text-cyan-300 font-medium">Tremella</span> — Cellular Hydration</li>
            </ul>
          </div>

          {/* Location & Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Tampa Location
            </h5>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{LOCATION_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:8134442390" className="hover:text-white">{LOCATION_DETAILS.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Drive-Thru: 6:00 AM – 7:30 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Eclipse Cafe International LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenExportModal}
              className="text-amber-400/90 hover:text-amber-300 flex items-center gap-1 font-semibold"
            >
              <Download className="w-3 h-3" />
              <span>Standalone HTML Source</span>
            </button>
            <span>•</span>
            <span>6118 Gunn Hwy, Tampa, FL 33625</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
