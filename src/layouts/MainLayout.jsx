"use client"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useAuth } from "../context/AuthContext"

const MainLayout = () => {
  const { user } = useAuth()

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Show sidebar only for authenticated users */}
      {user && <Sidebar />}

      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
