"use client"
import { createContext, useContext, useState, useEffect } from "react"

// Create the auth context
const AuthContext = createContext()

// Mock user data for demonstration
const mockUsers = [
  { id: 1, name: "User Test", email: "user@example.com", password: "password", role: "user" },
  { id: 2, name: "Admin Test", email: "admin@example.com", password: "password", role: "admin" },
  { id: 3, name: "Super Admin", email: "superadmin@example.com", password: "password", role: "superadmin" },
]

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Login function
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        const foundUser = mockUsers.find(
          (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
        )

        if (foundUser) {
          // Remove password from user object
          const { password, ...userWithoutPassword } = foundUser
          setUser(userWithoutPassword)
          localStorage.setItem("user", JSON.stringify(userWithoutPassword))
          resolve(userWithoutPassword)
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  }

  // Register function
  const register = (name, email, password) => {
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        // Check if email already exists
        const existingUser = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase())
        if (existingUser) {
          reject(new Error("Email already in use"))
          return
        }

        // Create new user
        const newUser = {
          id: mockUsers.length + 1,
          name,
          email,
          password,
          role: "user", // Default role
        }

        mockUsers.push(newUser)

        // Remove password from user object
        const { password: _, ...userWithoutPassword } = newUser
        setUser(userWithoutPassword)
        localStorage.setItem("user", JSON.stringify(userWithoutPassword))
        resolve(userWithoutPassword)
      }, 1000)
    })
  }

  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
