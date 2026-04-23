import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Header } from './components/Header';
import { GuestCounter } from './components/GuestCounter';
import { MeatPicker } from './components/MeatPicker';
import { ResultsDashboard } from './components/ResultsDashboard';
import { SeoFaqSection } from './components/SeoFaqSection';
import { AdBanner, AffiliateGearSection } from './components/Monetization';
import { useMeatMath } from './hooks/useMeatMath';
import { GuestCount, SelectedMeat, MeasurementUnit, MenuStyle } from './types';

export default function App() {
  const [unit, setUnit] = useState<MeasurementUnit>('imperial');
  const [menuStyle, setMenuStyle] = useState<MenuStyle>('with-sides');
  const [guests, setGuests] = useState<GuestCount>({ adults: 0, kids: 0, bigEaters: 0 });
  const [selectedMeats, setSelectedMeats] = useState<SelectedMeat[]>([]);

  const mathOutput = useMeatMath(guests, selectedMeats, menuStyle);

  return (
    <div className="min-h-screen pb-20">
      <Header unit={unit} onUnitToggle={() => setUnit(u => u === 'imperial' ? 'metric' : 'imperial')} />
      
      <main className="max-w-5xl mx-auto px-4 md:px-6 pt-8">
        
        {/* Intro */}
        <div className="mb-6 text-center sm:text-left no-print">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Never under-feed <br className="sm:hidden" />a crowd again.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            Whether you're planning a cookout, wedding, tailgate, or family reunion—simply select your guests, pick your meats, and let the ultimate <strong>BBQ meat calculator</strong> do the rest.
          </p>
        </div>

        {/* Trust Badge */}
        <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-5 mb-10 flex gap-5 items-start no-print max-w-2xl mx-auto sm:mx-0">
          <div className="bg-white border border-gray-200 p-3 rounded-xl text-bbq-orange shrink-0 shadow-sm">
            <Calculator size={24} />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-1.5">Pitmaster-Grade Precision</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              We execute the golden rule: <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-200 text-bbq-orange font-bold">Raw Meat = (People × Serving Size) / Yield</span>. 
              The engine automatically injects BBQ-specific real-world logic (shrinkage rates, kid sizes, and multi-meat spreads) so you don't have to calculate those manually!
            </p>
          </div>
        </div>

        {/* <AdBanner /> */}

        <div className="print:block grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 print:hidden">
            <GuestCounter guests={guests} onChange={setGuests} menuStyle={menuStyle} onMenuStyleChange={setMenuStyle} />
            <MeatPicker selectedMeats={selectedMeats} onChange={setSelectedMeats} />
          </div>

          {/* Results Column */}
          <div className="lg:col-span-7 print:block">
            {selectedMeats.length === 0 ? (
              <div className="glass-card flex flex-col items-center justify-center rounded-2xl h-full min-h-[400px] text-center p-8 no-print mt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Shopping List is Empty</p>
                <p className="text-xs text-gray-400 mt-2">Select at least one meat type from the configuration menu to generate your plan.</p>
              </div>
            ) : (
              <ResultsDashboard 
                results={mathOutput.results} 
                unit={unit}
                totalRawImperial={mathOutput.totalRawImperial}
                totalRawMetric={mathOutput.totalRawMetric}
                guests={guests}
                totalPortions={mathOutput.totalPortionsNeeded}
              />
            )}
          </div>
        </div>

        <SeoFaqSection />
        
        {/* <div className="border-t border-gray-200 pt-2 mb-8">
          <AffiliateGearSection />
        </div> */}

      </main>
    </div>
  );
}
