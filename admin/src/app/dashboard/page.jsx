export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Admin Panel</h1>

      <div className="mt-6 space-y-3">
        <a href="/dashboard/packages">Manage Packages</a>
        <a href="/dashboard/destinations">Manage Destinations</a>
      </div>
    </div>
  );
}