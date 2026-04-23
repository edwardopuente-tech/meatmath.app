import React from 'react';

export function SeoFaqSection() {
  return (
    <section className="w-full mt-16 mb-12 no-print border-t border-gray-200 pt-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {/* Core Problem-Solution & Event Targets */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-bbq-charcoal mb-2">How much meat per person do I need for a party?</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              When planning a cookout, family reunion, wedding, or graduation party, the golden rule is <strong>1/2 pound (8 ounces) of cooked meat per adult</strong> if you are serving classic sides. If you are serving a "meat heavy" menu like a traditional Texas BBQ or skipping sides completely, bump that up to <strong>3/4 pound per person</strong>. Our free BBQ meat calculator handles all this math for you!
            </p>
          </div>

          {/* Core Scale & BBQ Targets */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-bbq-charcoal mb-2">How much brisket for 50 people?</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Brisket has one of the highest shrinkage rates in BBQ, typically losing <strong>50% of its weight</strong> after trimming and rendering fat. To serve 50 people a standard 1/2 pound portion of cooked brisket, you need 25 lbs of finished meat. That means you must buy <strong>50 pounds of raw, untrimmed brisket</strong> at the store. 
            </p>
          </div>

          {/* RGV / Latino Targets */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-bbq-charcoal mb-2">How much carne asada and fajita meat per person?</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              For a taquiza, quinceañera, or backyard carne asada, you should plan for about <strong>1/2 pound of raw fajita meat (skirt steak) or barbacoa per guest</strong>. Because tacos are loaded with tortillas, rice, beans, and salsa, the meat goes much further. If preparing tacos exclusively, 10 lbs of raw carne asada will easily feed around 20-25 guests.
            </p>
          </div>

          {/* Tool / Calculator Targets */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-bbq-charcoal mb-2">How does this catering food calculation work?</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Our <strong>food calculator for parties</strong> uses professional catering formulas. We evaluate your head count (adults, big eaters, kids) and cross-reference it against the specific raw-to-cooked yield ratio of each meat (like pulled pork, chicken, and ribs). Whether you're wondering how much food for 20 people or 100+ guests, MeatMath generates an exact raw shopping list so you never run out of food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
