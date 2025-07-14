import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const StatCard = ({ title, value, color = 'yellow', className = '' }) => {
  const colorClasses = {
    yellow: 'bg-yellow-100 border-yellow-200',
    blue: 'bg-blue-100 border-blue-200',
    green: 'bg-green-100 border-green-200',
    purple: 'bg-purple-100 border-purple-200'
  };

  return (
    <div className={`${colorClasses[color]} p-4 rounded-lg border ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
      <div className="text-2xl font-bold text-gray-800">
        {value.toLocaleString()}
      </div>
    </div>
  );
};

export default StatCard;