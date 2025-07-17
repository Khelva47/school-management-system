import React from 'react';

const StudentStats = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-2 sm:p-4">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Students</h3>
        <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 mb-2 sm:mb-4">
        <div className="flex flex-col items-center mb-2 sm:mb-0">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 mb-1 sm:mb-3">
            <svg className="w-20 h-20 sm:w-28 sm:h-28 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="8" strokeDasharray={`${53 * 2.51} 251.2`} strokeLinecap="round" className="transition-all duration-300" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg sm:text-xl font-bold text-gray-800">53%</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm sm:text-base text-gray-600 mb-1">3,178</p>
            <p className="text-xs sm:text-sm text-gray-500">( boys )</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 mb-1 sm:mb-3">
            <svg className="w-20 h-20 sm:w-28 sm:h-28 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#fbbf24" strokeWidth="8" strokeDasharray={`${47 * 2.51} 251.2`} strokeLinecap="round" className="transition-all duration-300" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg sm:text-xl font-bold text-gray-800">47%</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm sm:text-base text-gray-600 mb-1">2,731</p>
            <p className="text-xs sm:text-sm text-gray-500">( Girls )</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStats;