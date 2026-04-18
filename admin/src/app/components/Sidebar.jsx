'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Map, Package, Star, Users, Menu, LogOut, X, AlertCircle } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-toastify'

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Destinations', href: '/destinations', icon: Map },
  { name: 'Packages', href: '/packages', icon: Package },
  { name: 'Reviews', href: '/reviews', icon: Star },
  { name: 'Pages', href: '/webpages', icon: LayoutDashboard },
  { name: 'Users', href: '/users', icon: Users },
]
 
export default function Sidebar({ collapsed, setCollapsed }) {
  const pathname = usePathname()
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const handleLogout = async () => {
    try {
      // 1. Call Backend to clear cookie
      await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_PORT}/user/logout`, {}, { withCredentials: true })
      
      // 2. Clear local storage
      localStorage.removeItem('prnaamAdmin')
      
      toast.success("Logged out successfully")
      
      // 3. Hard redirect to /auth to clear all React states
      window.location.href = '/auth'
    } catch (error) {
      toast.error("Logout failed. Please try again.")
    }
  }

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 bg-[#faf8f8]
          ${collapsed ? 'w-20' : 'w-64'} border-r border-gray-200 flex flex-col justify-between py-8 px-4`}
      >
        <div>
          <div className="flex items-center justify-between mb-10 px-2">
            {!collapsed && <h1 className="text-xl font-bold text-[#99571d] tracking-tight uppercase font-serif italic">Admin</h1>}
            <button 
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-500"
            >
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
          <button 
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center justify-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-white bg-[#144487] hover:bg-[#0d2e5c] transition-colors shadow-md"
          >
            <LogOut size={18} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* --- LOGOUT CONFIRMATION MODAL --- */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowLogoutModal(false)} />
          <div className="relative bg-white w-full max-w-sm rounded-[2rem] p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-xl font-serif italic text-slate-800 mb-2">Confirm Logout</h3>
              <p className="text-slate-500 text-sm mb-8">Are you sure you want to end your management session?</p>
              <div className="flex w-full gap-3">
                <button onClick={() => setShowLogoutModal(false)} className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50">Cancel</button>
                <button onClick={handleLogout} className="flex-1 px-4 py-3 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 shadow-lg shadow-red-200">Yes, Logout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}