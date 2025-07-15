import React from 'react';
import { 
  Home, 
  Users, 
  GraduationCap, 
  DollarSign, 
  Calendar, 
  Clock, 
  MessageCircle, 
  Settings 
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'teachers', label: 'Teachers', icon: Users },
    { id: 'students', label: 'Students', icon: GraduationCap },
    { id: 'finance', label: 'Finance', icon: DollarSign },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'timetable', label: 'Time Table', icon: Clock },
    { id: 'message', label: 'Message', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-full">
      <div className="p-4">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-white rounded-lg mr-3 flex items-center justify-center">
            <span className="text-gray-900 font-bold">A</span>
          </div>
          <span className="text-xl font-semibold">Alikonko</span>
        </div>
        
        <nav>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                  activeTab === item.id 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;