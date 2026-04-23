import React, { useState } from 'react';
import { MEAT_DATABASE } from '../lib/meatDatabase';
import { SelectedMeat, MeatCategory } from '../types';
import { Check } from 'lucide-react';

interface Props {
  selectedMeats: SelectedMeat[];
  onChange: (meats: SelectedMeat[]) => void;
}

export function MeatPicker({ selectedMeats, onChange }: Props) {
  const [activeCategory, setActiveCategory] = useState<MeatCategory>('Beef');
  
  const categories: MeatCategory[] = ['Beef', 'Pork', 'Poultry', 'Seafood'];

  const toggleMeat = (meat: SelectedMeat | typeof MEAT_DATABASE[0]) => {
    const exists = selectedMeats.find(sm => sm.id === meat.id);
    if (exists) {
      onChange(selectedMeats.filter(sm => sm.id !== meat.id));
    } else {
      onChange([...selectedMeats, { ...meat }]);
    }
  };

  return (
    <div className="glass-card flex flex-col rounded-2xl p-5 relative no-print mt-6">
      
      <span className="control-label mb-4">2. Select Meat Type</span>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-3 flex-shrink-0 rounded-full text-base font-bold whitespace-nowrap transition-colors ${
              activeCategory === cat 
              ? 'bg-bbq-charcoal text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
        {MEAT_DATABASE.filter(m => m.category === activeCategory).map(meat => {
          const isSelected = selectedMeats.some(sm => sm.id === meat.id);
          return (
            <div 
              key={meat.id}
              onClick={() => toggleMeat(meat)}
              className={`group relative px-3 sm:px-4 py-4 sm:py-5 border rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] active:scale-95 ${
                isSelected 
                  ? 'border-bbq-orange bg-bbq-orange text-white shadow-[0_10px_20px_-5px_rgba(194,65,12,0.3)]' 
                  : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="w-full">
                <span className={`block text-[13px] sm:text-[15px] font-bold leading-tight break-normal ${isSelected ? 'text-white' : 'text-gray-900 group-hover:text-bbq-charcoal'}`}>
                  {meat.name}
                </span>
              </div>

              <div className="flex items-end justify-between mt-3 sm:mt-4">
                <div className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[11px] font-black uppercase tracking-wider whitespace-nowrap ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  ~{Math.round(meat.yieldPercentage * 100)}% Yield
                </div>
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isSelected 
                    ? 'bg-white text-bbq-orange shadow-md scale-100' 
                    : 'bg-gray-200/50 text-transparent scale-50 opacity-0'
                }`}>
                  <Check size={14} className="sm:w-4 sm:h-4" strokeWidth={4} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      {selectedMeats.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">
            {selectedMeats.length} item{selectedMeats.length === 1 ? '' : 's'} selected
          </span>
          <button 
            onClick={() => onChange([])}
            className="text-xs text-red-500 hover:text-red-700 font-bold tracking-wide uppercase"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
