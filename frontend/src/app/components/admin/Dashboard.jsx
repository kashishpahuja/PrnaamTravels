const StatsCard = ({ title, value, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <p className="text-sm font-medium text-gray-400 uppercase">{title}</p>
    <h3 className={`text-2xl font-bold mt-1 ${color}`}>{value}</h3>
  </div>
);

const Dashboard = () => {
  const bookings = [
    { id: '#1021', name: 'John Doe', pkg: 'Char Dham Yatra', date: 'Oct 12, 2026', status: 'Confirmed' },
    { id: '#1022', name: 'Anjali Sharma', pkg: 'Kedarnath Trek', date: 'Oct 15, 2026', status: 'Pending' },
    { id: '#1023', name: 'Rohan Gupta', pkg: 'Badrinath Luxury', date: 'Nov 02, 2026', status: 'Cancelled' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Destinations" value="42" color="text-blue-600" />
        <StatsCard title="Total Packages" value="128" color="text-orange-600" />
        <StatsCard title="Total Bookings" value="1,240" color="text-green-600" />
        <StatsCard title="New Inquiries" value="14" color="text-purple-600" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h2 className="font-bold text-gray-800">Latest Bookings</h2>
          <button className="text-sm text-orange-600 font-medium hover:underline">View All</button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-400 text-xs uppercase">
              <th className="p-4">ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Package</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {bookings.map((b) => (
              <tr key={b.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-600">{b.id}</td>
                <td className="p-4 text-gray-800">{b.name}</td>
                <td className="p-4 text-gray-600">{b.pkg}</td>
                <td className="p-4 text-gray-400">{b.date}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    b.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 
                    b.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};