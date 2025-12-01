import React from 'react';

const RelationshipLine = ({ relationship, classes }) => {
  const fromClass = classes.find(c => c.name === relationship.from);
  const toClass = classes.find(c => c.name === relationship.to);

  if (!fromClass || !toClass) return null;

  const fromX = fromClass.x + 100;
  const fromY = fromClass.y;
  const toX = toClass.x + 100;
  const toY = toClass.y + 100;

  if (relationship.type === 'inheritance') {
    return (
      <g>
        <line
          x1={fromX}
          y1={fromY}
          x2={toX}
          y2={toY}
          stroke="#22c55e"
          strokeWidth="2"
        />
        <polygon
          points={`${toX},${toY} ${toX - 8},${toY + 12} ${toX + 8},${toY + 12}`}
          fill="white"
          stroke="#22c55e"
          strokeWidth="2"
        />
      </g>
    );
  } else if (relationship.type === 'composition') {
    return (
      <g>
        <line
          x1={fromX}
          y1={fromY + 50}
          x2={toX}
          y2={toY}
          stroke="#8b5cf6"
          strokeWidth="2"
        />
        <polygon
          points={`${fromX},${fromY + 50} ${fromX - 6},${fromY + 40} ${fromX},${fromY + 30} ${fromX + 6},${fromY + 40}`}
          fill="#8b5cf6"
        />
      </g>
    );
  } else {
    // association
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2;
    
    return (
      <g>
        <line
          x1={fromX}
          y1={fromY + 50}
          x2={toX}
          y2={toY}
          stroke="#64748b"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        {relationship.label && (
          <text
            x={midX}
            y={midY - 5}
            textAnchor="middle"
            className="text-xs fill-gray-600 bg-white"
          >
            {relationship.label}
          </text>
        )}
      </g>
    );
  }
};

export default RelationshipLine;