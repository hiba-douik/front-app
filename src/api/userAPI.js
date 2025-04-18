// API calls for user data

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

export const userAPI = {
  async getUserProfile() {
    try {
      const token = localStorage.getItem("token")
      if (!token) throw new Error("No authentication token")

      const response = await fetch(`${API_URL}/users/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to fetch user profile")
      }

      return await response.json()
    } catch (error) {
      console.error("Get user profile error:", error)
      throw error
    }
  },

  async updateUserProfile(userData) {
    try {
      const token = localStorage.getItem("token")
      if (!token) throw new Error("No authentication token")

      const response = await fetch(`${API_URL}/users/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to update user profile")
      }

      return await response.json()
    } catch (error) {
      console.error("Update user profile error:", error)
      throw error
    }
  },

  async getAllUsers() {
    try {
      const token = localStorage.getItem("token")
      if (!token) throw new Error("No authentication token")

      const response = await fetch(`${API_URL}/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to fetch users")
      }

      return await response.json()
    } catch (error) {
      console.error("Get all users error:", error)
      throw error
    }
  },
}
export default userAPI
