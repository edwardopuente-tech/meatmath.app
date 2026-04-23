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
    const newVal = Math.max(0, guests[key] + delta);
    onChange({ ...guests, [key]: newVal });
  };

  return (
    <div className="glass-card flex flex-col rounded-2xl p-5 relative no-print">
      <span className="control-label mb-4">1. Who is eating?</span>
      
      <div className="grid grid-cols-1 gap-4">
        {/* Adults */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-full shadow-sm text-gray-700">
              <Users size={24} />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">Adults</p>
              <p className="text-sm text-gray-500">Standard Portion</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-1.5">
            <button 
              onClick={() => updateCount('adults', -1)}
              className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 font-bold transition-colors active:scale-95"
            >
              -
            </button>
            <span className="w-8 text-center font-bold text-xl">{guests.adults}</span>
            <button 
              onClick={() => updateCount('adults', 1)}
              className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 font-bold transition-colors active:scale-95"
            >
              +
            </button>
          </div>
        </div>

        {/* Kids */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-full shadow-sm text-gray-700">
              <Baby size={24} />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">Kids</p>
              <p className="text-sm text-gray-500">Half Portion</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-1.5">
            <button 
              onClick={() => updateCount('kids', -1)}
              className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 font-bold transition-colors active:scale-95"
            >
              -
            </button>
            <span className="w-8 text-center font-bold text-xl">{guests.kids}</span>
            <button 
              onClick={() => updateCount('kids', 1)}
              className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 font-bold transition-colors active:scale-95"
            >
              +
            </button>
          </div>
        </div>
        
        {/* Big Eaters */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-full shadow-sm text-gray-700">
              <Beef size={24} />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">Big Eaters</p>
              <p className="text-sm text-gray-500">1.5x Portion (+50%)</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-1.5">
            <button 
              onClick={() => updateCount('bigEaters', -1)}
              className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 font-bold transition-colors active:scale-95"
            >
              -
            </button>
            <span className="w-8 text-center font-bold text-xl">{guests.bigEaters}</span>
            <button 
              onClick={() => updateCount('bigEaters', 1)}
              className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 font-bold transition-colors active:scale-95"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <span className="control-label mb-3">Event Menu Style</span>
        <div className="flex flex-col gap-3">
          <button 
            onClick={() => onMenuStyleChange('with-sides')}
            className={`flex-1 py-4 px-4 rounded-xl text-sm font-bold border transition-colors focus:outline-none active:scale-98 ${menuStyle === 'with-sides' ? 'bg-bbq-orange text-white border-bbq-orange shadow-md' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-bbq-orange'}`}
          >
            Full Spread (Sides + Apps)
          </button>
          <button 
            onClick={() => onMenuStyleChange('meat-only')}
            className={`flex-1 py-4 px-4 rounded-xl text-sm font-bold border transition-colors focus:outline-none active:scale-98 ${menuStyle === 'meat-only' ? 'bg-bbq-orange text-white border-bbq-orange shadow-md' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-bbq-orange'}`}
          >
            Meat Only (No Sides)
          </button>
        </div>
      </div>
    </div>
  );
}
