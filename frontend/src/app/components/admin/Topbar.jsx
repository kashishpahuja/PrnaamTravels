import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-10 shadow-sm">
      <div className="relative w-96 hidden md:block">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
          <Search size={18} />
        </span>
        <input 
          type="text" 
          placeholder="Search bookings or destinations..." 
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all"
        />
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-400 hover:text-orange-600 relative">
          <Bell size={22} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center space-x-3 border-l pl-6 border-gray-100">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">Admin User</p>
            <p className="text-xs text-gray-400">Super Admin</p>
          </div>
          <UserCircle size={32} className="text-gray-300" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;