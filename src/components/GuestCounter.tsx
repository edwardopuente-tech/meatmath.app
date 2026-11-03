import React from 'react';
import { GuestCount, MenuStyle } from '../types';
import { Users, Baby, Beef } from 'lucide-react';

interface Props {
  guests: GuestCount;
  onChange: (guests: GuestCount) => void;
  menuStyle: MenuStyle;
  onMenuStyleChange: (style: MenuStyle) => void;
}

export function GuestCounter({ guests, onChange, menuStyle, onMenuStyleChange }: Props) {
  const updateCount = (key: keyof GuestCount, delta: number) => {
    const current = guests[key] || 0;
    const newVal = Math.max(0, current + delta);
    onChange({ ...guests, [key]: newVal });
  };

  const handleInputChange = (key: keyof GuestCount, rawValue: string) => {
    if (rawValue.trim() === '') {
      onChange({ ...guests, [key]: 0 });
      return;
    }
    const clean = rawValue.replace(/\D/g, '');
    if (clean === '') {
      onChange({ ...guests, [key]: 0 });
      return;
    }
    const parsed = parseInt(clean, 10);
    if (!isNaN(parsed)) {
      // Clamped between 0 and 9999
      onChange({ ...guests, [key]: Math.min(Math.max(0, parsed), 9999) });
    }
  };

  const totalGuests = (guests.adults || 0) + (guests.kids || 0) + (guests.bigEaters || 0);

  const categories: Array<{
    key: keyof GuestCount;
    label: string;
    subtitle: string;
    icon: React.ReactNode;
  }> = [
    {
      key: 'adults',
      label: 'Adults',
      subtitle: 'Standard Portion',
      icon: <Users size={24} />,
    },
    {
      key: 'kids',
      label: 'Kids',
      subtitle: 'Half Portion',
      icon: <Baby size={24} />,
    },
    {
      key: 'bigEaters',
      label: 'Big Eaters',
      subtitle: '1.5x Portion (+50%)',
      icon: <Beef size={24} />,
    },
  ];

  return (
    <div className="glass-card flex flex-col rounded-2xl p-5 relative no-print">
      <div className="flex items-center justify-between mb-2">
        <span className="control-label mb-0">1. Who is eating?</span>
        {totalGuests > 0 && (
          <span className="text-xs font-bold px-2.5 py-1 bg-bbq-orange/10 text-bbq-orange rounded-full border border-bbq-orange/20 animate-in fade-in duration-200">
            {totalGuests} Total Eater{totalGuests === 1 ? '' : 's'}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500 mb-4">
        Type any number directly or use the <span className="font-semibold text-gray-700">−</span> / <span className="font-semibold text-gray-700">+</span> buttons.
      </p>
      
      <div className="grid grid-cols-1 gap-3.5">
        {categories.map(({ key, label, subtitle, icon }) => {
          const val = guests[key] || 0;
          return (
            <div
              key={key}
              className="flex items-center justify-between p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 sm:p-3 bg-white rounded-full shadow-sm text-gray-700">
                  {icon}
                </div>
                <div>
                  <label htmlFor={`eater-input-${key}`} className="font-semibold text-gray-800 text-base sm:text-lg block cursor-pointer">
                    {label}
                  </label>
                  <p className="text-xs sm:text-sm text-gray-500">{subtitle}</p>
                </div>
              </div>

              {/* Counter Stepper with direct editable number input */}
              <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1 shadow-sm transition-all focus-within:border-bbq-orange focus-within:ring-2 focus-within:ring-bbq-orange/20">
                <button
                  type="button"
                  onClick={() => updateCount(key, -1)}
                  disabled={val <= 0}
                  aria-label={`Decrease ${label}`}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent text-gray-600 font-bold text-lg transition-colors active:scale-95"
                >
                  −
                </button>
                <input
                  id={`eater-input-${key}`}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={val === 0 ? '' : val}
                  placeholder="0"
                  aria-label={`Number of ${label}`}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      updateCount(key, 1);
                    } else if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      updateCount(key, -1);
                    } else if (e.key === 'Enter') {
                      e.currentTarget.blur();
                    }
                  }}
                  className="w-14 sm:w-16 h-9 sm:h-10 text-center font-bold text-xl text-gray-900 bg-transparent border-0 rounded focus:outline-none focus:bg-orange-50/60 selection:bg-bbq-orange/20"
                />
                <button
                  type="button"
                  onClick={() => updateCount(key, 1)}
                  aria-label={`Increase ${label}`}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 font-bold text-lg transition-colors active:scale-95"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <span className="control-label mb-3">Event Menu Style</span>
        <div className="flex flex-col gap-3">
          <button 
            type="button"
            onClick={() => onMenuStyleChange('with-sides')}
            className={`flex-1 py-3.5 px-4 rounded-xl text-sm font-bold border transition-colors focus:outline-none active:scale-98 ${menuStyle === 'with-sides' ? 'bg-bbq-orange text-white border-bbq-orange shadow-md' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-bbq-orange'}`}
          >
            Full Spread (Sides + Apps)
          </button>
          <button 
            type="button"
            onClick={() => onMenuStyleChange('meat-only')}
            className={`flex-1 py-3.5 px-4 rounded-xl text-sm font-bold border transition-colors focus:outline-none active:scale-98 ${menuStyle === 'meat-only' ? 'bg-bbq-orange text-white border-bbq-orange shadow-md' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-bbq-orange'}`}
          >
            Meat Only (No Sides)
          </button>
        </div>
      </div>
    </div>
  );
}

