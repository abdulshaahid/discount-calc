import React, { useState, useCallback } from 'react';
import { Calculator, Tag, Percent } from 'lucide-react';

function App() {
  const [originalPrice, setOriginalPrice] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<string>('');

  const calculateDiscount = useCallback(() => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);
    
    if (isNaN(price) || isNaN(discount)) return { savings: 0, finalPrice: 0 };
    
    const savings = (price * discount) / 100;
    const finalPrice = price - savings;
    
    return {
      savings: savings.toFixed(2),
      finalPrice: finalPrice.toFixed(2)
    };
  }, [originalPrice, discountPercent]);

  const { savings, finalPrice } = calculateDiscount();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl shadow-purple-900/20 p-8 border border-gray-700">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="w-8 h-8 text-purple-400" />
          <h1 className="text-2xl font-bold text-white">Discount Calculator</h1>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Original Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className="w-full pl-8 pr-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all outline-none"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Discount Percentage
            </label>
            <div className="relative">
              <input
                type="number"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(e.target.value)}
                className="w-full pl-4 pr-8 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all outline-none"
                placeholder="0"
                max="100"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">%</span>
            </div>
          </div>

          <div className="h-px bg-gray-700 my-8"></div>

          <div className="bg-gray-900/50 rounded-xl p-6 space-y-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-gray-300">You Save</span>
              </div>
              <span className="text-lg font-semibold text-emerald-400">${savings}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-gray-300">Final Price</span>
              </div>
              <span className="text-lg font-semibold text-purple-400">${finalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;