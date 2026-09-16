import React, { useState } from 'react';
import { LOCATION_DETAILS } from '../data/cafeData';
import { MapPin, Navigation, Car, Wifi, Clock, Phone, Sparkles, Check, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(LOCATION_DETAILS.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-[#0F0F10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Visit Us in Citrus Park</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-4">
            Drive-Thru & Cafe Location
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Conveniently situated on Gunn Highway with express double-lane drive-thru service and a tranquil moody interior designed for focus and conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Info, Live Status, Amenities & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Drive-Thru Status Card */}
            <div className="p-6 rounded-2xl bg-[#141722] border border-amber-500/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="font-display font-extrabold text-xs uppercase tracking-wider text-emerald-400">
                    Drive-Thru Open Now
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">
                  Wait Time: ~3 mins
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-white text-base">
                      {LOCATION_DETAILS.address}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Citrus Park / Northwest Tampa (Across from Citrus Park Town Center area)
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2.5 mt-5">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(LOCATION_DETAILS.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-black uppercase tracking-wider transition-colors shadow"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <MapPin className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>

            {/* Hours Table */}
            <div className="p-6 rounded-2xl bg-[#141722] border border-slate-800 shadow-xl space-y-4">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                Store & Drive-Thru Hours
              </h4>

              <div className="space-y-2 text-xs divide-y divide-slate-800">
                {LOCATION_DETAILS.hours.map((item) => (
                  <div key={item.day} className="flex items-center justify-between pt-2">
                    <span className="font-semibold text-slate-300">{item.day}</span>
                    <div className="text-right">
                      <span className="text-amber-400 font-mono font-medium block">
                        {item.driveThru} (Drive-Thru)
                      </span>
                      <span className="text-slate-400 text-[10px]">
                        Lobby: {item.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Amenities Grid */}
            <div className="grid grid-cols-2 gap-3">
              {LOCATION_DETAILS.amenities.map((amenity) => (
                <div
                  key={amenity.title}
                  className="p-3.5 rounded-xl bg-[#141722] border border-slate-800 text-left"
                >
                  <span className="text-xl mb-1.5 block">{amenity.icon}</span>
                  <h5 className="font-display font-bold text-xs text-white mb-1">
                    {amenity.title}
                  </h5>
                  <p className="text-[10px] text-slate-400 leading-snug">
                    {amenity.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Cafe Exterior Photo */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Google Maps Iframe */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#141722] relative">
              <div className="p-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="text-xs text-slate-400 font-mono ml-2">
                    6118 Gunn Hwy, Tampa, FL 33625
                  </span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(LOCATION_DETAILS.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embed map */}
              <div className="h-80 sm:h-96 w-full relative">
                <iframe
                  title="Eclipse Cafe Location Map"
                  src="https://maps.google.com/maps?q=6118%20Gunn%20Hwy,%20Tampa,%20FL%2033625&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale contrast-125 invert"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                {/* Overlay floating badge */}
                <div className="absolute bottom-4 left-4 bg-[#0F0F10]/95 backdrop-blur-md border border-amber-500/40 p-3 rounded-xl shadow-2xl pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
                    <span className="font-display font-black text-xs text-white uppercase tracking-wider">
                      Eclipse Cafe • Tampa
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Express 2-Lane Drive Thru Access
                  </span>
                </div>
              </div>
            </div>

            {/* Atmosphere & Drive-Thru Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden h-44 border border-slate-800 group">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop"
                  alt="Eclipse Cafe Lounge Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <span className="font-display font-bold text-xs text-white">Moody Modern Interior</span>
                  <span className="text-[10px] text-amber-300">Quiet booths, plush velvet seats & fiber Wi-Fi</span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden h-44 border border-slate-800 group">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop"
                  alt="Espresso Barista Craft"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <span className="font-display font-bold text-xs text-white">Express Drive-Thru</span>
                  <span className="text-[10px] text-amber-300">Fast barista handcrafted drinks on the go</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
