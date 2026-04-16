'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Map, Package, Star, Users, Menu, LogOut } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Destinations', href: '/admin/destinations', icon: Map },
  { name: 'Packages', href: '/admin/packages', icon: Package },
  { name: 'Reviews', href: '/admin/reviews', icon: Star },
  { name: 'Pages', href: '/admin/webpages', icon: LayoutDashboard },
  { name: 'Users', href: '/admin/users', icon: Users },
]

export default function Sidebar({ collapsed }) {
  const pathname = usePathname()

  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300
        ${collapsed ? 'w-20' : 'w-64'} bg-[#faf8f8] border-r border-gray-100 flex flex-col justify-between py-8 px-4`}
    >
      <div>
        <div className="flex items-center justify-between mb-10 px-2">
          {!collapsed && <h1 className="text-xl font-bold text-[#99571d] tracking-tight uppercase">Admin</h1>}
          <button  className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-500">
            <Menu size={20} />
          </button>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${active ? 'bg-[#144487] text-white shadow-lg' : 'text-gray-500 hover:bg-blue-50 hover:text-[#144487]'}`}
              >
                <Icon size={18} />
                {!collapsed && <span className="capitalize">{item.name}</span>}
              </Link>
            )
          })}
        </nav>
      </div>
      <div>
        <button className="flex items-center justify-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-white bg-[#144487] transition-colors">
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}