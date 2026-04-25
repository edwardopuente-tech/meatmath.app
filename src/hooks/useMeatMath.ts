import { useMemo } from 'react';
import { GuestCount, SelectedMeat, CalculationResult, MenuStyle } from '../types';

export function useMeatMath(guests: GuestCount, selectedMeats: SelectedMeat[], menuStyle: MenuStyle) {
  return useMemo(() => {
    // 1. Calculate Multiplier (Total Adult Equivalents)
    // Adult = 1, Kid = 0.5, Big Eater = 1.5
    const totalPortionsNeeded = (guests.adults * 1) + (guests.kids * 0.5) + (guests.bigEaters * 1.5);

    // 2. Adjust portion sizes based on number of meats served.
    // If you serve multiple meats, people eat slightly less of each individual meat.
    // 1 meat = 100%, 2 meats = 60%, 3 meats = 50%, 4+ meats = 40%
    const meatCount = selectedMeats.length;
    let baseVarietyMultiplier = 1;
    if (meatCount === 2) baseVarietyMultiplier = 0.6;
    else if (meatCount === 3) baseVarietyMultiplier = 0.5;
    else if (meatCount >= 4) baseVarietyMultiplier = 0.4;

    // Calculate total weight to normalize popularity
    const totalPopularityWeight = selectedMeats.reduce((sum, meat) => sum + (meat.popularityWeight || 1.0), 0);

    // Spread Multiplier: if it's meat only, increase portions by 30%
    const spreadMultiplier = menuStyle === 'meat-only' ? 1.30 : 1.0;

    // 3. Calculate requirements per meat accurately
    const results: CalculationResult[] = selectedMeats.map((meat) => {
      // Preference Multiplier: how much of the "variety pool" this specific meat takes
      // If popularity is 1.0 and total is 2.0 (for 2 meats), multiplier is (1.0/2.0)*2 = 1.0 (No change)
      // If meat is popular (1.5) and other is not (0.5), multiplier is (1.5/2.0)*2 = 1.5
      const popularityMultiplier = meatCount > 0 ? ((meat.popularityWeight || 1.0) / totalPopularityWeight) * meatCount : 1;

      // Accurate cooked weight needed for ALL guests (in lbs) factoring in variety, popularity and spread type
      const exactCookedWeightImperial = meatCount > 0 
        ? (totalPortionsNeeded * meat.basePortionCooked * baseVarietyMultiplier * popularityMultiplier * spreadMultiplier) 
        : 0;
      
      // Accurate raw weight needed to yield that cooked weight
      const exactRawWeightImperial = meatCount > 0 ? (exactCookedWeightImperial / meat.yieldPercentage) : 0;

      // Metric conversions (1 lb = 0.453592 kg)
      return {
        meat,
        rawWeightNeededImperial: exactRawWeightImperial,
        cookedWeightExpectedImperial: exactCookedWeightImperial,
        rawWeightNeededMetric: exactRawWeightImperial * 0.453592,
        cookedWeightExpectedMetric: exactCookedWeightImperial * 0.453592,
      };
    });

    // Calculate totals
    const totalRawImperial = results.reduce((acc, r) => acc + r.rawWeightNeededImperial, 0);
    const totalRawMetric = results.reduce((acc, r) => acc + r.rawWeightNeededMetric, 0);

    return {
      totalPortionsNeeded,
      results,
      totalRawImperial,
      totalRawMetric,
    };
  }, [guests, selectedMeats, menuStyle]);
}
