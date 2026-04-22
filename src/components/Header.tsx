import React, { useState } from 'react';
import { Flame, Printer, Beef, Drumstick, UtensilsCrossed, Axe, Shield, Thermometer, Droplet, Hexagon, Plus, Calculator } from 'lucide-react';
import { MeasurementUnit } from '../types';

interface Props {
  unit: MeasurementUnit;
  onUnitToggle: () => void;
}

export function Header({ unit, onUnitToggle }: Props) {
  const [logoVariant, setLogoVariant] = useState(10);

  const cycleLogo = () => setLogoVariant((v) => (v + 1) % 11);

  return (
    <header className="no-print bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* Logo Stack Container */}
        <div 
          onClick={cycleLogo}
          className="flex items-center gap-3 md:gap-4 group cursor-pointer relative"
          title="Click to cycle logo variants!"
        >
          {/* Variant 0: The Brutalist Flame */}
          {logoVariant === 0 && (
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-bbq-charcoal border-[3px] border-bbq-orange rounded-lg rotate-3 transition-transform duration-300 shadow-[4px_4px_0px_#C2410C] overflow-hidden group-hover:rotate-0 group-hover:-translate-y-1 group-hover:shadow-[4px_6px_0px_#C2410C]">
              <div className="absolute inset-0 border-[2px] border-black/50"></div>
              <div className="absolute top-0 w-full h-1/2 bg-white/5"></div>
              <Flame size={28} strokeWidth={2.5} className="text-bbq-orange relative z-10 drop-shadow-md transition-transform duration-300" />
            </div>
          )}

          {/* Variant 1: The Cattle Brand (Cow Head) */}
          {logoVariant === 1 && (
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#F5E6D3] border-4 border-[#8B3A2B] rounded-full transition-transform duration-300 shadow-[0_0_0_2px_#3E1F1A,inset_0_0_8px_rgba(0,0,0,0.3)] group-hover:scale-105 group-hover:-rotate-6 group-hover:bg-[#E8D4BB]">
              <Beef size={28} strokeWidth={2.5} className="text-[#3E1F1A] relative z-10" />
              <div className="absolute top-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full border-[1px] border-white/40"></div>
            </div>
          )}

          {/* Variant 2: The Butcher's Crest (Crossed Cleaver/Axe) */}
          {logoVariant === 2 && (
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-black border-[3px] border-white rounded-md transition-transform duration-300 shadow-[3px_3px_0px_#C2410C,-3px_-3px_0px_#C2410C] group-hover:rotate-90 group-hover:shadow-none group-hover:scale-105 overflow-hidden">
               <Axe size={26} strokeWidth={2.5} className="text-white transform -scale-x-100 rotate-45 relative z-10 drop-shadow-md" />
               <div className="absolute right-[-10px] bottom-[-10px] opacity-40">
                  <Flame size={32} strokeWidth={3} className="text-bbq-orange" />
               </div>
            </div>
          )}

          {/* Variant 3: The Pit Fork */}
          {logoVariant === 3 && (
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-bbq-orange border-y-4 border-black transition-transform duration-300 skew-x-[-10deg] shadow-[4px_0_0_rgba(0,0,0,0.8)] group-hover:skew-x-0 group-hover:-translate-y-1">
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-50 z-0"></div>
               <UtensilsCrossed size={28} strokeWidth={3} className="text-black relative z-10 transform skew-x-[10deg] group-hover:skew-x-0 drop-shadow-sm" />
            </div>
          )}

          {/* Variant 4: The Competition Shield */}
          {logoVariant === 4 && (
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-bbq-orange text-white overflow-hidden shadow-[0_4px_0_#8B2E08] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_6px_0_#8B2E08]" style={{ clipPath: 'polygon(50% 0%, 100% 0, 100% 70%, 50% 100%, 0 70%, 0 0)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <Shield size={32} strokeWidth={2} className="absolute opacity-30 text-black transform scale-125" />
              <Flame size={24} strokeWidth={3} className="text-white relative z-10 drop-shadow-md" />
            </div>
          )}

          {/* Variant 5: The Temp Gauge */}
          {logoVariant === 5 && (
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-zinc-900 border-[4px] border-zinc-300 rounded-full transition-transform duration-300 shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)] group-hover:scale-105">
              <div className="absolute inset-1 rounded-full border-[2px] border-dashed border-bbq-orange/50 transition-transform duration-500 group-hover:rotate-45"></div>
              <Thermometer size={26} strokeWidth={2.5} className="text-bbq-orange relative z-10 drop-shadow-[0_0_8px_#C2410C]" />
            </div>
          )}

          {/* Variant 6: The Pink Smoke Ring */}
          {logoVariant === 6 && (
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#1a1514] rounded-full ring-[4px] ring-[#CA3D3D] ring-offset-[2px] md:ring-offset-[3px] ring-offset-white transition-all duration-300 group-hover:ring-offset-[5px] group-hover:ring-[#ff4b4b]">
              <div className="absolute inset-0 rounded-full blur-[2px] bg-[#CA3D3D]/30"></div>
              <Drumstick size={24} strokeWidth={2.5} className="text-[#CA3D3D] relative z-10 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
            </div>
          )}

          {/* Variant 7: The Iron Hexagon */}
          {logoVariant === 7 && (
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-zinc-800 text-white transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
               <Hexagon size={28} strokeWidth={2.5} className="text-bbq-orange absolute opacity-40 scale-150 rotate-90" />
               <Droplet size={22} strokeWidth={2.5} className="text-bbq-orange relative z-10 drop-shadow-md" />
            </div>
          )}

          {/* Variant 8: The Meat Equation (Flame + Plus) */}
          {logoVariant === 8 && (
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-bbq-charcoal rounded-xl border-[3px] border-bbq-orange transition-transform duration-300 shadow-[4px_4px_0px_#C2410C] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_#C2410C] overflow-hidden">
               {/* Subtle Math Graph Paper Background */}
               <div className="absolute inset-0 opacity-15 bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:6px_6px]"></div>
               
               <div className="flex items-center justify-center relative z-10 bg-bbq-charcoal/80 px-1 py-0.5 rounded shadow-sm backdrop-blur-[2px]">
                 <Flame size={22} strokeWidth={3} className="text-bbq-orange drop-shadow-md -mr-1" />
                 <Plus size={20} strokeWidth={4} className="text-white drop-shadow-md relative" />
               </div>
            </div>
          )}

          {/* Variant 9: The Lit Calculator */}
          {logoVariant === 9 && (
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-zinc-800 text-white rounded-xl shadow-[inset_0_-4px_0_rgba(194,65,12,1),0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-150 group-hover:shadow-[inset_0_-2px_0_rgba(194,65,12,1),0_2px_4px_rgba(0,0,0,0.1)] group-hover:translate-y-[2px]">
               <Calculator size={30} strokeWidth={2.2} className="relative z-10 text-white drop-shadow-md" />
               {/* Glowing orange 'screen' of the calculator */}
               <div className="absolute top-[12px] w-[18px] h-[8px] bg-bbq-orange rounded-[1px] shadow-[0_0_8px_rgba(194,65,12,0.8)] z-0"></div>
            </div>
          )}

          {/* Variant 10: The Hearth & Math (Large flame, inset plus) */}
          {logoVariant === 10 && (
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-b from-white to-gray-200 border border-gray-300 shadow-[0_4px_10px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden group-hover:shadow-[0_6px_15px_rgba(0,0,0,0.12)] group-hover:border-bbq-orange/40">
              {/* Subtle Math Grid Overlay for Light Background */}
              <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
              
              {/* Core Flame Glow */}
              <div className="absolute w-[150%] h-[150%] bg-bbq-orange/15 blur-[12px] rounded-full bottom-[-50%] group-hover:bg-bbq-orange/25 transition-colors duration-500"></div>

              {/* The Huge Flame */}
              <Flame size={36} strokeWidth={2} fill="currentColor" className="text-bbq-orange relative z-10 drop-shadow-[0_2px_4px_rgba(194,65,12,0.4)] transition-transform duration-500 group-hover:scale-110" />
              
              {/* The "Cutout" Plus Sign (Positioned to sit in the belly of the flame) */}
              <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[6px] transition-transform duration-500 group-hover:scale-110">
                <Plus size={16} strokeWidth={4} className="text-white drop-shadow-sm" />
              </div>
            </div>
          )}

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 leading-none flex items-center">
              MEAT
              <span className="text-white bg-bbq-orange px-2 py-0.5 rounded-sm transform -skew-x-12 ml-1 shadow-[2px_2px_0px_#111827] relative transition-transform duration-300 group-hover:scale-105">
                <span className="transform skew-x-12 inline-block">MATH</span>
              </span>
            </h1>
            <p className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mt-1.5 pl-0.5 leading-none">
              The Pitmaster's Calculator
            </p>
          </div>

          {/* Tip to tell users they can cycle it */}
          <div className="absolute -bottom-6 left-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold text-bbq-orange bg-orange-50 px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm border border-orange-200">
            Click to change logo!
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Unit Toggle Switch */}
          <button 
            onClick={onUnitToggle}
            className="relative flex items-center w-28 h-8 bg-gray-100/80 rounded-full p-1 border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-bbq-orange focus:ring-offset-1 transition hover:bg-gray-200/50 shadow-inner"
            aria-label="Toggle Units"
          >
            {/* Sliding Pill */}
            <div 
              className={`absolute top-1 left-1 bg-white w-12 h-6 rounded-full shadow-sm border border-gray-200 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                unit === 'metric' ? 'translate-x-14' : 'translate-x-0'
              }`} 
            />
            {/* Text Options */}
            <div className="relative w-full flex text-[10px] font-bold z-10 uppercase tracking-widest pointer-events-none">
              <span className={`flex-1 text-center transition-colors duration-300 ${unit === 'imperial' ? 'text-gray-900 drop-shadow-sm' : 'text-gray-400'}`}>
                LBS
              </span>
              <span className={`flex-1 text-center transition-colors duration-300 ${unit === 'metric' ? 'text-gray-900 drop-shadow-sm' : 'text-gray-400'}`}>
                KG
              </span>
            </div>
          </button>
          
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 text-sm font-bold bg-bbq-charcoal text-white px-4 py-2 rounded-xl hover:bg-black transition-colors shadow-sm"
          >
            <Printer size={16} />
            <span className="hidden sm:inline">Print List</span>
          </button>
        </div>

      </div>
    </header>
  );
}
