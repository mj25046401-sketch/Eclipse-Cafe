import React from 'react';
import { Target, Sparkles, Zap, Instagram, Plus } from 'lucide-react';
import { MenuItem } from '../types';

interface FeaturedFunctionalsBarProps {
  onSelectItem: (item: MenuItem) => void;
  onViewCategory: (category: 'functional' | 'bakery' | 'traditional' | 'paninis') => void;
}

export const FeaturedFunctionalsBar: React.FC<FeaturedFunctionalsBarProps> = ({
  onSelectItem,
  onViewCategory,
}) => {
  const quickItems = [
    {
      id: 'quick-focus',
      title: 'FOCUS BLEND',
      mushroom: "Lion's Mane",
      desc: 'Infused cold or hot brew fostering laser clarity, clean finish, and vanilla undertones.',
      price: '$3.90',
      numPrice: 3.90,
      icon: Target,
      iconColor: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      bgGlow: 'hover:border-amber-400',
      category: 'functional' as const
    },
    {
      id: 'quick-calm',
      title: 'CALM & REISHI',
      mushroom: "Reishi Extract",
      desc: 'Specialty adaptogen cacao latte promoting deep calm, nervous system balance and soothing restoration.',
      price: '$7.90',
      numPrice: 7.90,
      icon: Sparkles,
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      bgGlow: 'hover:border-purple-400',
      category: 'functional' as const
    },
    {
      id: 'quick-energy',
      title: 'ENERGY & CORDYCEPS',
      mushroom: "Cordyceps Militaris",
      desc: 'Natural cellular ATP and stamina booster for clean sustained vitality without the crash.',
      price: '$5.00',
      numPrice: 5.00,
      icon: Zap,
      iconColor: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      bgGlow: 'hover:border-orange-400',
      category: 'functional' as const
    },
  ];

  return (
    <section
      id="functional-coffee"
      className="relative z-20 py-8 bg-[#0B0B0C] border-y border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Instagram Tag on Right (as in screenshot) */}
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide">
              Featured Functionals
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold hidden sm:inline-block">
              Daily Brews
            </span>
          </div>

          <a
            href="https://instagram.com/eclipsecafe.intl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-800 hover:border-slate-700"
          >
            <Instagram className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono">@eclipsecafe.intl</span>
          </a>
        </div>

        {/* 5-Column Grid: 3 Functional cards + Bakery preview + Daily Combos preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          
          {/* 3 Functional Cards */}
          {quickItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() =>
                  onSelectItem({
                    id: item.id,
                    name: item.title,
                    category: 'functional',
                    price: item.numPrice,
                    description: item.desc,
                    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop',
                    adaptogens: [item.mushroom],
                    dietary: ['Functional Brew'],
                  })
                }
                className={`group relative p-4 rounded-xl bg-[#14161D] border ${item.borderColor} ${item.bgGlow} transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-lg hover:-translate-y-0.5`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-1.5 rounded-lg bg-slate-900 ${item.iconColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-display font-extrabold text-xs text-white tracking-wider">
                      {item.title}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3 mb-3">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span className="font-display font-extrabold text-sm text-amber-400">
                    {item.price}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-300 group-hover:text-amber-400">
                    <Plus className="w-3 h-3" />
                    Add
                  </span>
                </div>
              </div>
            );
          })}

          {/* Bakery Bites Preview Card */}
          <div
            onClick={() => onViewCategory('bakery')}
            className="group relative p-4 rounded-xl bg-[#14161D] border border-slate-800 hover:border-amber-400/60 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-lg overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-extrabold text-xs text-white tracking-wider">
                  Bakery Bites
                </span>
                <span className="text-[10px] text-amber-400 font-semibold">From $4.50</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-2">
                European butter croissants & morning buns baked fresh daily.
              </p>
            </div>

            <div className="relative h-16 w-full rounded-lg overflow-hidden mt-1">
              <img
                src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=400&auto=format&fit=crop"
                alt="Bakery preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-1.5">
                <span className="text-[10px] text-white font-medium">Browse Bakery →</span>
              </div>
            </div>
          </div>

          {/* Daily Combos Preview Card */}
          <div
            onClick={() => onViewCategory('traditional')}
            className="group relative p-4 rounded-xl bg-gradient-to-br from-[#161A24] to-[#12141A] border border-amber-500/20 hover:border-amber-400/60 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-extrabold text-xs text-amber-300 tracking-wider">
                  DAILY COMBOS
                </span>
                <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">
                  Save 15%
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mb-2">
                Functional Brew + Fresh Croissant or Artisan Panini combo.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=150&auto=format&fit=crop"
                  alt="Drink"
                />
                <img
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=150&auto=format&fit=crop"
                  alt="Pastry"
                />
              </div>
              <span className="text-[11px] font-bold text-amber-400 group-hover:underline">
                View Pairings →
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
