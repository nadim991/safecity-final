import React, { useState } from 'react';
import { Database } from 'lucide-react';
import ViewTabs from './ViewTabs';
import ClassDiagramView from './ClassDiagramView';
import Legend from './Legend';
import Statistics from './Statistics';
import { views } from './data/classData';

const ClassDiagrams = () => {
  const [activeView, setActiveView] = useState('core');

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Database className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">SafeCity Class Diagrams</h1>
        </div>
        <p className="text-gray-600">Object-oriented design and system architecture</p>
      </div>

      <ViewTabs 
        views={views} 
        activeView={activeView} 
        setActiveView={setActiveView} 
      />

      <ClassDiagramView currentView={views[activeView]} />

      <Legend />

      <Statistics currentView={views[activeView]} />
    </div>
  );
};

export default ClassDiagrams;