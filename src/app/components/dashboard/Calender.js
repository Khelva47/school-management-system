import React from 'react';

const Calendar = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  
  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="p-2"></div>);
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === currentDate.getDate();
    days.push(
      <div
        key={day}
        className={`p-2 text-center text-sm cursor-pointer hover:bg-gray-100 ${
          isToday ? 'bg-blue-500 text-white rounded-full' : 'text-gray-700'
        }`}
      >
        {day}
      </div>
    );
  }
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <button className="text-gray-500 hover:text-gray-700">
          <span className="text-sm">⋯</span>
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
          <div key={day} className="p-2 text-center text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-blue-500 text-sm hover:text-blue-600">
          Manage Calendar
        </button>
      </div>
    </div>
  );
};

export default Calendar;