import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"

const Sidebar = () => {
  const { user } = useAuth()
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  // Define navigation items based on user role
  const getNavItems = () => {
    const items = [
      {
        label: "Tableau de bord",
        path: "/dashboard",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
          </svg>
        ),
      },
      {
        label: "Profil",
        path: "/user/profile",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        ),
      },
      {
        label: "Interventions",
        path: "/user/interventions",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
    ]

    // Add admin-specific items
    if (user?.role === "admin" || user?.role === "superadmin") {
      items.push(
        {
          label: "Utilisateurs",
          path: "/admin/users",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
          ),
        },
        {
          label: "Rapports",
          path: "/admin/reports",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                clipRule="evenodd"
              ></path>
            </svg>
          ),
        },
      )
    }

    // Add superadmin-specific items
    if (user?.role === "superadmin") {
      items.push(
        {
          label: "Configuration",
          path: "/superadmin/config",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          ),
        },
        {
          label: "Audit",
          path: "/superadmin/audit",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
          ),
        },
      )
    }

    return items
  }

  const navItems = getNavItems()

  return (
    <aside
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } h-screen transition-all duration-300 ease-in-out fixed left-0 top-0 z-40 sidebar`}
      style={{
        backgroundColor: "var(--color-card)",
        borderRight: "1px solid var(--color-border)",
      }}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          {!isCollapsed && (
            <Link to="/" className="flex items-center">
              <img src="/logo.png" className="h-8 mr-3" alt="Circet Logo" />
              <span
                style={{ color: "var(--color-text)", fontWeight: 600 }}
                className="self-center text-xl whitespace-nowrap"
              >
                Circet
              </span>
            </Link>
          )}
          <button
            type="button"
            onClick={toggleSidebar}
            style={{
              backgroundColor: "transparent",
              color: "var(--color-text)",
              padding: "0.5rem",
              borderRadius: "0.375rem",
            }}
            className="hover-bg-primary-light"
          >
            {isCollapsed ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <ul className="space-y-2 font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === item.path ? "active" : ""
                } nav-link`}
                style={
                  location.pathname === item.path
                    ? { backgroundColor: "var(--color-primary)", color: "white" }
                    : { color: "var(--color-text)" }
                }
              >
                {item.icon}
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
