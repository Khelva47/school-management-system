import React from 'react';

const Calendar = ({ year = 2021, month = 8 }) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];
    
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-6 h-6 sm:w-8 sm:h-8"></div>);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const isHighlighted = day === 19;
      days.push(
        <div
          key={day}
          className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-medium cursor-pointer rounded-full transition-colors ${
            isHighlighted
              ? 'bg-orange-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800">
          {monthNames[month]} {year}
        </h3>
        <div className="flex space-x-1 sm:space-x-2">
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-1 sm:mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-xs sm:text-sm font-medium text-gray-500 text-center py-1">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {renderCalendarDays()}
      </div>
      
      <div className="mt-2 sm:mt-3 pt-1 sm:pt-2 border-t border-gray-200">
        <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-800">
          Manage Calendar
        </button>
      </div>
    </div>
  );
};

export default Calendar;