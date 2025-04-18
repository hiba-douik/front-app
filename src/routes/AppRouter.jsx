import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

// Layouts
import MainLayout from "../layouts/MainLayout"

// Pages
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

// Auth
import Login from "../auth/Login"
import Register from "../auth/register"

// Dashboards
import AdminDashboard from "../dashboards/AdminDashboard"
import UserDashboard from "../dashboards/UserDashboard"
import SuperAdminDashboard from "../dashboards/SuperAdminDashboard"

// Components
import ProtectedRoute from "../components/ProtectedRoute"

// Context
import { useAuth } from "../context/AuthContext"

const AppRouter = () => {
  const { user } = useAuth()

  // Helper function to redirect to the appropriate dashboard based on user role
  const DashboardRedirect = () => {
    if (!user) return <Navigate to="/auth/login" />

    switch (user.role?.toLowerCase()) {
      case "admin":
        return <Navigate to="/admin/dashboard" />
      case "superadmin":
        return <Navigate to="/superadmin/dashboard" />
      default:
        return <Navigate to="/user/dashboard" />
    }
  }

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* Auth routes */}
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Dashboard redirect */}
          <Route path="dashboard" element={<DashboardRedirect />} />

          {/* User routes */}
          <Route element={<ProtectedRoute allowedRoles={["user", "admin", "superadmin"]} />}>
            <Route path="user">
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="profile" element={<div>Profile Page</div>} />
              <Route path="interventions" element={<div>Interventions Page</div>} />
            </Route>
          </Route>

          {/* Admin routes */}
          <Route element={<ProtectedRoute allowedRoles={["admin", "superadmin"]} />}>
            <Route path="admin">
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<div>Users Management Page</div>} />
              <Route path="reports" element={<div>Reports Validation Page</div>} />
              <Route path="stats" element={<div>Statistics Page</div>} />
            </Route>
          </Route>

          {/* Super Admin routes */}
          <Route element={<ProtectedRoute allowedRoles={["superadmin"]} />}>
            <Route path="superadmin">
              <Route path="dashboard" element={<SuperAdminDashboard />} />
              <Route path="config" element={<div>System Configuration Page</div>} />
              <Route path="audit" element={<div>Audit Logs Page</div>} />
              <Route path="roles" element={<div>Role Management Page</div>} />
            </Route>
          </Route>

          {/* Error pages */}
          <Route path="unauthorized" element={<div>Unauthorized Access</div>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
