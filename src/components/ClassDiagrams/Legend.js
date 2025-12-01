import React from 'react';

const Legend = () => {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="font-semibold text-gray-700 mb-3 text-sm">Relationship Types:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="flex items-center gap-3">
          <svg width="40" height="20">
            <line x1="0" y1="10" x2="30" y2="10" stroke="#22c55e" strokeWidth="2" />
            <polygon points="30,10 22,6 22,14" fill="white" stroke="#22c55e" strokeWidth="2" />
          </svg>
          <span>Inheritance (is-a)</span>
        </div>
        <div className="flex items-center gap-3">
          <svg width="40" height="20">
            <line x1="0" y1="10" x2="30" y2="10" stroke="#8b5cf6" strokeWidth="2" />
            <polygon points="0,10 6,6 0,2 -6,6" fill="#8b5cf6" />
          </svg>
          <span>Composition (has-a)</span>
        </div>
        <div className="flex items-center gap-3">
          <svg width="40" height="20">
            <line x1="0" y1="10" x2="30" y2="10" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
          <span>Association (uses)</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;