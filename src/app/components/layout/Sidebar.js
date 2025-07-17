import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  GraduationCap, 
  DollarSign, 
  Calendar, 
  Clock, 
  MessageCircle, 
  Settings,
  Menu,
  X
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white bg-gray-800 rounded-lg fixed top-4 left-4 z-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`bg-gray-900 text-white h-full fixed top-0 left-0 transition-all duration-300 z-40 ${
        isOpen ? 'w-64' : 'w-0 md:w-64'
      } overflow-hidden md:static md:w-64`}>
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
                  onClick={() => {
                    setActiveTab(item.id);
                    if (isOpen && window.innerWidth < 768) setIsOpen(false); // Close on mobile after click
                  }}
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

      {/* Overlay for Mobile */}
      {isOpen && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;