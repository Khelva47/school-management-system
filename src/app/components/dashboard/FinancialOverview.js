import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const FinancialOverview = ({ income, expenses }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-semibold text-gray-800">Financial Overview</h3>
        <div className="flex items-center space-x-2">
          <select className="text-sm border border-gray-300 rounded px-2 py-1">
            <option>2023-2024</option>
            <option>2022-2023</option>
          </select>
          <select className="text-sm border border-gray-300 rounded px-2 py-1">
            <option>Annual</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Income</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-blue-600">
            ₹{income.toLocaleString()}
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Expenses</span>
            <TrendingDown className="w-4 h-4 text-red-500" />
          </div>
          <div className="text-2xl font-bold text-red-600">
            ₹{expenses.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;
