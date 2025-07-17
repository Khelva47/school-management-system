import React from 'react';
import { User } from 'lucide-react';

const Messages = () => {
  const messages = [
    { id: 1, sender: 'Jane Cooper', message: "Don't forget the midterm exams...", time: '14 min ago', avatar: '👩‍🏫' },
    { id: 2, sender: 'Kristin Watson', message: '', time: '15 min ago', avatar: '👩‍🎓' },
    { id: 3, sender: 'Jenny Wilson', message: 'Sure!', time: '16 min ago', avatar: '👩‍💼' },
    { id: 4, sender: 'Brooklyn Sim', message: 'Can you send me the report?', time: '18 min ago', avatar: '👨‍🏫' },
    { id: 5, sender: 'Darrell Steward', message: '', time: '19 min ago', avatar: '👨‍🎓' }
  ];

  return (
    <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Messages</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <span className="text-sm sm:text-base">⋯</span>
        </button>
      </div>
      
      <div className="space-y-2 sm:space-y-4">
        {messages.map(message => (
          <div key={message.id} className="flex items-center space-x-2 sm:space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-base sm:text-lg">{message.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-800 text-sm sm:text-base">{message.sender}</h4>
                <span className="text-xs sm:text-sm text-gray-500">{message.time}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 truncate">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;