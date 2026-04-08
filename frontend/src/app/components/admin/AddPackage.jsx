const AddPackage = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Create New Package</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600">Package Title</label>
            <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-50" placeholder="e.g. 10 Days Kedarnath Trek" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600">Category</label>
            <select className="w-full p-3 rounded-lg border border-gray-200 bg-white">
              <option>Char Dham Yatra</option>
              <option>Badrinath Special</option>
              <option>Kedarnath Special</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600">Price (₹)</label>
            <input type="number" className="w-full p-3 rounded-lg border border-gray-200" placeholder="25000" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600">Duration</label>
            <input type="text" className="w-full p-3 rounded-lg border border-gray-200" placeholder="4 Nights / 5 Days" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600">Sub-Package Type</label>
            <input type="text" className="w-full p-3 rounded-lg border border-gray-200" placeholder="By Road Trip" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-600">Itinerary Description</label>
          <textarea rows="4" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-50" placeholder="Detail the day-by-day journey..."></textarea>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-600">Upload Gallery Images</label>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-orange-300 transition-colors cursor-pointer bg-gray-50">
            <p className="text-gray-400">Click to upload or drag and drop images</p>
          </div>
        </div>

        <div className="pt-4 flex space-x-4">
          <button type="submit" className="px-8 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 shadow-lg shadow-orange-100 transition-all">Publish Package</button>
          <button type="button" className="px-8 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-all">Save Draft</button>
        </div>
      </form>
    </div>
  );
};