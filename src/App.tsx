import React, { useState } from 'react';
import { MenuItem, CartItem } from './types';
import { MENU_ITEMS, ADAPTOGENS } from './data/cafeData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedFunctionalsBar } from './components/FeaturedFunctionalsBar';
import { WellnessSpotlight } from './components/WellnessSpotlight';
import { MenuSection } from './components/MenuSection';
import { LocationSection } from './components/LocationSection';
import { BrandStory } from './components/BrandStory';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { CartDrawer } from './components/CartDrawer';
import { SingleFileExportModal } from './components/SingleFileExportModal';
import { Check, Sparkles, Car, Coffee, X } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'functional' | 'traditional' | 'bakery' | 'paninis'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [orderConfirmation, setOrderConfirmation] = useState<{ orderNumber: string; pickupType: string } | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3800);
  };

  const handleQuickAdd = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((c) => c.item.id === item.id && !c.customization);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { item, quantity: 1 }];
    });
    showToast(`Added 1× ${item.name} to your order.`);
  };

  const handleCustomAddToCart = (item: MenuItem, customization: any, quantity: number) => {
    setCartItems((prev) => [...prev, { item, quantity, customization }]);
    showToast(`Added ${quantity}× ${item.name} (${customization.pickupType === 'drive-thru' ? 'Drive-Thru' : 'Counter'})`);
  };

  const handleOpenCustomize = (item: MenuItem) => {
    setSelectedItemForModal(item);
    setIsOrderModalOpen(true);
  };

  const handleOpenDefaultOrder = () => {
    setSelectedItemForModal(MENU_ITEMS[0]);
    setIsOrderModalOpen(true);
  };

  const handleExploreDrinks = () => {
    setSelectedCategory('functional');
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewMenu = () => {
    setSelectedCategory('all');
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFilterByMushroom = (mushroomName: string) => {
    setSelectedCategory('functional');
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, c) => acc + c.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0F0F10] text-[#F8FAFC] flex flex-col font-body selection:bg-amber-500 selection:text-black">
      
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderModal={handleOpenDefaultOrder}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section matching screenshot layout & aesthetics */}
        <Hero
          onExploreDrinks={handleExploreDrinks}
          onViewMenu={handleViewMenu}
          onOpenOrderModal={handleOpenDefaultOrder}
        />

        {/* 2. Featured Functionals Row right under hero */}
        <FeaturedFunctionalsBar
          onSelectItem={(item) => handleOpenCustomize(item)}
          onViewCategory={(cat) => {
            setSelectedCategory(cat);
            const el = document.getElementById('menu');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Functional Wellness Spotlight */}
        <WellnessSpotlight onFilterByMushroom={handleFilterByMushroom} />

        {/* 4. Tabbed Categories Menu */}
        <MenuSection
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onAddToCart={handleQuickAdd}
          onCustomizeItem={handleOpenCustomize}
        />

        {/* 5. Brand Story */}
        <BrandStory />

        {/* 6. Drive-Thru & Location Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenOrderModal={handleOpenDefaultOrder}
      />

      {/* Customization & Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        item={selectedItemForModal}
        onClose={() => setIsOrderModalOpen(false)}
        onAddToCart={handleCustomAddToCart}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={(idx, q) => {
          if (q <= 0) {
            setCartItems((prev) => prev.filter((_, i) => i !== idx));
          } else {
            setCartItems((prev) => {
              const copy = [...prev];
              copy[idx].quantity = q;
              return copy;
            });
          }
        }}
        onRemoveItem={(idx) => {
          setCartItems((prev) => prev.filter((_, i) => i !== idx));
          showToast("Item removed from cart.");
        }}
        onClearCart={() => setCartItems([])}
        onOrderSuccess={(orderNum, pickupType) => {
          setOrderConfirmation({ orderNumber: orderNum, pickupType });
        }}
      />

      {/* Standalone HTML Code Exporter Modal */}
      <SingleFileExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

      {/* Order Confirmation Banner / Modal */}
      {orderConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#141722] border border-amber-400 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center space-y-4 shadow-2xl relative">
            <button
              onClick={() => setOrderConfirmation(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="font-display font-extrabold text-2xl text-white">
              Order Received!
            </h3>

            <p className="text-xs text-slate-300">
              Your ticket has been sent to our barista display at <strong>6118 Gunn Hwy, Citrus Park</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                Order Reference
              </div>
              <div className="font-mono text-xl font-black text-amber-400">
                #{orderConfirmation.orderNumber}
              </div>
              <div className="text-xs text-emerald-400 font-semibold pt-1 flex items-center justify-center gap-1.5">
                <Car className="w-3.5 h-3.5" />
                <span>Pickup at: {orderConfirmation.pickupType}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              Estimated prep time: <strong>6–9 minutes</strong>. Present your order number at the window or counter.
            </p>

            <button
              onClick={() => setOrderConfirmation(null)}
              className="w-full py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg"
            >
              Done & Return to Menu
            </button>
          </div>
        </div>
      )}

      {/* Floating Interactive Toast */}
      {toastMessage && (
        <div
          id="global-toast"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#1E2333] border border-amber-400/60 text-white shadow-2xl text-xs font-semibold animate-in slide-in-from-bottom-5 duration-200"
        >
          <div className="w-6 h-6 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold text-xs shrink-0">
            ✓
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white ml-2 text-xs"
          >
            ✕
          </button>
        </div>
      )}

    </div>
  );
}
