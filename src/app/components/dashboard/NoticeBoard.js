import React from 'react';

const NoticeBoard = () => {
  const notices = [
    { id: 1, type: 'Sports Day Announcement', message: 'The school\'s Annual Sports Day will be held on May 15, 2024. Mark your calendars!', icon: '🏆', bgColor: 'bg-yellow-50', iconBg: 'bg-yellow-100' },
    { id: 2, type: 'Summer Break Start Date', message: 'Summer break begins on May 26, 2024. Have a wonderful holiday!', icon: '🌞', bgColor: 'bg-blue-50', iconBg: 'bg-blue-100' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-2 sm:p-4">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Notice Board</h3>
        <button className="text-sm sm:text-base text-blue-600 hover:text-blue-800">
          view all
        </button>
      </div>

      <div className="space-y-2 sm:space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className={`${notice.bgColor} rounded-lg p-2 sm:p-4 border-l-4 border-orange-400`}>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <div className={`${notice.iconBg} w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                <span className="text-lg sm:text-xl">{notice.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                  {notice.type}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {notice.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3 mt-2 sm:mt-4 pt-1 sm:pt-2 border-t border-gray-200">
        <button className="text-sm sm:text-base text-blue-600 hover:text-blue-800">
          Add New
        </button>
        <button className="p-1 sm:p-2 hover:bg-gray-100 rounded">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
        <button className="p-1 sm:p-2 hover:bg-gray-100 rounded">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;