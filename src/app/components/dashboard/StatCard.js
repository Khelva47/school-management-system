import React from 'react';

const StatCard = ({ title, value, color }) => {
  const getColorClasses = (color) => {
    switch (color) {
      case 'yellow': return 'bg-yellow-100 text-yellow-800';
      case 'purple': return 'bg-purple-100 text-purple-800';
      case 'blue': return 'bg-blue-100 text-blue-800';
      case 'green': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`rounded-lg p-2 sm:p-4 shadow-sm relative ${getColorClasses(color)}`}>
      <button className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1 sm:p-2 rounded-full transition-colors">
        <svg 
          className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </button>
      
      <div className="pr-8 sm:pr-12">
        <h3 className="text-lg sm:text-xl font-medium text-gray-600 mb-1">{title}</h3>
        <p className="text-2xl sm:text-4xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;