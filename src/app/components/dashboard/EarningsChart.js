import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const EarningsChart = () => {
  const data = [
    { month: 'Jan', income: 800000, expense: 600000 },
    { month: 'Feb', income: 900000, expense: 650000 },
    { month: 'Mar', income: 750000, expense: 580000 },
    { month: 'Apr', income: 850000, expense: 620000 },
    { month: 'May', income: 950000, expense: 680000 },
    { month: 'Jun', income: 1000000, expense: 720000 },
    { month: 'Jul', income: 920000, expense: 660000 },
    { month: 'Aug', income: 880000, expense: 640000 },
    { month: 'Sep', income: 960000, expense: 700000 },
    { month: 'Oct', income: 1050000, expense: 750000 },
    { month: 'Nov', income: 980000, expense: 710000 },
    { month: 'Dec', income: 1100000, expense: 800000 }
  ];

  return (
    <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Earnings</h3>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm sm:text-base text-gray-600">Income</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm sm:text-base text-gray-600">Expense</span>
          </div>
        </div>
      </div>
      
      <div className="h-40 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Line 
              type="monotone" 
              dataKey="income" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={{ fill: '#3b82f6' }}
            />
            <Line 
              type="monotone" 
              dataKey="expense" 
              stroke="#8b5cf6" 
              strokeWidth={2}
              dot={{ fill: '#8b5cf6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningsChart;