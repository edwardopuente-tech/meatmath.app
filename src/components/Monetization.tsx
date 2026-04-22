import React from 'react';

// Adsense Placeholder
export function AdBanner() {
  return (
    <div className="w-full bg-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center my-6 no-print min-h-[120px] border border-gray-300">
      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Advertisement</span>
    </div>
  );
}

// Affiliate Link Placeholder
export function AffiliateGearSection() {
  const products = [
    { 
      name: "MEATER Plus Smart Meat Thermometer", 
      price: "$99.95", 
      rating: 4.8,
      reviews: "24.1k",
      imageUrl: "https://images.unsplash.com/photo-1585238466632-d17e75345aef?auto=format&fit=crop&w=400&q=80",
      description: 'The ultimate tool for precision BBQ. Features 100% wire-free dual sensors that monitor internal meat temperature up to 212°F and ambient pit temp up to 527°F simultaneously. Track your cooks up to 165ft away from the smart companion app.',
      highlight: 'Built-in Guided Cook System',
      cta: "Check Latest Price",
      link: "#"
    },
    { 
      name: "Dalstrong Gladiator Series Butcher Knife", 
      price: "$79.99", 
      rating: 4.9,
      reviews: "8.4k",
      imageUrl: "https://images.unsplash.com/photo-1593010978330-844fb2ad4a26?auto=format&fit=crop&w=400&q=80", 
      description: 'A ruthlessly sharp, 14-inch extra-long slicing knife forged from high-carbon German steel. Engineered specifically for trimming large briskets, slicing ribs without tearing, and breaking down whole poultry with zero fatigue.',
      highlight: 'Includes PerfectFit Sheath',
      cta: "Shop Dalstrong Direct",
      link: "#"
    },
    { 
      name: "Spiceology Ultimate Rub & Blend Set", 
      price: "$45.00", 
      rating: 4.7,
      reviews: "3.2k",
      imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80", 
      description: 'An elite 6-pack assortment of chef-crafted rubs. Features championship-level sweet and spicy blends including Honey Habanero, Smoky Honey Habanero, and Black Magic. The ultimate arsenal for pork ribs, chicken wings, and massive beef roasts.',
      highlight: 'Chef-Owned & Operated',
      cta: "See Available Flavors",
      link: "#"
    }
  ];

  return (
    <div className="w-full mt-10 no-print">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-black text-gray-900 border-l-4 border-bbq-orange pl-3">Pro-Grade BBQ Gear</h3>
        <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded uppercase tracking-wider font-bold">Sponsored Matches</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div key={i} className="glass-card rounded-2xl p-5 flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full border border-gray-100/80">
            
            <div className="relative mb-5 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
              <img 
                src={p.imageUrl} 
                alt={p.name}
                referrerPolicy="no-referrer"
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110 bg-gray-50"
              />
              <div className="absolute top-2 right-2 bg-white/95 backdrop-blur px-2 py-1 rounded shadow text-[10px] font-black text-gray-800 flex items-center gap-1">
                ⭐ {p.rating} <span className="text-gray-400 font-medium">({p.reviews})</span>
              </div>
            </div>
            
            <h4 className="text-base font-black leading-tight text-gray-900 mb-2">{p.name}</h4>
            
            <div className="bg-orange-50 text-bbq-orange text-xs font-bold px-3 py-1.5 rounded-md mb-3 inline-block self-start border border-orange-100">
              🔥 {p.highlight}
            </div>
            
            <p className="text-xs text-gray-600 leading-relaxed flex-1 mb-4">
              {p.description}
            </p>
            
            <div className="mt-auto pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-black text-gray-900">{p.price}</span>
                <span className="text-[10px] font-bold text-gray-400 line-through">
                  {(parseFloat(p.price.replace('$', '')) * 1.3).toFixed(2)}
                </span>
              </div>
              <a 
                href={p.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-xs font-black text-white bg-bbq-orange px-4 py-3 rounded-xl hover:bg-orange-700 transition-colors shadow-md shadow-orange-600/20"
              >
                {p.cta} &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
