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

      <div className="flex h-screen bg-gray-100">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <WelcomeSection />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard title="Students" value={5909} color="yellow" />
                  <StatCard title="Teachers" value={60} color="blue" />
                  <StatCard title="Employee" value={100} color="green" />
                  <div className="lg:col-span-1">
                    <Calendar />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <StudentStats />
                  <NoticeBoard />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <EarningsChart />
                  </div>
                  <FinancialOverview />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FeeStatus />
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