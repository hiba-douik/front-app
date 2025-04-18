/**
 * Utility functions for role-based access control
 */

// Check if user has required role
export const hasRole = (user, requiredRole) => {
    if (!user || !user.role) return false
  
    // Role hierarchy: superadmin > admin > user
    const roleHierarchy = {
      superadmin: 3,
      admin: 2,
      user: 1,
    }
  
    const userRoleLevel = roleHierarchy[user.role.toLowerCase()] || 0
    const requiredRoleLevel = roleHierarchy[requiredRole.toLowerCase()] || 0
  
    return userRoleLevel >= requiredRoleLevel
  }
  
  // Get role display name
  export const getRoleDisplayName = (role) => {
    const roleDisplayNames = {
      superadmin: "Super Administrateur",
      admin: "Administrateur",
      user: "Technicien",
    }
  
    return roleDisplayNames[role?.toLowerCase()] || role
  }
  
  // Get available routes for a role
  export const getAvailableRoutes = (role) => {
    const routes = {
      user: ["/dashboard", "/user/dashboard", "/user/profile", "/user/interventions"],
      admin: ["/dashboard", "/admin/dashboard", "/admin/users", "/admin/reports", "/admin/stats"],
      superadmin: ["/dashboard", "/superadmin/dashboard", "/superadmin/config", "/superadmin/audit", "/superadmin/roles"],
    }
  
    if (!role) return []
  
    const roleLower = role.toLowerCase()
  
    if (roleLower === "superadmin") {
      return [...routes.user, ...routes.admin, ...routes.superadmin]
    }
  
    if (roleLower === "admin") {
      return [...routes.user, ...routes.admin]
    }
  
    return routes[roleLower] || []
  }
  