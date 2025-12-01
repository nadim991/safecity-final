import React from 'react';
import { Network } from 'lucide-react';

const Statistics = ({ currentView }) => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center gap-3 mb-2">
          <Network className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold text-gray-700">Design Patterns</h3>
        </div>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Inheritance for user roles specialization</li>
          <li>• Composition for complex data structures</li>
          <li>• Association for loose coupling</li>
          <li>• Encapsulation with private attributes</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">{currentView.classes.length}</div>
          <div className="text-sm text-gray-600">Classes in this view</div>
          <div className="text-xl font-bold text-green-600 mt-2">{currentView.relationships.length}</div>
          <div className="text-sm text-gray-600">Relationships</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;