import React from 'react';

const ViewTabs = ({ views, activeView, setActiveView }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {Object.entries(views).map(([key, view]) => (
        <button
          key={key}
          onClick={() => setActiveView(key)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeView === key
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {view.title}
        </button>
      ))}
    </div>
  );
};

export default ViewTabs;