import { MeatDefinition } from '../types';

export const MEAT_DATABASE: MeatDefinition[] = [
  // BEEF
  {
    id: 'beef-brisket',
    name: 'Brisket',
    category: 'Beef',
    basePortionCooked: 0.5, 
    yieldPercentage: 0.5, // 50% shrinkage
    recommendations: {
      tempF: '200-205°F',
      tempC: '93-96°C',
      wood: 'Hickory, Oak, Pecan',
      notes: 'Smoke at 225-250°F. Wrap at the stall (~165°F) to preserve moisture. Rest at least 2 hours before slicing.'
    }
  },
  {
    id: 'beef-ribs',
    name: 'Short Ribs',
    category: 'Beef',
    basePortionCooked: 0.75, // Need more weight due to heavy bones
    yieldPercentage: 0.45, 
    recommendations: {
      tempF: '200-205°F',
      tempC: '93-96°C',
      wood: 'Oak, Hickory, Mesquite',
      notes: 'Smoke at 250-275°F. Do not wrap. Spritz with apple cider vinegar every hour after the bark sets.'
    }
  },
  {
    id: 'beef-burgers',
    name: 'Burgers',
    category: 'Beef',
    basePortionCooked: 0.25, // 1/4 lb cooked output
    yieldPercentage: 0.75, // Standard 1/3 lb pre-cooked patty shrinks to 1/4 lb
    recommendations: {
      tempF: '160°F',
      tempC: '71°C',
      wood: 'Oak, Charcoal',
      notes: 'Grill over direct high heat. Flip only once to maintain juices. Toast the buns.'
    }
  },
  {
    id: 'beef-steak',
    name: 'Steaks',
    category: 'Beef',
    basePortionCooked: 0.6,
    yieldPercentage: 0.85,
    recommendations: {
      tempF: '135°F (Med Rare)',
      tempC: '57°C (Med Rare)',
      wood: 'Mesquite, Charcoal',
      notes: 'Reverse sear: Smoke at 225°F until 15°F below target, then sear over a roaring fire.'
    }
  },
  {
    id: 'beef-tri-tip',
    name: 'Tri-Tip',
    category: 'Beef',
    basePortionCooked: 0.5,
    yieldPercentage: 0.8,
    recommendations: {
      tempF: '135°F (Med Rare)',
      tempC: '57°C (Med Rare)',
      wood: 'Red Oak, Hickory',
      notes: 'Crucial: Tri-tip has two different grain directions. Locate the intersection and slice accordingly!'
    }
  },
  {
    id: 'beef-fajitas',
    name: 'Fajitas',
    category: 'Beef',
    basePortionCooked: 0.35,
    yieldPercentage: 0.70, // Equals exactly 0.5 lbs raw per person (Tex-Mex catering gold standard)
    recommendations: {
      tempF: '130-135°F',
      tempC: '54-57°C',
      wood: 'Mesquite',
      notes: 'Marinate 4-8 hours. Grill over ripping hot direct heat for 3-4 mins per side. Slice against the grain.'
    }
  },
  {
    id: 'beef-mollejas',
    name: 'Mollejas',
    category: 'Beef',
    basePortionCooked: 0.3,
    yieldPercentage: 0.6,
    recommendations: {
      tempF: '160°F',
      tempC: '71°C',
      wood: 'Mesquite, Oak',
      notes: 'Boil in salted water with lemon to firm. Slice, then grill over ripping high heat until crispy.'
    }
  },
  {
    id: 'beef-dino-ribs',
    name: 'Dino Ribs',
    category: 'Beef',
    basePortionCooked: 0.8, // extremely high bone weight
    yieldPercentage: 0.40,  // very high loss due to fat and bone mass
    recommendations: {
      tempF: '203-208°F',
      tempC: '95-98°C',
      wood: 'Post Oak, Pecan',
      notes: 'These take 8-10 hours. Do not wrap until the bark is fully set and dark.'
    }
  },
  {
    id: 'beef-tomahawk',
    name: 'Tomahawk Steak',
    category: 'Beef',
    basePortionCooked: 0.7, 
    yieldPercentage: 0.65, // Adjusted down for massive unusable bone weight
    recommendations: {
      tempF: '130°F (Reverse Sear)',
      tempC: '54°C (Reverse Sear)',
      wood: 'Mesquite, Oak',
      notes: 'Smoke low at 225°F until 115°F internal, then sear over a roaring fire.'
    }
  },
  {
    id: 'beef-picanha',
    name: 'Picanha',
    category: 'Beef',
    basePortionCooked: 0.5,
    yieldPercentage: 0.80,
    recommendations: {
      tempF: '130°F (Med Rare)',
      tempC: '54°C (Med Rare)',
      wood: 'Oak, Charcoal',
      notes: 'Score the fat cap. Cook whole indirect, or slice into thick crescents, skewer, and grill open flame.'
    }
  },
  {
    id: 'beef-cheeks',
    name: 'Barbacoa',
    category: 'Beef',
    basePortionCooked: 0.35,
    yieldPercentage: 0.50,
    recommendations: {
      tempF: '205-210°F',
      tempC: '96-99°C',
      wood: 'Mesquite, Oak, Pecan',
      notes: 'Smoke low until bark sets, then braise in a covered pan with stock until they fall apart like butter.'
    }
  },
  {
    id: 'beef-chuck-roast',
    name: 'Chuck Roast',
    category: 'Beef',
    basePortionCooked: 0.4,
    yieldPercentage: 0.60,
    recommendations: {
      tempF: '200-205°F',
      tempC: '93-96°C',
      wood: 'Hickory, Oak',
      notes: 'Treat it like brisket for slicing, or smoke and braise until 205°F for pulled beef.'
    }
  },

  // PORK
  {
    id: 'pork-butt',
    name: 'Pulled Pork',
    category: 'Pork',
    basePortionCooked: 0.33, // 1/3 lb cooked per person
    yieldPercentage: 0.50, // Leads to exactly 0.66 lbs raw per person (Catering standard)
    recommendations: {
      tempF: '200-205°F',
      tempC: '93-96°C',
      wood: 'Apple, Cherry, Hickory',
      notes: 'Smoke at 250°F. Wrap tightly in foil at 165°F internal. Rest 1-2 hours before shredding.'
    }
  },
  {
    id: 'pork-ribs',
    name: 'Pork Ribs',
    category: 'Pork',
    basePortionCooked: 0.5, // Half rack generally has 0.5 lb meat
    yieldPercentage: 0.4, // High bone ratio
    recommendations: {
      tempF: '195-200°F',
      tempC: '90-93°C',
      wood: 'Apple, Cherry, Hickory',
      notes: 'Use 3-2-1 method for fall-off-the-bone, or no wrap for competition-style bite. Peel the silver skin!'
    }
  },
  {
    id: 'pork-sausage',
    name: 'Sausage',
    category: 'Pork',
    basePortionCooked: 0.25,
    yieldPercentage: 0.9,
    recommendations: {
      tempF: '165°F',
      tempC: '74°C',
      wood: 'Oak, Post Oak',
      notes: 'Cook over indirect heat at 250°F until casings are snappy. Don\'t poke holes or you\'ll lose the juice.'
    }
  },
  {
    id: 'pork-belly',
    name: 'Pork Belly',
    category: 'Pork',
    basePortionCooked: 0.35,
    yieldPercentage: 0.6,
    recommendations: {
      tempF: '200-205°F',
      tempC: '93-96°C',
      wood: 'Hickory, Apple, Cherry',
      notes: 'Smoke at 250°F until 190°F. Cube, toss in BBQ sauce and brown sugar, return to smoker until gooey.'
    }
  },
  {
    id: 'pork-chops',
    name: 'Pork Chops',
    category: 'Pork',
    basePortionCooked: 0.4,
    yieldPercentage: 0.75,
    recommendations: {
      tempF: '145°F',
      tempC: '63°C',
      wood: 'Apple, Cherry',
      notes: 'Reverse sear! Smoke at 225°F until 130°F, then sear hard. Do not overcook or they will dry out.'
    }
  },
  {
    id: 'pork-tenderloin',
    name: 'Pork Tenderloin',
    category: 'Pork',
    basePortionCooked: 0.35,
    yieldPercentage: 0.80,
    recommendations: {
      tempF: '145°F',
      tempC: '63°C',
      wood: 'Apple, Pecan',
      notes: 'Very lean. Cook fast or smoke slowly to 140°F and rest. Slices perfectly into juicy medallions.'
    }
  },
  {
    id: 'pork-chicharrones',
    name: 'Chicharrones',
    category: 'Pork',
    basePortionCooked: 0.25,
    yieldPercentage: 0.35, // Massive weight loss when rendering the fat out
    recommendations: {
      tempF: '350-375°F (Oil Temp)',
      tempC: '175-190°C (Oil Temp)',
      wood: 'N/A (Fried in Lard)',
      notes: 'Boil first, dry the meat/skin completely overnight, then deep fry in hot lard until puffed and extra crispy.'
    }
  },

  // POULTRY
  {
    id: 'poultry-whole',
    name: 'Whole Chicken',
    category: 'Poultry',
    basePortionCooked: 0.5,
    yieldPercentage: 0.6, // Bones & skin
    recommendations: {
      tempF: '165°F (Breast), 175°F (Thigh)',
      tempC: '74°C (Breast), 79°C (Thigh)',
      wood: 'Apple, Cherry, Pecan',
      notes: 'Spatchcock (remove backbone) to ensure even cooking. Dry brine overnight for incredibly crispy skin.'
    }
  },
  {
    id: 'poultry-wings',
    name: 'Chicken Wings',
    category: 'Poultry',
    basePortionCooked: 0.5,
    yieldPercentage: 0.5,
    recommendations: {
      tempF: '175-180°F', // Higher temp crispier texture
      tempC: '80-82°C',
      wood: 'Apple, Cherry',
      notes: 'Smoke at 250°F for an hour, then crank heat to 350°F+ to crisp the skin. Toss in sauce right before serving.'
    }
  },
  {
    id: 'poultry-fajitas',
    name: 'Chicken Fajitas',
    category: 'Poultry',
    basePortionCooked: 0.35,
    yieldPercentage: 0.75, // Chicken shrinks slightly less than steak fajitas
    recommendations: {
      tempF: '165°F',
      tempC: '74°C',
      wood: 'Mesquite, Pecan',
      notes: 'Pound flat for even cooking. Grill hot and fast. Pull exactly at 165°F to prevent drying out.'
    }
  },
  {
    id: 'poultry-whole-turkey',
    name: 'Whole Turkey',
    category: 'Poultry',
    basePortionCooked: 0.5,
    yieldPercentage: 0.50,
    recommendations: {
      tempF: '165°F (Breast), 175°F (Thigh)',
      tempC: '74°C (Breast), 79°C (Thigh)',
      wood: 'Apple, Cherry, Pecan',
      notes: 'Spatchcock for even cooking. Ensure the bird is fully thawed and dry before cooking. Brining is highly recommended for moisture.'
    }
  },
  {
    id: 'poultry-chicken-breast',
    name: 'Chicken Breast',
    category: 'Poultry',
    basePortionCooked: 0.4,
    yieldPercentage: 0.75,
    recommendations: {
      tempF: '160°F (carryover to 165°F)',
      tempC: '71°C',
      wood: 'Apple, Cherry',
      notes: 'Brining is essential as they have almost no fat. Don\'t overcook, pull at 160°F and rest.'
    }
  },
  {
    id: 'poultry-leg-quarters',
    name: 'Leg Quarters',
    category: 'Poultry',
    basePortionCooked: 0.6,
    yieldPercentage: 0.55,
    recommendations: {
      tempF: '175-185°F',
      tempC: '80-85°C',
      wood: 'Apple, Cherry, Hickory',
      notes: 'Dark meat handles higher heat well. Run your pit at 275-300°F for crispy skin and tender meat.'
    }
  },
  {
    id: 'poultry-drumsticks',
    name: 'Drumsticks',
    category: 'Poultry',
    basePortionCooked: 0.5,
    yieldPercentage: 0.50,
    recommendations: {
      tempF: '175-185°F',
      tempC: '80-85°C',
      wood: 'Apple, Cherry',
      notes: 'Great for lollipops! Smoke at 250°F, dunk in sauce, and return to smoker for 15 mins to set the glaze.'
    }
  },

  // SEAFOOD
  {
    id: 'seafood-salmon',
    name: 'Salmon',
    category: 'Seafood',
    basePortionCooked: 0.4,
    yieldPercentage: 0.85,
    recommendations: {
      tempF: '135-145°F',
      tempC: '57-63°C',
      wood: 'Alder, Cedar',
      notes: 'Smoke on a cedar plank at 225°F. Pull early; carryover cooking will finish it and keep it flaky.'
    }
  },
  {
    id: 'seafood-shrimp',
    name: 'Shrimp',
    category: 'Seafood',
    basePortionCooked: 0.35,
    yieldPercentage: 0.9,
    recommendations: {
      tempF: '120-140°F (Until pink/opaque)',
      tempC: '49-60°C',
      wood: 'Alder, Fruitwood',
      notes: 'Grill very hot and fast on skewers. 2-3 mins per side max to avoid rubbery texture.'
    }
  },
  {
    id: 'seafood-white-fish',
    name: 'White Fish',
    category: 'Seafood',
    basePortionCooked: 0.4,
    yieldPercentage: 0.85,
    recommendations: {
      tempF: '135-140°F',
      tempC: '57-60°C',
      wood: 'Alder, Apple',
      notes: 'Firm white fish handles direct grilling well. Oil grates thoroughly and flip carefully.'
    }
  },
  {
    id: 'seafood-scallops',
    name: 'Scallops',
    category: 'Seafood',
    basePortionCooked: 0.3,
    yieldPercentage: 0.80,
    recommendations: {
      tempF: '130°F (1-2 mins per side)',
      tempC: '54°C',
      wood: 'Alder',
      notes: 'Needs extremely hot heat for a very short time. Pat completely dry before searing for a proper crust.'
    }
  }
];
