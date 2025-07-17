import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2 sm:p-4 rounded-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-2 sm:mb-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
            Welcome, Laurel Higher
          </h2>
          <h3 className="text-base sm:text-lg text-gray-600 mb-1 sm:mb-2">
            Secondary School Team!
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-md">
            Manage your school operations with ease. Stay updated on academics, 
            attendance, finances, and more—all in one place. Let's keep shaping 
            a brighter future together!
          </p>
        </div>
        <div className="w-32 h-20 sm:w-48 sm:h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg flex items-center justify-center">
          <span className="text-4xl sm:text-6xl text-blue-800">📊</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;