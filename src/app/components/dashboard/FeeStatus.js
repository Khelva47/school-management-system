import React from 'react';

const FeeStatus = () => {
  const feeStats = [
    { status: 'Paid', count: 1335, color: 'text-green-600' },
    { status: 'Pending', count: 4366, color: 'text-yellow-600' },
    { status: 'Overdue', count: 208, color: 'text-red-600' }
  ];

  return (
    <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Fee Status</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <span className="text-sm sm:text-base">⋯</span>
        </button>
      </div>
      
      <div className="space-y-2 sm:space-y-4">
        {feeStats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                stat.status === 'Paid' ? 'bg-green-500' : 
                stat.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'
              }`}></div>
              <span className="text-sm sm:text-base font-medium text-gray-700">{stat.status}</span>
            </div>
            <span className={`text-lg sm:text-xl font-bold ${stat.color}`}>
              {stat.count.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-2 sm:mt-4 text-center">
        <button className="text-blue-500 text-sm sm:text-base hover:text-blue-600">
          Annual Report
        </button>
      </div>
    </div>
  );
};

export default FeeStatus;