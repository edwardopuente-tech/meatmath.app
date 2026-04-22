// Types for MeatMath.app

export type MeasurementUnit = 'imperial' | 'metric';
export type MenuStyle = 'meat-only' | 'with-sides';

export interface GuestCount {
  adults: number;
  kids: number;
  bigEaters: number; 
}

export type MeatCategory = 'Beef' | 'Pork' | 'Poultry' | 'Seafood' | 'Custom';

export interface MeatDefinition {
  id: string;
  name: string;
  category: MeatCategory;
  // How many pounds (or kg depending on base) of *cooked* meat expected per standard adult portion
  basePortionCooked: number; 
  // Yield percentage (cooked weight / raw weight) e.g. 0.5 for Brisket (50% loss)
  yieldPercentage: number;
  recommendations: {
    tempF: string;
    tempC: string;
    wood: string;
    notes: string;
  };
  isCustom?: boolean;
}

export interface SelectedMeat extends MeatDefinition {
  id: string;
}

export interface CalculationResult {
  meat: SelectedMeat;
  rawWeightNeededImperial: number; // in lbs
  rawWeightNeededMetric: number;   // in kg
  cookedWeightExpectedImperial: number; // in lbs
  cookedWeightExpectedMetric: number;   // in kg
}
