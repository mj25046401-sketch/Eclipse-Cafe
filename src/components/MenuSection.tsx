import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem } from '../types';
import { Sparkles, Plus, Search, Filter, Coffee, Croissant, UtensilsCrossed, Flame } from 'lucide-react';

interface MenuSectionProps {
  selectedCategory: string;
  onSelectCategory: (cat: 'all' | 'functional' | 'traditional' | 'bakery' | 'paninis') => void;
  onAddToCart: (item: MenuItem) => void;
  onCustomizeItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onCustomizeItem,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [adaptogenFilter, setAdaptogenFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Offerings', icon: Flame },
    { id: 'functional', label: 'Functional & Mushroom Coffee', icon: Sparkles },
    { id: 'traditional', label: 'Traditional Espresso & Matcha', icon: Coffee },
    { id: 'bakery', label: 'Fresh Bakery & Desserts', icon: Croissant },
    { id: 'paninis', label: 'Paninis & Breakfast', icon: UtensilsCrossed },
  ];

  // Filtering logic
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.adaptogens && item.adaptogens.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())));
    const matchesAdaptogen =
      adaptogenFilter === 'all' ||
      (item.adaptogens && item.adaptogens.includes(adaptogenFilter));
    return matchesCategory && matchesSearch && matchesAdaptogen;
  });

  return (
    <section id="menu" className="py-20 bg-[#0B0C0E] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Artisan & Adaptogenic Bites</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
              Featured Menu & Pantry
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Ethically sourced beans, organic adaptogenic infusions, and slow-fermented bakery prepared daily in Tampa.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="menu-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee, pastry, adaptogens..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#151722] border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`menu-category-tab-${cat.id}`}
                onClick={() => {
                  onSelectCategory(cat.id as any);
                  setAdaptogenFilter('all');
                }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isSelected
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/25'
                    : 'bg-[#141722] text-slate-300 hover:text-white hover:bg-[#1B2030] border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-amber-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Optional Sub-filter for Adaptogens if functional or all */}
        {(selectedCategory === 'all' || selectedCategory === 'functional') && (
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 text-xs text-slate-400">
            <span className="flex items-center gap-1 font-bold text-slate-300 uppercase text-[10px] tracking-wider shrink-0">
              <Filter className="w-3 h-3 text-amber-400" />
              Filter by Mushroom:
            </span>
            {['all', "Lion's Mane", 'Reishi', 'Cordyceps', 'Chaga', 'Tremella'].map((tag) => (
              <button
                key={tag}
                onClick={() => setAdaptogenFilter(tag)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors shrink-0 ${
                  adaptogenFilter === tag
                    ? 'bg-amber-500/20 border border-amber-400 text-amber-300'
                    : 'bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                {tag === 'all' ? 'All Mushrooms' : `🍄 ${tag}`}
              </button>
            ))}
          </div>
        )}

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#131620] rounded-2xl border border-slate-800 p-8">
            <Coffee className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-base text-slate-300 font-bold">No menu items found</p>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setAdaptogenFilter('all');
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-amber-400 text-black text-xs font-bold rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-card-${item.id}`}
                className="group relative rounded-2xl bg-[#131620] border border-slate-800/90 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image & Badges */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131620] via-black/20 to-transparent" />

                  {/* Popular badge */}
                  {item.popular && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                      ★ Tampa Favorite
                    </div>
                  )}

                  {/* Calories or Category */}
                  {item.calories && (
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded-full border border-slate-700">
                      {item.calories} kcal
                    </div>
                  )}

                  {/* Adaptogen Tag Chips */}
                  {item.adaptogens && item.adaptogens.length > 0 && (
                    <div className="absolute bottom-2 left-3 flex flex-wrap gap-1.5">
                      {item.adaptogens.map((adp) => (
                        <span
                          key={adp}
                          className="bg-amber-500/20 backdrop-blur-md border border-amber-400/50 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full"
                        >
                          🍄 {adp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-display font-black text-amber-400 text-base shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-3">
                      {item.description}
                    </p>

                    {/* Dietary Tags */}
                    {item.dietary && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.dietary.map((d) => (
                          <span
                            key={d}
                            className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions: Customize or Quick Add */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                    <button
                      onClick={() => onCustomizeItem(item)}
                      className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                    >
                      Customize
                    </button>
                    <button
                      onClick={() => onAddToCart(item)}
                      id={`add-btn-${item.id}`}
                      className="py-2 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
