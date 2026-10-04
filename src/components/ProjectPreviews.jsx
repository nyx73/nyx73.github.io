import React, { useState, useEffect } from 'react';

// 1. Shopigo Preview
export function ShopigoPreview() {
  const [cartCount, setCartCount] = useState(2);
  const [addedId, setAddedId] = useState(null);

  const handleAdd = (id) => {
    setCartCount(prev => prev + 1);
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <div className="w-full rounded-xl bg-slate-900/90 border border-slate-700/60 p-4 text-xs font-sans text-slate-200 select-none">
      {/* Mock store header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-1.5 font-bold text-white tracking-tight">
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          <span>Shopigo</span>
          <span className="text-[10px] font-mono text-slate-400 font-normal ml-1">v1.0</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] text-slate-300">
            ♡ Wishlist (3)
          </span>
          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-500/20 border border-sky-500/40 text-[10px] text-sky-300 font-bold">
            🛒 Cart ({cartCount})
          </span>
        </div>
      </div>

      {/* Mini Product Shelf */}
      <div className="grid grid-cols-2 gap-2.5 mt-3">
        <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="h-14 rounded-md bg-gradient-to-br from-slate-700/40 to-slate-800/80 flex items-center justify-center text-[10px] text-slate-400 font-mono mb-2">
              Wireless Headphones
            </div>
            <div className="font-semibold text-white text-[11px] truncate">Studio Audio Pro</div>
            <div className="text-sky-400 font-mono text-xs font-bold mt-0.5">₹1,499</div>
          </div>
          <button
            onClick={() => handleAdd(1)}
            type="button"
            className={`mt-2 py-1 px-2 rounded text-[10px] font-medium transition-all ${
              addedId === 1 ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-sky-500/20 hover:bg-sky-500 hover:text-slate-950 text-sky-300 border border-sky-500/30'
            }`}
          >
            {addedId === 1 ? 'Added ✓' : '+ Add Cart'}
          </button>
        </div>

        <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="h-14 rounded-md bg-gradient-to-br from-slate-700/40 to-slate-800/80 flex items-center justify-center text-[10px] text-slate-400 font-mono mb-2">
              Minimal Mechanical Keyboard
            </div>
            <div className="font-semibold text-white text-[11px] truncate">Tactile Keyset</div>
            <div className="text-sky-400 font-mono text-xs font-bold mt-0.5">₹2,299</div>
          </div>
          <button
            onClick={() => handleAdd(2)}
            type="button"
            className={`mt-2 py-1 px-2 rounded text-[10px] font-medium transition-all ${
              addedId === 2 ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-sky-500/20 hover:bg-sky-500 hover:text-slate-950 text-sky-300 border border-sky-500/30'
            }`}
          >
            {addedId === 2 ? 'Added ✓' : '+ Add Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

// 2. Traffic-OPS Preview
export function TrafficOpsPreview() {
  const [activeLane, setActiveLane] = useState(1);
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          // cycle to next lane prioritizing density
          setActiveLane(curr => (curr === 1 ? 3 : curr === 3 ? 2 : 1));
          return 6;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const lanes = [
    { id: 1, name: "Lane 1 (North)", density: "85%", level: "HIGH", color: "bg-rose-500" },
    { id: 2, name: "Lane 2 (East)", density: "25%", level: "LOW", color: "bg-emerald-500" },
    { id: 3, name: "Lane 3 (West)", density: "55%", level: "MED", color: "bg-amber-500" },
  ];

  return (
    <div className="w-full rounded-xl bg-slate-900/90 border border-slate-700/60 p-4 text-xs font-mono text-slate-200 select-none">
      {/* Simulation Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-white tracking-tight font-sans">Traffic-OPS Simulation</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">
          Prototype
        </span>
      </div>

      {/* Lane density list */}
      <div className="space-y-2 mt-3">
        {lanes.map((lane) => {
          const isGreen = activeLane === lane.id;
          return (
            <div
              key={lane.id}
              className={`p-2 rounded-lg border transition-all ${
                isGreen
                  ? 'bg-slate-800/90 border-emerald-500/50 shadow-sm'
                  : 'bg-slate-950/40 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-slate-300 font-medium">{lane.name}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                    lane.level === 'HIGH' ? 'text-rose-400' : lane.level === 'MED' ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {lane.level}
                  </span>
                  <span className={`w-2.5 h-2.5 rounded-full ${isGreen ? 'bg-emerald-400 shadow-sm shadow-emerald-400 animate-pulse' : 'bg-rose-500/40'}`} />
                </div>
              </div>

              {/* Density Bar */}
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className={`h-full ${lane.color} transition-all duration-500`}
                  style={{ width: lane.density }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Adaptive Decision Status */}
      <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>GREEN → Lane {activeLane}</span>
        </div>
        <span className="text-slate-400 font-mono">
          Timer: <span className="text-white font-bold">{countdown}s</span>
        </span>
      </div>
    </div>
  );
}

// 3. Financial Crime Detection Preview
export function FinancialCrimePreview() {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <div className="w-full rounded-xl bg-slate-900/90 border border-slate-700/60 p-4 text-xs font-mono text-slate-200 select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
        <div className="flex items-center gap-2 font-sans font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span>Transaction Network Graph</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
          <span>Risk: 88/100 (HIGH)</span>
        </div>
      </div>

      {/* SVG Network Visualizer */}
      <div className="relative py-2 flex items-center justify-center">
        <svg viewBox="0 0 280 130" className="w-full h-28 overflow-visible">
          {/* Edges */}
          <line x1="50" y1="35" x2="140" y2="25" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
          <line x1="140" y1="25" x2="230" y2="45" stroke="#f43f5e" strokeWidth="2.5" />
          <line x1="230" y1="45" x2="160" y2="105" stroke="#f43f5e" strokeWidth="2.5" />
          <line x1="160" y1="105" x2="70" y2="95" stroke="#f43f5e" strokeWidth="2.5" />
          <line x1="70" y1="95" x2="140" y2="25" stroke="#f43f5e" strokeWidth="2.5" />

          {/* Node A */}
          <g onMouseEnter={() => setHoveredNode('Acc A')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
            <circle cx="50" cy="35" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <text x="50" y="39" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="bold">Acc A</text>
          </g>

          {/* Node B (Hub) */}
          <g onMouseEnter={() => setHoveredNode('Acc B (Hub)')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
            <circle cx="140" cy="25" r="15" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="2.5" />
            <text x="140" y="29" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="bold">Acc B</text>
          </g>

          {/* Node C */}
          <g onMouseEnter={() => setHoveredNode('Acc C (Mule)')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
            <circle cx="230" cy="45" r="14" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="2" />
            <text x="230" y="49" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="bold">Acc C</text>
          </g>

          {/* Node D */}
          <g onMouseEnter={() => setHoveredNode('Acc D (Mule)')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
            <circle cx="160" cy="105" r="14" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="2" />
            <text x="160" y="109" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="bold">Acc D</text>
          </g>

          {/* Node E */}
          <g onMouseEnter={() => setHoveredNode('Acc E (Receiver)')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
            <circle cx="70" cy="95" r="14" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="2" />
            <text x="70" y="99" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="bold">Acc E</text>
          </g>
        </svg>
      </div>

      {/* Flag Info Footer */}
      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px]">
        <span className="text-rose-400 font-bold">
          {hoveredNode ? `Selected: ${hoveredNode}` : '⚠ Detected 4-Cycle Mule Loop: B → C → D → E → B'}
        </span>
        <span className="text-slate-400">NetworkX Graph</span>
      </div>
    </div>
  );
}

// 4. Expense Tracker Preview
export function ExpenseTrackerPreview() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  return (
    <div className="w-full rounded-xl bg-slate-900/90 border border-slate-700/60 p-4 text-xs font-sans text-slate-200 select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <span className="text-[10px] text-slate-400 font-mono uppercase block">Budget Dashboard</span>
          <span className="font-bold text-white text-sm">Monthly Expenses</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700 text-[10px]">
          <button
            onClick={() => setSelectedPeriod('month')}
            className={`px-2 py-0.5 rounded ${selectedPeriod === 'month' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            This Month
          </button>
          <button
            onClick={() => setSelectedPeriod('prev')}
            className={`px-2 py-0.5 rounded ${selectedPeriod === 'prev' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Last
          </button>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="space-y-2 mt-3 font-mono text-[11px]">
        <div>
          <div className="flex justify-between text-slate-300 mb-0.5">
            <span>Food &amp; Dining</span>
            <span className="text-white font-semibold">₹4,200</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-sky-400 rounded-full" style={{ width: '43%' }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-slate-300 mb-0.5">
            <span>Travel &amp; Fuel</span>
            <span className="text-white font-semibold">₹2,100</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-400 rounded-full" style={{ width: '21%' }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-slate-300 mb-0.5">
            <span>Bills &amp; Utilities</span>
            <span className="text-white font-semibold">₹3,500</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400 rounded-full" style={{ width: '36%' }} />
          </div>
        </div>
      </div>

      {/* Total Aggregation */}
      <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-xs">
        <span className="text-slate-400">Total Tracked:</span>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-emerald-400 font-bold text-sm">₹9,800</span>
          <span className="text-[10px] text-slate-400 font-mono">/ ₹12,000</span>
        </div>
      </div>
    </div>
  );
}
