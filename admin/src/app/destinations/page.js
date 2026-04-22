'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Plus, Search, Edit, Trash2, Eye, MapPin, ArrowUpRight
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
  const handleDelete = async (e, id, name) => {
    e.preventDefault(); // Prevent navigating to the destination page
    if (!window.confirm(`Are you sure you want to delete ${name}? This will also delete linked hotels.`)) return;

    try {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredDestinations.map((dest) => (
              <div 
                key={dest._id} 
                className="group relative overflow-hidden rounded-2xl h-[300px] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* View Link wraps the background and text overlay */}
                <Link href={`/destinations/${dest.slug}`} className="absolute inset-0 z-0">
                  
                  {/* Background Image */}
                  {dest.bannerImage ? (
                    <img 
                      src={`${apiUrl}${dest.bannerImage}`} 
                      alt={dest.name} 
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=No+Image' }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-400">
                      <MapPin size={32} className="mb-2 opacity-40" />
                      <span className="text-sm font-medium">No Image</span>
                    </div>
                  )}

                  {/* Text Overlay (Bottom) */}
                  <div className="relative z-10 flex flex-col justify-end h-full text-white">
                    <div className='bg-gradient-to-r from-black/70 via-black/30 to-transparent px-6 py-4'>
                      <h3 className="italic text-xl font-medium mb-1 drop-shadow-md truncate">
                        {dest.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider opacity-90 drop-shadow-md">
                        Explore
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Management Actions (Top Right) */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                  <Link 
                    href={`/destinations/edit/${dest.slug}`} 
                    className="p-2.5 bg-white/90 backdrop-blur-sm text-slate-700 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors shadow-lg" 
                    title="Edit"
                  >
                    <Edit size={16} />
                  </Link>
                  <button 
                    onClick={(e) => handleDelete(e, dest._id, dest.name)} 
                    className="p-2.5 bg-white/90 backdrop-blur-sm text-slate-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors shadow-lg" 
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}