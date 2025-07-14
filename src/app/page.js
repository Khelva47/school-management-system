"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import WelcomeSection from './components/dashboard/WelcomeSection';
import StatCard from './components/dashboard/StatCard';
import StudentStats from './components/dashboard/StudentStats';
import Calendar from './components/dashboard/Calendar';
import FinancialOverview from './components/dashboard/FinancialOverview';
import NoticeBoard from './components/dashboard/NoticeBoard';
import EarningsChart from './components/dashboard/EarningsChart';
import FeeStatus from './components/dashboard/FeeStatus';
import Messages from './components/dashboard/Messages';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  return (
    <>
      <Head>
        <title>Smansys - School Management Dashboard</title>
        <meta name="description" content="School Management Admin Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen bg-gray-50">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Top section with WelcomeSection and stat cards + calendar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Welcome section takes up more space */}
                  <div className="lg:col-span-6 xl:col-span-7">
                    <WelcomeSection />
                  </div>
                  
                  {/* Stats cards and calendar on the right */}
                  <div className="lg:col-span-6 xl:col-span-5">
                    <div className="flex gap-6">
                      {/* Stats cards in a single column */}
                      <div className="flex flex-col gap-4 flex-1">
                        <StatCard title="Students" value="5,909" color="yellow" />
                        <StatCard title="Teachers" value="60" color="purple" />
                        <StatCard title="Employee" value="100" color="yellow" />
                      </div>
                      
                      {/* Calendar positioned at the end */}
                      <div className="bg-white rounded-lg shadow-sm p-4 flex-1">
                        <Calendar year={2021} month={8} /> {/* September 2021 (month 8 = September) */}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <StudentStats />
                  <NoticeBoard />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="lg:col-span-1">
                    <EarningsChart />
                  </div>
                  <FinancialOverview income={2954000} expenses={19291266} />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FeeStatus paid={1335} pending={4366} overdue={208} />
                  <Messages />
                </div>
              </div>
            )}
            
            {activeTab !== 'dashboard' && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
                  </h2>
                  <p className="text-gray-600">
                    This section is under development. Please check back later.
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}