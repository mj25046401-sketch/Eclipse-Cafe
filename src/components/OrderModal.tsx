import React, { useState } from 'react';
import { MenuItem } from '../types';
import { X, Sparkles, Plus, Minus, Check, Car, Store, ShoppingBag } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  item?: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, customization: any, quantity: number) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  item,
  onClose,
  onAddToCart,
}) => {
  if (!isOpen || !item) return null;

  const [quantity, setQuantity] = useState(1);
  const [milk, setMilk] = useState('Barista Oat Milk (Recommended)');
  const [sweetness, setSweetness] = useState('Regular / Natural');
  const [extraMushroom, setExtraMushroom] = useState('Standard Blend Included');
  const [temperature, setTemperature] = useState('Iced (Over Craft Ice)');
  const [pickupType, setPickupType] = useState<'drive-thru' | 'counter'>('drive-thru');

  const milkOptions = [
    'Barista Oat Milk (Recommended)',
    'Organic Almond Milk',
    'Whole Milk',
    'Coconut Cream Milk',
  ];

  const mushroomBoosts = [
    { label: 'Standard Blend Included (1,000mg)', price: 0 },
    { label: '+ Extra 1,000mg Lion’s Mane (Laser Focus)', price: 1.25 },
    { label: '+ Extra 1,000mg Reishi (Deep Calm)', price: 1.25 },
    { label: '+ Extra 1,000mg Cordyceps (ATP Energy)', price: 1.25 },
  ];

  const sweetnessOptions = ['Unsweetened (Zero Sugar)', 'Light Raw Agave', 'Madagascar Vanilla Bean', 'Pure Florida Honey'];

  const handleAdd = () => {
    onAddToCart(
      item,
      {
        milk: item.category === 'functional' || item.category === 'traditional' ? milk : undefined,
        sweetness: item.category === 'functional' || item.category === 'traditional' ? sweetness : undefined,
        extraMushroom: item.category === 'functional' ? extraMushroom : undefined,
        temperature: item.category === 'functional' || item.category === 'traditional' ? temperature : undefined,
        pickupType,
      },
      quantity
    );
    onClose();
  };

  const isBeverage = item.category === 'functional' || item.category === 'traditional';

  return (
    <div
      id="order-customization-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#141722] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="relative h-44 w-full bg-slate-900 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141722] via-[#141722]/50 to-transparent" />
          
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-5 right-5">
            <h3 className="font-display font-extrabold text-xl text-white">
              {item.name}
            </h3>
            <span className="text-amber-400 font-extrabold text-base">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Scrollable Customization Options */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left text-xs">
          
          <p className="text-slate-300 text-xs leading-relaxed">
            {item.description}
          </p>

          {/* Pickup Method Selection */}
          <div className="space-y-2">
            <span className="font-display font-bold uppercase tracking-wider text-slate-300 text-[11px] block">
              Citrus Park Pickup Mode:
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setPickupType('drive-thru')}
                className={`p-3 rounded-xl border flex items-center gap-2 font-bold transition-all ${
                  pickupType === 'drive-thru'
                    ? 'border-amber-400 bg-amber-500/20 text-amber-300'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400'
                }`}
              >
                <Car className="w-4 h-4 text-amber-400" />
                <span>Express Drive-Thru</span>
              </button>

              <button
                type="button"
                onClick={() => setPickupType('counter')}
                className={`p-3 rounded-xl border flex items-center gap-2 font-bold transition-all ${
                  pickupType === 'counter'
                    ? 'border-amber-400 bg-amber-500/20 text-amber-300'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400'
                }`}
              >
                <Store className="w-4 h-4 text-amber-400" />
                <span>In-Store Counter</span>
              </button>
            </div>
          </div>

          {/* Beverage Specific Options */}
          {isBeverage && (
            <>
              {/* Temperature */}
              <div className="space-y-2">
                <span className="font-display font-bold uppercase tracking-wider text-slate-300 text-[11px] block">
                  Temperature:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {['Iced (Over Craft Ice)', 'Steamed Hot (150°F)'].map((temp) => (
                    <button
                      key={temp}
                      type="button"
                      onClick={() => setTemperature(temp)}
                      className={`p-2.5 rounded-xl border font-semibold text-center transition-all ${
                        temperature === temp
                          ? 'border-amber-400 bg-amber-500/15 text-white'
                          : 'border-slate-800 bg-slate-900/60 text-slate-400'
                      }`}
                    >
                      {temp}
                    </button>
                  ))}
                </div>
              </div>

              {/* Milk Choice */}
              <div className="space-y-2">
                <span className="font-display font-bold uppercase tracking-wider text-slate-300 text-[11px] block">
                  Choice of Milk / Base:
                </span>
                <div className="space-y-1.5">
                  {milkOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setMilk(opt)}
                      className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                        milk === opt
                          ? 'border-amber-400 bg-amber-500/15 text-white font-bold'
                          : 'border-slate-800 bg-slate-900/40 text-slate-400'
                      }`}
                    >
                      <span>{opt}</span>
                      {milk === opt && <Check className="w-4 h-4 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mushroom Extra Boost */}
              {item.category === 'functional' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold uppercase tracking-wider text-amber-400 text-[11px] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Adaptogen Dose:
                    </span>
                    <span className="text-[10px] text-slate-400">100% Organic Extract</span>
                  </div>
                  <div className="space-y-1.5">
                    {mushroomBoosts.map((boost) => (
                      <button
                        key={boost.label}
                        type="button"
                        onClick={() => setExtraMushroom(boost.label)}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                          extraMushroom === boost.label
                            ? 'border-amber-400 bg-amber-500/15 text-white font-bold'
                            : 'border-slate-800 bg-slate-900/40 text-slate-400'
                        }`}
                      >
                        <span>{boost.label}</span>
                        <span className="text-amber-400 font-mono">
                          {boost.price > 0 ? `+$${boost.price.toFixed(2)}` : 'Included'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sweetness */}
              <div className="space-y-2">
                <span className="font-display font-bold uppercase tracking-wider text-slate-300 text-[11px] block">
                  Sweetener Level:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {sweetnessOptions.map((sw) => (
                    <button
                      key={sw}
                      type="button"
                      onClick={() => setSweetness(sw)}
                      className={`p-2 rounded-xl border text-center transition-all ${
                        sweetness === sw
                          ? 'border-amber-400 bg-amber-500/15 text-white font-bold'
                          : 'border-slate-800 bg-slate-900/40 text-slate-400'
                      }`}
                    >
                      {sw}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Quantity selector */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800">
            <span className="font-display font-bold uppercase tracking-wider text-slate-300 text-[11px]">
              Quantity:
            </span>
            <div className="flex items-center gap-3 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-slate-300 hover:text-white p-1"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono font-bold text-sm text-white w-6 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="text-slate-300 hover:text-white p-1"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-[#0E1017] border-t border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Total</span>
            <span className="font-display font-black text-lg text-amber-400">
              ${(item.price * quantity).toFixed(2)}
            </span>
          </div>

          <button
            id="modal-confirm-add-btn"
            onClick={handleAdd}
            className="flex-1 py-3 px-5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Order</span>
          </button>
        </div>

      </div>
    </div>
  );
};
