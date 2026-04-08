import React from 'react';
import { LayoutDashboard, MapPin, Package, Users, Settings, Plus, List } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '#' },
    { 
      name: 'Destinations', 
      icon: <MapPin size={20} />, 
      sub: [{ name: 'Add New', icon: <Plus size={16} /> }, { name: 'View All', icon: <List size={16} /> }] 
    },
    { 
      name: 'Packages', 
      icon: <Package size={20} />, 
      sub: [{ name: 'Add New', icon: <Plus size={16} /> }, { name: 'View All', icon: <List size={16} /> }] 
    },
    { name: 'Bookings', icon: <Users size={20} />, path: '#' },
    { name: 'Settings', icon: <Settings size={20} />, path: '#' },
  ];

  return (
    <div className="w-20 lg:w-64 bg-white border-r border-gray-100 h-screen sticky top-0 transition-all duration-300 flex flex-col">
      <div className="p-6 text-xl font-bold text-orange-600 border-b border-gray-50">
        <span className="hidden lg:inline">fdyhftg dfhfht</span>
        <span className="lg:hidden text-2xl">P</span>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, idx) => (
          <div key={idx} className="group">
            <button className="w-full flex items-center p-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-all">
              {item.icon}
              <span className="ml-3 font-medium hidden lg:block">{item.name}</span>
            </button>
            {item.sub && (
              <div className="hidden lg:block ml-9 mt-1 space-y-1">
                {item.sub.map((sub, sIdx) => (
                  <button key={sIdx} className="w-full text-left text-sm py-2 text-gray-400 hover:text-orange-500">
                    {sub.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;