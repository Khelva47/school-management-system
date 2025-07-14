import React from 'react';

const FeeStatus = () => {
  const feeStats = [
    { status: 'Paid', count: 1335, color: 'text-green-600' },
    { status: 'Pending', count: 4366, color: 'text-yellow-600' },
    { status: 'Overdue', count: 208, color: 'text-red-600' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Fee Status</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <span className="text-sm">⋯</span>
        </button>
      </div>
      
      <div className="space-y-4">
        {feeStats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                stat.status === 'Paid' ? 'bg-green-500' : 
                stat.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'
              }`}></div>
              <span className="text-sm font-medium text-gray-700">{stat.status}</span>
            </div>
            <span className={`text-lg font-bold ${stat.color}`}>
              {stat.count.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="text-blue-500 text-sm hover:text-blue-600">
          Annual Report
        </button>
      </div>
    </div>
  );
};

export default FeeStatus;