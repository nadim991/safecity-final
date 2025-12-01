import React from 'react';
import { Layers } from 'lucide-react';
import ClassBox from './ClassBox';
import RelationshipLine from './RelationshipLine';

const ClassDiagramView = ({ currentView }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gray-200">
        <Layers className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-bold text-gray-800">{currentView.title}</h2>
      </div>

      {/* SVG Diagram */}
      <div className="overflow-x-auto">
        <svg width="800" height="600" className="border border-gray-200 rounded-lg bg-gray-50">
          {/* Draw relationships first (behind classes) */}
          {currentView.relationships.map((relationship, index) => (
            <RelationshipLine
              key={index}
              relationship={relationship}
              classes={currentView.classes}
            />
          ))}
          
          {/* Draw classes */}
          {currentView.classes.map((cls, index) => (
            <ClassBox key={index} classData={cls} />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default ClassDiagramView;