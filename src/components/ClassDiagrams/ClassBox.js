import React from 'react';

const ClassBox = ({ classData }) => {
  const height = 80 + (classData.attributes.length * 16) + (classData.methods.length * 16);

  return (
    <g>
      {/* Class box */}
      <rect
        x={classData.x}
        y={classData.y}
        width="200"
        height={height}
        fill="white"
        stroke="#3b82f6"
        strokeWidth="2"
        rx="4"
      />
      
      {/* Class name */}
      <rect
        x={classData.x}
        y={classData.y}
        width="200"
        height="30"
        fill="#3b82f6"
        rx="4"
      />
      <text
        x={classData.x + 100}
        y={classData.y + 20}
        textAnchor="middle"
        className="text-sm font-bold fill-white"
      >
        {classData.name}
      </text>

      {/* Attributes section */}
      <line
        x1={classData.x}
        y1={classData.y + 30}
        x2={classData.x + 200}
        y2={classData.y + 30}
        stroke="#3b82f6"
        strokeWidth="1"
      />
      {classData.attributes.map((attr, idx) => (
        <text
          key={idx}
          x={classData.x + 5}
          y={classData.y + 45 + (idx * 16)}
          className="text-xs fill-gray-700 font-mono"
        >
          {attr}
        </text>
      ))}

      {/* Methods section */}
      <line
        x1={classData.x}
        y1={classData.y + 40 + (classData.attributes.length * 16)}
        x2={classData.x + 200}
        y2={classData.y + 40 + (classData.attributes.length * 16)}
        stroke="#3b82f6"
        strokeWidth="1"
      />
      {classData.methods.map((method, idx) => (
        <text
          key={idx}
          x={classData.x + 5}
          y={classData.y + 55 + (classData.attributes.length * 16) + (idx * 16)}
          className="text-xs fill-gray-700 font-mono"
        >
          {method}
        </text>
      ))}
    </g>
  );
};

export default ClassBox;