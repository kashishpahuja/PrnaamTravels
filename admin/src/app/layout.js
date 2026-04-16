"use client";

import "../app/globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  
  // Skip sidebar for auth pages
  const isAuthPage = pathname === "/auth";

  if (isAuthPage) {
    return (
      <html lang="en">
        <body className="bg-white">
          <ToastContainer />
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="flex min-h-screen overflow-hidden">
          <ToastContainer position="top-right" />
          
          {/* Static Sidebar */}
          <Sidebar />

          {/* Main Dashboard Container */}
          <main className="ml-64 flex-1 mr-4 overflow-y-auto">
            <div className="p-8 lg:p-12">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}