'use client';
import React from "react";
import { Globe } from "lucide-react";

function DestinationForm({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end p-0 md:p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-xl h-full md:h-auto md:max-h-[90vh] md:rounded-[2.5rem] flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-serif italic text-slate-800">Add New Corridor</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {/* Image Upload Area */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Featured Image</label>
            <div className="border-2 border-dashed border-slate-200 rounded-[2rem] h-48 flex flex-col items-center justify-center gap-3 hover:border-[#144487] transition-colors cursor-pointer group bg-slate-50/50">
              <Globe size={32} className="text-slate-300 group-hover:text-[#144487] transition-colors" />
              <p className="text-xs text-slate-400 font-medium">Click to upload or drag and drop</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Corridor Name</label>
              <input type="text" placeholder="e.g. Kedarnath" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#144487]/10" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Category</label>
              <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#144487]/10 appearance-none">
                <option>Spiritual</option>
                <option>Wildlife</option>
                <option>Hill Station</option>
                <option>Adventure</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Meta Description (SEO)</label>
            <textarea rows="3" placeholder="Brief description for search engines..." className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#144487]/10 resize-none" />
          </div>
        </div>

        <div className="p-8 border-t border-slate-100 flex gap-4 bg-slate-50/50">
          <button onClick={onClose} className="flex-1 py-4 text-sm font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Cancel</button>
          <button className="flex-1 bg-[#144487] text-white py-4 rounded-2xl text-sm font-bold uppercase tracking-widest shadow-lg shadow-blue-900/20 hover:bg-[#0d2e5c] transition-all">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default DestinationForm