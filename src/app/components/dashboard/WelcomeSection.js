import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome, Laurel Higher
          </h2>
          <h3 className="text-lg text-gray-600 mb-4">
            Secondary School Team!
          </h3>
          <p className="text-gray-600 max-w-md">
            Manage your school operations with ease. Stay updated on academics, 
            attendance, finances, and more—all in one place. Let's keep shaping 
            a brighter future together!
          </p>
        </div>
        <div className="hidden md:block">
          <div className="w-48 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg flex items-center justify-center">
            <span className="text-blue-800 text-6xl">📊</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;