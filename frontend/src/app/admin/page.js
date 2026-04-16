import Sidebar from '@/app/components/Sidebar'
import Topbar from '@/app/components/Topbar'
import React from 'react'

// You can import your Dashboard home component here
// import DashboardHome from '@/app/components/DashboardHome'

function page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 1. Sidebar - Fixed width on desktop */}
      <Sidebar />

      {/* 2. Main Body - Expands to fill remaining space */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* 3. Topbar - Stays at the top */}
        <Topbar />

        {/* 4. Content Area - Where your specific page data goes */}
        <main className="p-4 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Welcome back, Admin</h1>
              <p className="text-gray-500">Here’s what’s happening with Prnaam Travels today.</p>
            </div>

            {/* Dashboard Content (Stats, Charts, Tables) */}
            {/* <DashboardHome /> */}
            
            {/* Placeholder for visual layout testing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <p className="text-gray-400 text-sm">Total Bookings</p>
                    <p className="text-2xl font-bold text-orange-600">1,240</p>
                </div>
                <div className="h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <p className="text-gray-400 text-sm">Active Packages</p>
                    <p className="text-2xl font-bold text-blue-600">42</p>
                </div>
                <div className="h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <p className="text-gray-400 text-sm">Pending Inquiries</p>
                    <p className="text-2xl font-bold text-green-600">18</p>
                </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}

export default page