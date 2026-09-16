export function getStandaloneHtmlCode(): string {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eclipse Cafe | Florida's First Functional Mushroom Cafe & Bakery</title>
  <meta name="description" content="Specialty coffee, adaptogenic brews, and artisanal bakery bites in Citrus Park, Tampa. 6118 Gunn Hwy.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            midnight: '#0F0F10',
            eclipseGold: '#EAB308',
            darkSlate: '#1E293B',
            offWhite: '#F8FAFC',
          },
          fontFamily: {
            display: ['Montserrat', 'Syne', 'sans-serif'],
            script: ['Caveat', 'cursive'],
            body: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;600;700;800;900&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Inter', sans-serif; background-color: #0F0F10; color: #F8FAFC; }
    h1, h2, h3, .font-display { font-family: 'Montserrat', sans-serif; }
    .font-script { font-family: 'Caveat', cursive; }
    @keyframes celestial-pulse {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.04); }
    }
    .animate-celestial { animation: celestial-pulse 6s ease-in-out infinite; }
  </style>
</head>
<body class="bg-[#0F0F10] text-[#F8FAFC] antialiased selection:bg-amber-500 selection:text-black">

  <!-- HEADER / NAVBAR -->
  <header id="main-header" class="fixed top-0 left-0 right-0 z-50 bg-[#0F0F10]/90 backdrop-blur-md border-b border-amber-500/20 py-4 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#161922] border border-amber-500/50 shadow-inner group-hover:border-amber-400">
          <span class="text-amber-400 font-bold text-lg">🌒</span>
        </div>
        <div>
          <span class="font-display font-black text-xl tracking-[0.2em] text-white">ECLIPSE <span class="text-amber-400 font-light text-sm">CAFE</span></span>
          <span class="text-[9px] uppercase tracking-[0.2em] text-amber-400/90 block font-semibold">Citrus Park, Tampa</span>
        </div>
      </a>

      <!-- Navigation links -->
      <nav class="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-300">
        <a href="#menu" class="hover:text-amber-400 transition-colors">Menu</a>
        <a href="#functional-coffee" class="hover:text-amber-400 transition-colors">Functional Coffee</a>
        <a href="#wellness" class="hover:text-amber-400 transition-colors">Wellness Benefits</a>
        <a href="#story" class="hover:text-amber-400 transition-colors">Story</a>
        <a href="#location" class="hover:text-amber-400 transition-colors">Drive-Thru & Map</a>
      </nav>

      <!-- CTA -->
      <button onclick="openOrderModal()" class="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full shadow-lg shadow-amber-500/20 active:scale-95 transition-all">
        Order Online
      </button>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden">
    <!-- Ambient Celestial Accents -->
    <div class="absolute -top-10 -left-10 w-96 h-96 rounded-full border border-amber-500/30 blur-[2px] animate-celestial pointer-events-none"></div>
    <div class="absolute top-1/3 -right-20 w-96 h-96 rounded-full border border-cyan-400/20 blur-[2px] pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Content -->
        <div class="lg:col-span-7">
          <div class="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase mb-5">
            Florida’s First Functional Mushroom Cafe
          </div>

          <h1 class="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase mb-6">
            Specialty Coffee Is More Than A Drink, <span class="text-amber-400">It’s A Feeling.</span>
          </h1>

          <div class="space-y-3 mb-8 text-slate-300">
            <p class="text-base sm:text-lg font-medium text-slate-200 leading-relaxed">
              Crafted specialty coffee, adaptogenic brews, and artisanal bakery bites in Citrus Park, Tampa.
            </p>
            <p class="text-xs sm:text-sm font-semibold text-amber-400/90">
              📍 6118 Gunn Hwy, Citrus Park, Tampa, FL 33625
            </p>
            <div class="flex flex-wrap gap-2 pt-1 text-xs">
              <span class="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200">🚗 DRIVE-THRU Available</span>
              <span class="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200">⚡ Free Wi-Fi</span>
              <span class="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold">🍄 Lion's Mane & Reishi Infused</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-4">
            <a href="#functional-coffee" class="px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all">
              Explore Functional Drinks →
            </a>
            <a href="#menu" class="px-7 py-3.5 rounded-full bg-[#161922] hover:bg-slate-800 text-white border border-slate-700 font-bold text-xs uppercase tracking-wider transition-all">
              View Full Menu
            </a>
          </div>
        </div>

        <!-- Right Bento Showcase -->
        <div class="lg:col-span-5 relative">
          <div class="grid grid-cols-2 gap-3.5 p-3 rounded-2xl bg-[#161922]/80 border border-slate-800 shadow-2xl">
            <!-- Top Drink -->
            <div class="col-span-2 relative rounded-xl overflow-hidden border border-amber-500/30 group">
              <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop" class="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Adaptogenic Coffee">
              <div class="absolute top-3 left-4">
                <span class="font-script text-amber-300 text-xl drop-shadow">Signature adaptogenic mushroom coffee ☕</span>
              </div>
              <div class="absolute bottom-3 left-3 bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-amber-400/60 text-xs font-bold text-amber-300">
                🍄 Lion's Mane
              </div>
              <div class="absolute bottom-3 right-3 bg-amber-400 text-black font-extrabold text-xs px-3 py-1 rounded-full">
                $6.75
              </div>
            </div>

            <!-- Croissants -->
            <div class="relative rounded-xl overflow-hidden border border-slate-800 h-32">
              <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover" alt="Croissant">
              <span class="absolute bottom-2 left-2 text-[11px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">Bakery Bites</span>
            </div>

            <!-- Panini -->
            <div class="relative rounded-xl overflow-hidden border border-slate-800 h-32">
              <img src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover" alt="Panini">
              <span class="absolute bottom-2 left-2 text-[11px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">Artisan Panini</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- FEATURED FUNCTIONALS ROW -->
  <section id="functional-coffee" class="py-10 bg-[#0B0B0C] border-y border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="font-display font-bold text-xl text-white">Featured Functionals</h2>
        <span class="text-xs text-amber-400 font-mono">@eclipsecafe.intl</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-xs">
        <div class="p-4 rounded-xl bg-[#14161D] border border-amber-500/30 cursor-pointer hover:border-amber-400 transition" onclick="openOrderModal('Focus Blend')">
          <div class="font-display font-bold text-white mb-1">🎯 FOCUS BLEND</div>
          <p class="text-slate-400 text-[11px] mb-3">Lion's mane extract fostering laser clarity, clean finish and vanilla undertones.</p>
          <div class="font-bold text-amber-400 text-sm">$3.90</div>
        </div>

        <div class="p-4 rounded-xl bg-[#14161D] border border-purple-500/30 cursor-pointer hover:border-purple-400 transition" onclick="openOrderModal('Calm & Reishi')">
          <div class="font-display font-bold text-white mb-1">✨ CALM & REISHI</div>
          <p class="text-slate-400 text-[11px] mb-3">Specialty dark cacao blend fostering restorative calm, soothing cortisol response.</p>
          <div class="font-bold text-purple-400 text-sm">$7.90</div>
        </div>

        <div class="p-4 rounded-xl bg-[#14161D] border border-orange-500/30 cursor-pointer hover:border-orange-400 transition" onclick="openOrderModal('Energy & Cordyceps')">
          <div class="font-display font-bold text-white mb-1">⚡ ENERGY & CORDYCEPS</div>
          <p class="text-slate-400 text-[11px] mb-3">Pure cellular ATP and oxygen uptake boost for all-day stamina without crashes.</p>
          <div class="font-bold text-orange-400 text-sm">$5.00</div>
        </div>

        <div class="p-4 rounded-xl bg-[#14161D] border border-slate-800">
          <div class="font-display font-bold text-white mb-1">🥐 BAKERY BITES</div>
          <p class="text-slate-400 text-[11px] mb-2">European butter croissants fresh out of the oven every morning.</p>
          <a href="#menu" class="text-amber-400 font-bold text-[11px]">Browse Bakery →</a>
        </div>

        <div class="p-4 rounded-xl bg-[#14161D] border border-slate-800">
          <div class="font-display font-bold text-amber-300 mb-1">🎁 DAILY COMBOS</div>
          <p class="text-slate-400 text-[11px] mb-2">Functional Brew + Bakery pairing combo (Save 15%).</p>
          <a href="#menu" class="text-amber-400 font-bold text-[11px]">View Combos →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- WELLNESS SPOTLIGHT -->
  <section id="wellness" class="py-20 bg-[#0F0F10]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 uppercase">
        Functional Wellness Spotlight
      </h2>
      <p class="text-slate-300 text-sm max-w-2xl mx-auto mb-12">
        Dual-extracted from 100% organic fruiting bodies. Never grown on grain filler. Seamlessly blended into specialty roast coffee with zero mushroom flavor.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div class="p-6 rounded-2xl bg-[#141722] border border-amber-500/40">
          <span class="text-3xl mb-3 block">🧠</span>
          <h3 class="font-display font-extrabold text-xl text-white mb-1">Lion’s Mane</h3>
          <p class="text-amber-400 font-mono text-xs mb-3">Focus, Memory & Neurogenesis</p>
          <p class="text-slate-400 text-xs leading-relaxed mb-4">
            Stimulates Nerve Growth Factor (NGF) synthesis for cognitive clarity, memory recall, and laser focus.
          </p>
          <span class="text-[11px] text-slate-300 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">1,200mg Dual Extract</span>
        </div>

        <div class="p-6 rounded-2xl bg-[#141722] border border-purple-500/40">
          <span class="text-3xl mb-3 block">✨</span>
          <h3 class="font-display font-extrabold text-xl text-white mb-1">Reishi</h3>
          <p class="text-purple-400 font-mono text-xs mb-3">Calm, Balance & Stress Modulation</p>
          <p class="text-slate-400 text-xs leading-relaxed mb-4">
            The "Queen of Mushrooms" downregulates cortisol, soothes the nervous system, and promotes peaceful focus.
          </p>
          <span class="text-[11px] text-slate-300 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">1,000mg Organic Dual Extract</span>
        </div>

        <div class="p-6 rounded-2xl bg-[#141722] border border-orange-500/40">
          <span class="text-3xl mb-3 block">⚡</span>
          <h3 class="font-display font-extrabold text-xl text-white mb-1">Cordyceps</h3>
          <p class="text-orange-400 font-mono text-xs mb-3">Natural Cellular ATP & Vitality</p>
          <p class="text-slate-400 text-xs leading-relaxed mb-4">
            Enhances cellular oxygen uptake and adenosine triphosphate (ATP) for jitter-free, sustained stamina.
          </p>
          <span class="text-[11px] text-slate-300 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">1,000mg Pure Cordycepin</span>
        </div>
      </div>
    </div>
  </section>

  <!-- MENU SECTION WITH TAB FILTERING -->
  <section id="menu" class="py-20 bg-[#0B0C0E] border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase mb-2">Featured Menu & Bakery</h2>
        <p class="text-slate-400 text-sm">Select a category below to browse items.</p>
      </div>

      <!-- Tabs -->
      <div class="flex justify-center gap-3 mb-10 flex-wrap text-xs font-bold uppercase">
        <button onclick="filterCategory('all')" id="tab-all" class="tab-btn px-5 py-2.5 rounded-full bg-amber-400 text-black">All Items</button>
        <button onclick="filterCategory('functional')" id="tab-functional" class="tab-btn px-5 py-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white">Functional & Mushroom</button>
        <button onclick="filterCategory('traditional')" id="tab-traditional" class="tab-btn px-5 py-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white">Traditional Espresso</button>
        <button onclick="filterCategory('bakery')" id="tab-bakery" class="tab-btn px-5 py-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white">Bakery & Desserts</button>
        <button onclick="filterCategory('paninis')" id="tab-paninis" class="tab-btn px-5 py-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white">Paninis & Breakfast</button>
      </div>

      <!-- Menu Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="menu-grid">
        <!-- Item 1 -->
        <div class="menu-card functional rounded-2xl bg-[#131620] border border-slate-800 p-5 flex flex-col justify-between">
          <div>
            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop" class="w-full h-48 rounded-xl object-cover mb-4" alt="Eclipse Latte">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-display font-bold text-white text-base">Signature Eclipse Adaptogenic Latte</h3>
              <span class="text-amber-400 font-bold">$6.75</span>
            </div>
            <p class="text-slate-400 text-xs leading-relaxed mb-3">Double espresso, 1,200mg Lion's Mane & Reishi, velvety oat milk and vanilla bean.</p>
            <span class="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">🍄 Lion's Mane & Reishi</span>
          </div>
          <button onclick="openOrderModal('Signature Eclipse Adaptogenic Latte')" class="w-full mt-4 py-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-xl">Order Online</button>
        </div>

        <!-- Item 2 -->
        <div class="menu-card functional rounded-2xl bg-[#131620] border border-slate-800 p-5 flex flex-col justify-between">
          <div>
            <img src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop" class="w-full h-48 rounded-xl object-cover mb-4" alt="Cordyceps Cold Brew">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-display font-bold text-white text-base">Cordyceps Nitro Cold Brew</h3>
              <span class="text-amber-400 font-bold">$6.50</span>
            </div>
            <p class="text-slate-400 text-xs leading-relaxed mb-3">Single-origin cold brew charged with nitrogen and 1,000mg active Cordyceps.</p>
            <span class="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">⚡ Cordyceps ATP</span>
          </div>
          <button onclick="openOrderModal('Cordyceps Nitro Cold Brew')" class="w-full mt-4 py-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-xl">Order Online</button>
        </div>

        <!-- Item 3 -->
        <div class="menu-card traditional rounded-2xl bg-[#131620] border border-slate-800 p-5 flex flex-col justify-between">
          <div>
            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop" class="w-full h-48 rounded-xl object-cover mb-4" alt="Cortado">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-display font-bold text-white text-base">Citrus Park Artisan Cortado</h3>
              <span class="text-amber-400 font-bold">$4.50</span>
            </div>
            <p class="text-slate-400 text-xs leading-relaxed mb-3">Equal parts double origin espresso and silky textured milk in a Gibraltar glass.</p>
          </div>
          <button onclick="openOrderModal('Citrus Park Artisan Cortado')" class="w-full mt-4 py-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-xl">Order Online</button>
        </div>

        <!-- Item 4 -->
        <div class="menu-card bakery rounded-2xl bg-[#131620] border border-slate-800 p-5 flex flex-col justify-between">
          <div>
            <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop" class="w-full h-48 rounded-xl object-cover mb-4" alt="Croissant">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-display font-bold text-white text-base">Parisian Butter Croissant</h3>
              <span class="text-amber-400 font-bold">$4.50</span>
            </div>
            <p class="text-slate-400 text-xs leading-relaxed mb-3">72 layers of Normandy cultured butter. Golden crispy shell with cloud-soft crumb.</p>
          </div>
          <button onclick="openOrderModal('Parisian Butter Croissant')" class="w-full mt-4 py-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-xl">Order Online</button>
        </div>

        <!-- Item 5 -->
        <div class="menu-card bakery rounded-2xl bg-[#131620] border border-slate-800 p-5 flex flex-col justify-between">
          <div>
            <img src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=600&auto=format&fit=crop" class="w-full h-48 rounded-xl object-cover mb-4" alt="Pain au Chocolat">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-display font-bold text-white text-base">Pain au Chocolat</h3>
              <span class="text-amber-400 font-bold">$4.95</span>
            </div>
            <p class="text-slate-400 text-xs leading-relaxed mb-3">Flaky European pastry filled with double batons of 64% Valrhona dark chocolate.</p>
          </div>
          <button onclick="openOrderModal('Pain au Chocolat')" class="w-full mt-4 py-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-xl">Order Online</button>
        </div>

        <!-- Item 6 -->
        <div class="menu-card paninis rounded-2xl bg-[#131620] border border-slate-800 p-5 flex flex-col justify-between">
          <div>
            <img src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop" class="w-full h-48 rounded-xl object-cover mb-4" alt="Panini">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-display font-bold text-white text-base">Tuscan Prosciutto & Burrata Panini</h3>
              <span class="text-amber-400 font-bold">$11.95</span>
            </div>
            <p class="text-slate-400 text-xs leading-relaxed mb-3">Aged prosciutto, imported creamy burrata, arugula, and balsamic fig reduction on ciabatta.</p>
          </div>
          <button onclick="openOrderModal('Tuscan Prosciutto & Burrata Panini')" class="w-full mt-4 py-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-xl">Order Online</button>
        </div>
      </div>
    </div>
  </section>

  <!-- LOCATION & DRIVE-THRU -->
  <section id="location" class="py-20 bg-[#0F0F10]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase mb-2">Citrus Park Location & Drive-Thru</h2>
        <p class="text-slate-300 text-sm">6118 Gunn Hwy, Tampa, FL 33625 • Open Daily</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-5 space-y-6">
          <div class="p-6 rounded-2xl bg-[#141722] border border-amber-500/40">
            <div class="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase mb-3">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Drive-Thru Open Daily</span>
            </div>
            <h3 class="font-display font-bold text-white text-lg mb-1">6118 Gunn Hwy, Tampa, FL 33625</h3>
            <p class="text-xs text-slate-400 mb-4">Citrus Park Area • Drive-Thru & Dine-In Lounge</p>

            <div class="space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-3">
              <div><strong>Drive-Thru Hours:</strong> 6:00 AM – 7:30 PM</div>
              <div><strong>Lobby Hours:</strong> 6:30 AM – 7:00 PM</div>
              <div><strong>Phone:</strong> (813) 444-2390</div>
            </div>

            <a href="https://maps.google.com/?q=6118+Gunn+Hwy,+Tampa,+FL+33625" target="_blank" class="block text-center mt-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl">
              Open in Google Maps →
            </a>
          </div>

          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-4 rounded-xl bg-[#141722] border border-slate-800">
              <span class="text-xl mb-1 block">🚗</span>
              <strong class="text-white block">Drive-Thru Access</strong>
              <span class="text-slate-400 text-[11px]">Express pickup lane.</span>
            </div>
            <div class="p-4 rounded-xl bg-[#141722] border border-slate-800">
              <span class="text-xl mb-1 block">⚡</span>
              <strong class="text-white block">Free Gigabit Wi-Fi</strong>
              <span class="text-slate-400 text-[11px]">Ideal for remote focus.</span>
            </div>
          </div>
        </div>

        <!-- Google Maps Iframe Embed -->
        <div class="lg:col-span-7 h-96 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <iframe title="Map" src="https://maps.google.com/maps?q=6118%20Gunn%20Hwy,%20Tampa,%20FL%2033625&t=&z=15&ie=UTF8&iwloc=&output=embed" class="w-full h-full border-0 filter grayscale invert contrast-125" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-[#0A0A0B] border-t border-slate-800 py-12 text-slate-400 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <span class="font-display font-black text-white text-base tracking-widest">ECLIPSE <span class="text-amber-400">CAFE</span></span>
        <p class="text-slate-500 text-[11px] mt-1">6118 Gunn Hwy, Citrus Park, Tampa, FL 33625 • (813) 444-2390</p>
      </div>

      <div class="flex items-center gap-4">
        <a href="https://instagram.com/eclipsecafe.intl" target="_blank" class="hover:text-amber-400">Instagram @eclipsecafe.intl</a>
        <span>•</span>
        <span>© 2026 Eclipse Cafe. All rights reserved.</span>
      </div>
    </div>
  </footer>

  <!-- INTERACTIVE ORDER ONLINE MODAL -->
  <div id="order-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
    <div class="bg-[#141722] border border-amber-500/40 rounded-2xl p-6 max-w-md w-full shadow-2xl text-left">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-display font-bold text-white text-lg" id="modal-item-title">Quick Online Order</h3>
        <button onclick="closeOrderModal()" class="text-slate-400 hover:text-white text-xl">✕</button>
      </div>
      <p class="text-xs text-slate-300 mb-4">Select pickup preference for Citrus Park, Tampa (6118 Gunn Hwy):</p>
      
      <div class="space-y-3 mb-6">
        <label class="block text-xs font-bold text-slate-300">Pickup Mode:</label>
        <select class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white">
          <option>🚗 Express Drive-Thru Window (Ready in 5-8 mins)</option>
          <option>☕ In-Store Cafe Pickup Counter</option>
        </select>

        <label class="block text-xs font-bold text-slate-300 pt-2">Choice of Milk:</label>
        <select class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white">
          <option>Barista Oat Milk (Standard)</option>
          <option>Organic Almond Milk</option>
          <option>Whole Milk</option>
          <option>Coconut Cream</option>
        </select>
      </div>

      <button onclick="simulateOrderSuccess()" class="w-full py-3 bg-amber-400 hover:bg-amber-300 text-black font-black uppercase text-xs tracking-wider rounded-xl transition shadow-lg">
        Send Order to Baristas
      </button>
    </div>
  </div>

  <!-- TOAST NOTIFICATION -->
  <div id="order-toast" class="fixed bottom-6 right-6 z-50 hidden bg-amber-400 text-black px-6 py-4 rounded-2xl shadow-2xl font-bold text-xs flex items-center gap-3">
    <span>✅ Order sent! Baristas are preparing your drink at 6118 Gunn Hwy drive-thru.</span>
  </div>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    function filterCategory(cat) {
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-amber-400', 'text-black');
        btn.classList.add('bg-slate-800', 'text-slate-300');
      });
      const activeBtn = document.getElementById('tab-' + cat);
      if (activeBtn) {
        activeBtn.classList.remove('bg-slate-800', 'text-slate-300');
        activeBtn.classList.add('bg-amber-400', 'text-black');
      }

      document.querySelectorAll('.menu-card').forEach(card => {
        if (cat === 'all' || card.classList.contains(cat)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    function openOrderModal(itemName) {
      if (itemName) {
        document.getElementById('modal-item-title').innerText = 'Order: ' + itemName;
      } else {
        document.getElementById('modal-item-title').innerText = 'Quick Online Order';
      }
      document.getElementById('order-modal').classList.remove('hidden');
    }

    function closeOrderModal() {
      document.getElementById('order-modal').classList.add('hidden');
    }

    function simulateOrderSuccess() {
      closeOrderModal();
      const toast = document.getElementById('order-toast');
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    }
  </script>
</body>
</html>`;
}
