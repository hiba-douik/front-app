const RoleBadge = ({ role }) => {
    const getBadgeColor = () => {
      switch (role.toLowerCase()) {
        case "admin":
          return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
        case "superadmin":
          return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
        case "user":
          return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
        default:
          return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
      }
    }
  
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${getBadgeColor()}`}>{role}</span>
  }
  
  export default RoleBadge
  