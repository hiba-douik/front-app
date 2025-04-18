"use client"

import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useAuth } from "../context/AuthContext"

const MainLayout = () => {
  const { user } = useAuth()

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--color-background)" }}>
      {/* Show sidebar only for authenticated users */}
      {user && <Sidebar />}

      <div className={`flex flex-col flex-1 ${user ? "md:ml-64" : ""} transition-all duration-300 overflow-hidden`}>
        <Navbar />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="responsive-container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout
