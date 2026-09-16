import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Car, Store, ShoppingBag, ArrowRight, CheckCircle2, Sparkles, Clock, MapPin } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onOrderSuccess: (orderNumber: string, pickupType: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [pickupMethod, setPickupMethod] = useState<'drive-thru' | 'counter'>('drive-thru');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cartItems.reduce((acc, current) => acc + current.item.price * current.quantity, 0);
  const tax = subtotal * 0.075; // 7.5% Hillsborough County / Tampa sales tax
  const total = subtotal + tax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedOrder = `ECL-${Math.floor(1000 + Math.random() * 9000)}`;
      onOrderSuccess(generatedOrder, pickupMethod === 'drive-thru' ? 'Drive-Thru Lane' : 'In-Store Pickup Counter');
      onClearCart();
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#12141D] border-l border-amber-500/30 h-full flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#0E1018]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white">Your Order</h3>
              <p className="text-[11px] text-slate-400">6118 Gunn Hwy, Citrus Park, Tampa</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Contents */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-600">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="font-display font-bold text-white text-base">Your cart is empty</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Explore our signature adaptogenic mushroom lattes, fresh croissants, and artisan paninis.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black text-xs font-black uppercase tracking-wider"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Pickup Mode Selector */}
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                  Select Tampa Pickup Method:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPickupMethod('drive-thru')}
                    className={`p-2.5 rounded-lg border flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                      pickupMethod === 'drive-thru'
                        ? 'border-amber-400 bg-amber-500/20 text-amber-300'
                        : 'border-slate-800 bg-slate-950 text-slate-400'
                    }`}
                  >
                    <Car className="w-3.5 h-3.5 text-amber-400" />
                    <span>Drive-Thru Lane</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPickupMethod('counter')}
                    className={`p-2.5 rounded-lg border flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                      pickupMethod === 'counter'
                        ? 'border-amber-400 bg-amber-500/20 text-amber-300'
                        : 'border-slate-800 bg-slate-950 text-slate-400'
                    }`}
                  >
                    <Store className="w-3.5 h-3.5 text-amber-400" />
                    <span>In-Cafe Pickup</span>
                  </button>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-amber-400 font-semibold pt-1">
                  <Clock className="w-3 h-3" />
                  <span>Estimated wait: 7–10 minutes upon ordering</span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {cartItems.map((cartItem, idx) => (
                  <div
                    key={`${cartItem.item.id}-${idx}`}
                    className="p-3.5 rounded-xl bg-[#171A24] border border-slate-800 flex items-start gap-3 justify-between"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-14 h-14 rounded-lg object-cover bg-slate-900 shrink-0"
                    />

                    <div className="flex-1 min-w-0 text-left">
                      <h4 className="font-display font-bold text-xs text-white truncate">
                        {cartItem.item.name}
                      </h4>
                      <span className="font-mono text-xs font-bold text-amber-400 block">
                        ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                      </span>

                      {/* Customization labels */}
                      {cartItem.customization && (
                        <div className="text-[10px] text-slate-400 space-y-0.5 mt-1">
                          {cartItem.customization.temperature && (
                            <div>• {cartItem.customization.temperature}</div>
                          )}
                          {cartItem.customization.milk && (
                            <div>• {cartItem.customization.milk}</div>
                          )}
                          {cartItem.customization.extraMushroom && (
                            <div className="text-amber-300">• {cartItem.customization.extraMushroom}</div>
                          )}
                        </div>
                      )}

                      {/* Quantity buttons */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(idx, cartItem.quantity - 1)}
                          className="w-5 h-5 rounded bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-xs"
                        >
                          -
                        </button>
                        <span className="text-xs font-mono font-bold text-white px-1">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, cartItem.quantity + 1)}
                          className="w-5 h-5 rounded bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(idx)}
                      aria-label="Remove item"
                      className="text-slate-500 hover:text-red-400 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer & Checkout Form */}
        {cartItems.length > 0 && (
          <div className="p-5 bg-[#0E1018] border-t border-slate-800 space-y-4">
            {/* Breakdown */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Hillsborough County Tax (7.5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-sm pt-1 border-t border-slate-800">
                <span>Total</span>
                <span className="font-mono text-amber-400 text-base">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Quick Customer Name/Phone for pickup identification */}
            <form onSubmit={handleCheckout} className="space-y-2.5">
              <input
                type="text"
                required
                placeholder="Your Name (for order board / cup)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
              <input
                type="tel"
                placeholder="Phone (optional, for SMS ready notification)"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Transmitting to Baristas...</span>
                ) : (
                  <>
                    <span>Confirm & Send to Baristas (${total.toFixed(2)})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
