import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Clock, MapPin, Sparkles, Phone } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenOrderModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Functional Coffee', href: '#functional-coffee' },
    { label: 'Wellness Benefits', href: '#wellness' },
    { label: 'Story', href: '#story' },
    { label: 'Drive-Thru & Location', href: '#location' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F0F10]/95 backdrop-blur-md border-b border-amber-500/20 shadow-2xl shadow-black/80 py-3.5'
          : 'bg-gradient-to-b from-[#0F0F10] via-[#0F0F10]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo matching screenshot */}
        <a
          href="#"
          id="brand-logo"
          className="group flex items-center gap-3.5 text-decoration-none"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#161922] border border-amber-500/40 shadow-inner group-hover:border-amber-400 transition-all duration-300">
            {/* Glowing eclipse crescent */}
            <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-sm group-hover:bg-amber-500/25 transition-all"></div>
            <svg
              className="w-7 h-7 text-amber-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.7)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" fill="#EAB308" />
              <circle cx="12" cy="12" r="9" stroke="#F8FAFC" strokeOpacity="0.4" strokeWidth="1" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-[0.2em] text-white flex items-center gap-1.5 leading-none">
              ECLIPSE
              <span className="text-amber-400 font-light text-sm tracking-widest block sm:inline">CAFE</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-amber-400/90 font-semibold mt-1">
              Citrus Park, Tampa
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors duration-200 py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-3">
          {/* Cart Icon / Drawer toggle */}
          <button
            id="nav-cart-btn"
            onClick={onOpenCart}
            aria-label="View Cart"
            className="relative p-2.5 rounded-full bg-[#1E293B]/70 border border-slate-700/60 hover:border-amber-500/50 hover:bg-[#1E293B] text-slate-200 hover:text-amber-400 transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary "Order Online" Button matching screenshot */}
          <button
            id="nav-order-online-btn"
            onClick={onOpenOrderModal}
            className="hidden sm:inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/20 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>Order Online</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0F0F10] border-b border-amber-500/20 px-6 pt-4 pb-6 mt-3 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex items-center gap-2 text-xs text-amber-400/90 pb-2 border-b border-slate-800">
            <Clock className="w-3.5 h-3.5" />
            <span>Open Daily: Drive-Thru 6:00 AM - 7:30 PM</span>
          </div>

          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-amber-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              id="mobile-order-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm uppercase tracking-wider rounded-full shadow-lg shadow-amber-500/20 text-center"
            >
              Order Online (Pickup & Drive-thru)
            </button>
            <a
              href="tel:8134442390"
              className="flex items-center justify-center gap-2 text-xs text-slate-400 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(813) 444-2390 • 6118 Gunn Hwy</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
