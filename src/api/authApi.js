// API calls for authentication

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

export const authAPI = {
  async login(credentials) {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Login failed")
      }

      return await response.json()
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  },

  async register(userData) {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Registration failed")
      }

      return await response.json()
    } catch (error) {
      console.error("Registration error:", error)
      throw error
    }
  },

  async logout() {
    try {
      const token = localStorage.getItem("token")
      if (!token) return

      const response = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Logout failed")
      }

      return await response.json()
    } catch (error) {
      console.error("Logout error:", error)
      throw error
    }
  },

  async verifyToken(token) {
    try {
      const response = await fetch(`${API_URL}/auth/verify`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Invalid token")
      }

      return await response.json()
    } catch (error) {
      console.error("Token verification error:", error)
      throw error
    }
  },
}
export default authAPI