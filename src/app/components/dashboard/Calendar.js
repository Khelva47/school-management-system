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
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-6 h-6"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isHighlighted = day === 19; // Highlight the 19th like in the image
      days.push(
        <div
          key={day}
          className={`w-6 h-6 flex items-center justify-center text-xs font-medium cursor-pointer rounded-full transition-colors ${
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
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-800">
          {monthNames[month]} {year}
        </h3>
        <div className="flex space-x-1">
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-xs font-medium text-gray-500 text-center py-1">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {renderCalendarDays()}
      </div>
      
      {/* Manage Calendar link */}
      <div className="mt-3 pt-2 border-t border-gray-200">
        <button className="text-xs text-blue-600 hover:text-blue-800">
          Manage Calendar
        </button>
      </div>
    </div>
  );
};

export default Calendar;