import React from 'react';
import { Flame, Plus } from 'lucide-react';
import { MeasurementUnit } from '../types';

interface Props {
  unit: MeasurementUnit;
  onUnitToggle: () => void;
}

export function Header({ unit, onUnitToggle }: Props) {
  return (
    <header className="no-print bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        
        {/* Logo Stack Container */}
        <div className="flex items-center gap-4 md:gap-6 group relative">
          {/* Logo Icon (Hearth & Math) */}
          <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-white to-gray-200 border border-gray-300 shadow-[0_4px_10px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Subtle Math Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
            
            {/* Core Flame Glow */}
            <div className="absolute w-[150%] h-[150%] bg-bbq-orange/15 blur-[12px] rounded-full bottom-[-50%]"></div>

            {/* The Huge Flame */}
            <Flame size={64} strokeWidth={2.2} fill="currentColor" className="text-bbq-orange relative z-10 drop-shadow-[0_2px_4px_rgba(194,65,12,0.4)]" />
            
            {/* The "Cutout" Plus Sign */}
            <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[12px]">
              <Plus size={30} strokeWidth={4.5} className="text-white drop-shadow-sm" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {/* Hearth & Math Lettering */}
            <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-gray-900 leading-none">
              MEAT<span className="text-bbq-orange">MATH</span>
            </h1>
            <p className="flex items-center gap-1.5 text-xs md:text-sm text-gray-500 font-black uppercase tracking-[0.2em] mt-2 pl-0.5 leading-none">
              The Pitmaster's Calculator
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Unit Toggle Switch */}
          <button 
            onClick={onUnitToggle}
            className="relative flex items-center w-40 h-14 bg-gray-100/80 rounded-full p-2 border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-bbq-orange focus:ring-offset-1 transition hover:bg-gray-200/50 shadow-inner"
            aria-label="Toggle Units"
          >
            {/* Sliding Pill */}
            <div 
              className={`absolute top-2 left-2 bg-white w-18 h-10 rounded-full shadow-sm border border-gray-200 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                unit === 'metric' ? 'translate-x-[80px]' : 'translate-x-0'
              }`} 
            />
            {/* Text Options */}
            <div className="relative w-full flex text-base font-bold z-10 uppercase tracking-[0.2em] pointer-events-none">
              <span className={`flex-1 text-center transition-colors duration-300 ${unit === 'imperial' ? 'text-gray-900 drop-shadow-sm' : 'text-gray-400'}`}>
                LBS
              </span>
              <span className={`flex-1 text-center transition-colors duration-300 ${unit === 'metric' ? 'text-gray-900 drop-shadow-sm' : 'text-gray-400'}`}>
                KG
              </span>
            </div>
          </button>
        </div>

      </div>
    </header>
  );
}
