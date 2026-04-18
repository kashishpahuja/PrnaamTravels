"use client";

import "../app/globals.css";
import { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Configure axios to always send cookies for the 24-hour session
axios.defaults.withCredentials = true;

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // 1. Secure Auth Check Logic
  const checkAuth = useCallback(async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_PORT}/user/admin/me`);
      
      if (res.status === 200) {
        setIsAdmin(true);
        // Redirect if logged-in user tries to access /auth
        if (pathname === "/auth") {
          router.replace("/");
        }
      }
    } catch (err) {
      setIsAdmin(false);
      // Redirect to /auth if not logged in and trying to access private routes
      if (pathname !== "/auth") {
        router.replace("/auth");
      }
    } finally {
      setLoading(false);
    }
  }, [pathname, router]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // 2. Loading State (Branded Spinner)
  if (loading) {
    return (
      <html lang="en">
        <body className="bg-[#FAF7F2] flex items-center justify-center h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#144487] border-t-transparent rounded-full animate-spin"></div>
            <p className="font-serif italic text-[#144487] text-lg">Prnaam Travels...</p>
          </div>
        </body>
      </html>
    );
  }

  // 3. Auth Page Layout (Minimalist)
  if (pathname === "/auth") {
    return (
      <html lang="en">
        <body className="bg-white">
          <ToastContainer position="top-right" />
          {children}
        </body>
      </html>
    );
  }

  // 4. Protected Dashboard Layout
  return (
    <html lang="en">
      <body className="bg-[#F4F6FA] font-sans antialiased overflow-hidden">
        <ToastContainer position="top-right" autoClose={3000} />
        
        <div className="flex min-h-screen">
          {/* Fixed Sidebar - Passing state as props */}
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

          {/* Main Dashboard Area */}
          <main 
            className={`flex-1 transition-all duration-300 h-screen overflow-y-auto ${
              collapsed ? "ml-20" : "ml-64"
            }`}
          >
            {/* The Rounded Content Container */}
            <div className="min-h-[calc(100vh-2rem)] relative">
              <div className="p-8 lg:p-10">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
// "use client";

// import "../app/globals.css";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Sidebar from "./components/Sidebar";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function AdminLayout({ children }) {
//   const pathname = usePathname();
  
//   // Skip sidebar for auth pages
//   const isAuthPage = pathname === "/auth";

//   if (isAuthPage) {
//     return (
//       <html lang="en">
//         <body className="bg-white">
//           <ToastContainer />
//           {children}
//         </body>
//       </html>
//     );
//   }

//   return (
//     <html lang="en">
//       <body className="font-sans antialiased">
//         <div className="flex min-h-screen overflow-hidden">
//           <ToastContainer position="top-right" />
          
//           {/* Static Sidebar */}
//           <Sidebar />

//           {/* Main Dashboard Container */}
//           <main className="ml-64 flex-1 mr-4 overflow-y-auto">
//             <div className="p-8 lg:p-12">
//               {children}
//             </div>
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }