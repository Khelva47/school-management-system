import React from 'react';

const StudentStats = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Students</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <span className="text-sm">⋯</span>
        </button>
      </div>
      
      <div className="flex items-center justify-center space-x-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-8 border-purple-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xl font-bold text-purple-600">53%</div>
            </div>
          </div>
          <div className="text-center mt-2">
            <div className="text-sm text-gray-600">3,178</div>
            <div className="text-xs text-gray-500">Boys</div>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-8 border-yellow-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xl font-bold text-yellow-600">47%</div>
            </div>
          </div>
          <div className="text-center mt-2">
            <div className="text-sm text-gray-600">2,731</div>
            <div className="text-xs text-gray-500">Girls</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStats;