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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {MEAT_DATABASE.filter(m => m.category === activeCategory).map(meat => {
          const isSelected = selectedMeats.some(sm => sm.id === meat.id);
          return (
            <div 
              key={meat.id}
              onClick={() => toggleMeat(meat)}
              className={`relative px-4 py-4 border rounded-xl cursor-pointer transition-all flex flex-col justify-between min-h-[110px] active:scale-95 overflow-hidden ${
                isSelected 
                  ? 'border-bbq-orange bg-bbq-orange text-white shadow-md' 
                  : 'border-gray-200 bg-white shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-2 gap-8">
                <span className={`text-base font-semibold leading-tight break-words ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                  {meat.name}
                </span>
                <div className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isSelected ? 'bg-white text-bbq-orange shadow-sm scale-100' : 'bg-gray-100/80 text-gray-400 scale-90'
                }`}>
                  <Check size={14} strokeWidth={4} />
                </div>
              </div>
              <p className={`text-sm leading-tight font-bold mt-auto ${isSelected ? 'text-orange-50' : 'text-gray-500'}`}>
                Yields ~{Math.round(meat.yieldPercentage * 100)}% cooked.
              </p>
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
