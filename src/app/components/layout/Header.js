"use client";
import React from 'react';
import { Search, Bell, User, MessageSquare, Settings, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className="bg-white shadow-sm border-b px-4 py-3 sm:px-6 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4 flex-1">
          <button
            onClick={handleBack}
            className="p-1 sm:p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 h-5" />
          </button>
          <div className="relative flex-1 max-w-xs sm:max-w-md">
            <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-8 sm:pl-10 pr-4 py-1 sm:py-2 border border-gray-300 rounded-full bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="p-1 sm:p-2 text-gray-600 hover:text-gray-800">
            <Bell className="w-4 h-4 sm:w-5 h-5" />
          </button>
          <button className="p-1 sm:p-2 text-gray-600 hover:text-gray-800">
            <MessageSquare className="w-4 h-4 sm:w-5 h-5" />
          </button>
          <button className="p-1 sm:p-2 text-gray-600 hover:text-gray-800">
            <Settings className="w-4 h-4 sm:w-5 h-5" />
          </button>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-3 h-3 sm:w-5 h-5 text-gray-600" />
            </div>
            <span className="text-xs sm:text-sm text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;