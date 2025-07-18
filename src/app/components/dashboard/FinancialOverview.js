import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const FinancialOverview = ({ income, expenses }) => {
  return (
    <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Financial Overview</h3>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <select className="text-sm sm:text-base border border-gray-300 rounded px-1 sm:px-2 py-1">
            <option>2023-2024</option>
            <option>2022-2023</option>
          </select>
          <select className="text-sm sm:text-base border border-gray-300 rounded px-1 sm:px-2 py-1">
            <option>Annual</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
        <div className="bg-blue-50 p-2 sm:p-4 rounded-lg">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <span className="text-lg sm:text-xl text-gray-600">Total Income</span>
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-semibold text-blue-600">
            K{income.toLocaleString()}
          </div>
        </div>

        <div className="bg-red-50 p-2 sm:p-4 rounded-lg">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <span className="text-lg sm:text-xl text-gray-600">Total Expenses</span>
            <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-semibold text-red-600">
            K{expenses.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;