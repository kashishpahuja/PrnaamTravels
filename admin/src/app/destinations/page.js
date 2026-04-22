'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Plus, Search, Edit, Trash2, Eye, MapPin, AlertCircle
} from 'lucide-react';
import { toast } from 'react-toastify';

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  // --- FETCH DESTINATIONS ---
  const fetchDestinations = async () => {
    try {
      const res = await fetch(`${apiUrl}/user/destinations`);
      const data = await res.json();
      
      if (data.success) {
        setDestinations(data.destinations);
      } else {
        toast.error("Failed to load destinations");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // --- DELETE HANDLER ---
  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete ${name}? This will also delete linked hotels.`)) return;

    try {
      // NOTE: You will need to add this DELETE route to your backend
      const res = await fetch(`${apiUrl}/user/destinations/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (data.success) {
        toast.success(`${name} deleted successfully`);
        setDestinations(destinations.filter(d => d._id !== id));
      } else {
        toast.error(data.message || "Failed to delete");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting destination");
    }
  };

  // Filter based on search
  const filteredDestinations = destinations.filter(dest => 
    dest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen text-slate-800 font-sans pb-12">
      
      {/* --- HEADER --- */}
      <div className="bg-white px-8 py-5 flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 sticky top-0 z-40 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1a2b49]">Destinations</h1>
          <p className="text-sm text-slate-500 mt-1">Manage all your travel locations and linked hotels.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search destinations..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 w-full md:w-64 bg-slate-50"
            />
          </div>
          <Link 
            href="/destinations/add" 
            className="flex items-center gap-2 bg-[#1a2b49] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#111c33] transition-colors whitespace-nowrap"
          >
            <Plus size={16} /> Add New
          </Link>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="max-w-[1600px] mx-auto p-6 lg:p-8">
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1a2b49] mb-4"></div>
            <p>Loading destinations...</p>
          </div>
        ) : filteredDestinations.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 flex flex-col items-center justify-center text-center shadow-sm">
            <MapPin size={48} className="text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-700 mb-2">No Destinations Found</h3>
            <p className="text-slate-500 text-sm mb-6 max-w-md">
              {searchTerm ? "Try adjusting your search criteria." : "You haven't added any destinations yet. Start building your catalog!"}
            </p>
            {!searchTerm && (
              <Link href="/destinations/add" className="bg-blue-50 text-blue-600 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors">
                Add Your First Destination
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredDestinations.map((dest) => (
              <div key={dest._id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                
                {/* Image Area */}
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                  {dest.bannerImage ? (
                    <img 
                      src={`${apiUrl}${dest.bannerImage}`} 
                      alt={dest.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=No+Image' }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                      <MapPin size={24} className="mb-2 opacity-50" />
                      <span className="text-xs">No Banner</span>
                    </div>
                  )}
                  
                  {/* Actions Overlay (Desktop) */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Link href={`/destinations/${dest.slug}`} className="p-2 bg-white/90 backdrop-blur-sm text-slate-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm" title="View">
                      <Eye size={16} />
                    </Link>
                    <Link href={`/destinations/edit/${dest.slug}`} className="p-2 bg-white/90 backdrop-blur-sm text-slate-700 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors shadow-sm" title="Edit">
                      <Edit size={16} />
                    </Link>
                    <button onClick={() => handleDelete(dest._id, dest.name)} className="p-2 bg-white/90 backdrop-blur-sm text-slate-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors shadow-sm" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-lg font-bold text-[#1a2b49] truncate pr-2">{dest.name}</h2>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded">/{dest.slug}</span>
                  </div>
                  
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">
                    {dest.introHeading || "No intro heading provided."}
                  </p>

                  {/* Mobile Actions (Visible on small screens) */}
                  <div className="pt-4 border-t border-slate-100 flex justify-between gap-2 md:hidden">
                    <Link href={`/destinations/${dest.slug}`} className="flex-1 py-2 flex justify-center items-center gap-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-medium">
                      <Eye size={14} /> View
                    </Link>
                    <Link href={`/destinations/edit/${dest.slug}`} className="flex-1 py-2 flex justify-center items-center gap-1 bg-amber-50 text-amber-600 rounded-lg text-xs font-medium">
                      <Edit size={14} /> Edit
                    </Link>
                    <button onClick={() => handleDelete(dest._id, dest.name)} className="flex-1 py-2 flex justify-center items-center gap-1 bg-red-50 text-red-600 rounded-lg text-xs font-medium">
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}