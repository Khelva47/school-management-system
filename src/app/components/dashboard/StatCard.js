import React from 'react';
import { MoreHorizontal } from 'lucide-react';

// components/dashboard/StatCard.js
const StatCard = ({ title, value, color, className }) => {
  const colorClasses = {
    yellow: 'bg-yellow-100 text-yellow-800',
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
  };
  return (
    <div className={`rounded-lg shadow-md p-3 ${colorClasses[color]} ${className}`}>
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};
export default StatCard;