const PackageInnerPage = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
      {/* Hero Section */}
      <div className="relative h-96">
        <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Himalayas" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <span className="bg-orange-600 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">CHAR DHAM YATRA</span>
          <h1 className="text-4xl font-bold">Premium Char Dham Road Trip</h1>
          <p className="text-gray-200 flex items-center mt-2 italic">Ex-Dehradun • 10 Days • 9 Nights</p>
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">The Journey</h3>
            <p className="text-gray-600 leading-relaxed">Experience the spiritual divinity of Yamunotri, Gangotri, Kedarnath, and Badrinath. This luxury road trip covers all major shrines with premium accommodation and professional guides.</p>
          </section>

          <section className="bg-gray-50 p-6 rounded-2xl grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-green-700 mb-2">Inclusions</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ AC Transportation</li>
                <li>✓ 3 Star Hotels</li>
                <li>✓ Breakfast & Dinner</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-700 mb-2">Exclusions</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✕ Helicopter Tickets</li>
                <li>✕ Personal Expenses</li>
                <li>✕ Insurance</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-xl shadow-gray-100">
            <p className="text-gray-400 line-through">₹32,000</p>
            <h2 className="text-3xl font-black text-orange-600">₹24,999<span className="text-sm text-gray-400 font-normal ml-1">/ person</span></h2>
            <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold mt-6 hover:bg-orange-700 transition-all">Edit Details</button>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
             <div className="h-24 bg-gray-100 rounded-lg overflow-hidden"><img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover"/></div>
             <div className="h-24 bg-gray-100 rounded-lg overflow-hidden"><img src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover"/></div>
          </div>
        </div>
      </div>
    </div>
  );
};