import React from 'react';
import { Bell, Calendar } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: 'Sports Day Announcement',
      description: 'The annual sports day will be held on May 15, 2024. All students are requested to participate.',
      date: '2024-05-10',
      type: 'announcement'
    },
    {
      id: 2,
      title: 'Summer Break Start Date',
      description: 'Summer break begins on May 25, 2024. Have a wonderful summer vacation!',
      date: '2024-05-20',
      type: 'holiday'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Notice Board</h3>
        <button className="text-blue-500 text-sm hover:text-blue-600">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {notices.map(notice => (
          <div key={notice.id} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
            <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
              <Bell className="w-4 h-4 text-yellow-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 mb-1">{notice.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{notice.description}</p>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="w-3 h-3 mr-1" />
                {notice.date}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-blue-500 text-sm hover:text-blue-600">
        Add New Notice
      </button>
    </div>
  );
};

export default NoticeBoard;