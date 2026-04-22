import React, { useState } from 'react';
import { CalculationResult, GuestCount, MeasurementUnit } from '../types';
import { X, Download } from 'lucide-react';

interface Props {
  results: CalculationResult[];
  unit: MeasurementUnit;
  totalRawImperial: number;
  totalRawMetric: number;
  guests: GuestCount;
  totalPortions: number;
}

export function ResultsDashboard({ results, unit, totalRawImperial, totalRawMetric, guests, totalPortions }: Props) {
  const [showPreview, setShowPreview] = useState(false);

  if (results.length === 0) {
    return null;
  }

  const isMetric = unit === 'metric';

  const formatWeight = (imperial: number, metric: number) => {
    return isMetric ? `${metric.toFixed(1)} kg` : `${imperial.toFixed(1)} lbs`;
  };

  const getGuestString = () => {
    const parts = [];
    if (guests.adults > 0) parts.push(`${guests.adults} Adults`);
    if (guests.kids > 0) parts.push(`${guests.kids} Kids`);
    if (guests.bigEaters > 0) parts.push(`${guests.bigEaters} Big Eaters`);
    
    return parts.length > 0 ? `Calculated for ${parts.join(', ')}` : 'Calculated for 0 Guests';
  };

  const PrintableList = () => (
    <div className="print:block">
      {/* Print Only Header */}
      <div className="hidden print:block mb-6 border-b-2 border-black pb-4 print-card-break">
        <h1 className="text-3xl font-bold bg-white text-black">MeatMath.app Shopping List</h1>
        <p className="text-gray-600 mt-2 text-sm text-black font-mono">
          {getGuestString()} ({totalPortions} Standard Portions)
        </p>
      </div>

      {results.map((res, i) => (
        <div key={i} className="mb-4 glass-card rounded-2xl overflow-hidden print:border-black print:mb-6 print-card-break print:shadow-none print:bg-white print:border-2">
          {/* Header / Meat Name */}
          <div className="bg-gray-50/50 border-b border-gray-100 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between print:bg-white print:border-b-2 print:border-black">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{res.meat.name}</h3>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{res.meat.category}</p>
            </div>
            <div className="mt-2 sm:mt-0 text-left sm:text-right">
              <p className="text-2xl font-black text-bbq-orange print:text-black">
                Buy {formatWeight(res.rawWeightNeededImperial, res.rawWeightNeededMetric)} raw
              </p>
              <p className="text-sm text-gray-500 font-medium">
                Yields ~{formatWeight(res.cookedWeightExpectedImperial, res.cookedWeightExpectedMetric)} cooked
              </p>
            </div>
          </div>

          {/* Recommendations / Cook Details */}
          <div className="px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 print:bg-white">
            <div>
              <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1 print:text-black">Target Temp</span>
              <span className="font-semibold text-gray-800 text-sm print:text-black">
                {isMetric ? res.meat.recommendations.tempC : res.meat.recommendations.tempF}
              </span>
            </div>
            <div>
              <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1 print:text-black">Wood Type</span>
              <span className="font-semibold text-gray-800 text-sm print:text-black">{res.meat.recommendations.wood}</span>
            </div>
            <div className="col-span-2 md:col-span-2">
              <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1 print:text-black">Cook Notes</span>
              <span className="font-medium text-gray-600 text-sm leading-tight print:text-black">{res.meat.recommendations.notes}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mt-8">
      
      <div className="flex items-center justify-between mb-4 no-print">
        <h2 className="text-2xl font-bold">Shopping List & Plan</h2>
      </div>

      <div className="space-y-4 print:space-y-0 print:block">
        <PrintableList />

        {/* Global Summary */}
        <div className="rounded-3xl bg-gray-900 border border-gray-800 text-white p-6 shadow-2xl relative overflow-hidden mt-8 print:border-2 print:border-black print:bg-white print:text-black print:shadow-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-bbq-orange opacity-20 blur-3xl print:hidden"></div>
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest print:text-black">Total Requirement</span>
          
          <div className="mt-4 relative z-10">
            <div className="flex items-baseline gap-2">
              <h2 className="text-4xl sm:text-6xl font-black text-white print:text-black">
                {isMetric ? totalRawMetric.toFixed(1) : totalRawImperial.toFixed(1)}
              </h2>
              <span className="text-2xl font-bold text-gray-400 print:text-gray-600">
                {isMetric ? 'KG' : 'LBS'}
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-2 print:text-gray-500">
              Raw Meat weight suggested for purchase across {results.length} item{results.length > 1 ? 's' : ''}
            </p>
          </div>

          <button 
            onClick={() => setShowPreview(true)}
            className="mt-8 w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-orange-50 transition-colors uppercase text-sm tracking-tighter no-print relative z-10 flex items-center justify-center gap-2"
          >
            <Download size={18} /> Preview & Save PDF
          </button>
        </div>
      </div>

      {/* Preview Modal Overlay (No Print) */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm no-print">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <h3 className="font-bold text-lg">PDF Document Preview</h3>
              <button onClick={() => setShowPreview(false)} className="p-2 hover:bg-gray-200 rounded-full transition">
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Body - The "Piece of Paper" */}
            <div className="p-6 md:p-10 overflow-y-auto flex-1 bg-gray-100 flex justify-center items-start">
               <div className="bg-white shadow-xl max-w-3xl w-full p-8 md:p-12 border border-gray-200 select-none">
                  <div className="mb-8 border-b-2 border-black pb-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-black tracking-tight">MeatMath.app Shopping List</h1>
                    <p className="text-gray-600 mt-2 text-sm text-black font-mono">
                      {getGuestString()} ({totalPortions} Standard Portions)
                    </p>
                  </div>

                  <div className="space-y-6">
                    {results.map((res, i) => (
                      <div key={i} className="border-2 border-black p-5">
                         <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-black pb-4 mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-black">{res.meat.name}</h3>
                              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{res.meat.category}</p>
                            </div>
                            <div className="mt-2 sm:mt-0 sm:text-right">
                              <p className="text-2xl font-black text-black">
                                Buy {formatWeight(res.rawWeightNeededImperial, res.rawWeightNeededMetric)} raw
                              </p>
                              <p className="text-sm font-medium text-gray-600">
                                Yields ~{formatWeight(res.cookedWeightExpectedImperial, res.cookedWeightExpectedMetric)} cooked
                              </p>
                            </div>
                         </div>
                         
                         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                              <span className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Target Temp</span>
                              <span className="font-bold text-black text-sm">
                                {isMetric ? res.meat.recommendations.tempC : res.meat.recommendations.tempF}
                              </span>
                            </div>
                            <div>
                              <span className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Wood Type</span>
                              <span className="font-bold text-black text-sm">{res.meat.recommendations.wood}</span>
                            </div>
                            <div className="col-span-2 lg:col-span-2">
                              <span className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Cook Notes</span>
                              <span className="font-bold text-black text-sm leading-tight">{res.meat.recommendations.notes}</span>
                            </div>
                         </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-2 border-black p-6 flex flex-col items-center justify-center text-center">
                      <span className="text-sm font-black text-black uppercase tracking-widest mb-2 border-b-2 border-black pb-1">Total Requirement</span>
                      <div className="flex items-baseline gap-2 mt-2">
                        <h2 className="text-5xl font-black text-black">
                          {isMetric ? totalRawMetric.toFixed(1) : totalRawImperial.toFixed(1)}
                        </h2>
                        <span className="text-2xl font-black text-black">
                          {isMetric ? 'KG' : 'LBS'}
                        </span>
                      </div>
                  </div>
               </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-200 bg-white grid grid-cols-2 gap-4">
               <button 
                  onClick={() => setShowPreview(false)}
                  className="py-3 font-bold text-gray-600 hover:bg-gray-100 rounded-xl transition"
               >
                 Cancel
               </button>
               <button 
                  onClick={() => {
                    window.print();
                    setShowPreview(false);
                  }}
                  className="bg-bbq-orange text-white py-3 font-bold rounded-xl hover:bg-orange-600 flex justify-center items-center gap-2 transition"
               >
                 <Download size={18} /> Save as PDF
               </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
