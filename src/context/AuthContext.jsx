"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { authAPI } from "../api/authApi"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Check if user is already logged in
    const checkAuthStatus = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem("token")

        if (token) {
          // Verify token with backend
          const userData = await authAPI.verifyToken(token)
          setUser(userData)
        }
      } catch (err) {
        console.error("Authentication error:", err)
        localStorage.removeItem("token")
        setUser(null)
        setError("Session expired. Please login again.")
      } finally {
        setLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  const login = async (credentials) => {
    try {
      setLoading(true)
      setError(null)

      const { token, user } = await authAPI.login(credentials)

      localStorage.setItem("token", token)
      setUser(user)
      return user
    } catch (err) {
      setError(err.message || "Failed to login")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData) => {
    try {
      setLoading(true)
      setError(null)

      const { token, user } = await authAPI.register(userData)

      localStorage.setItem("token", token)
      setUser(user)
      return user
    } catch (err) {
      setError(err.message || "Failed to register")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      await authAPI.logout()
    } catch (err) {
      console.error("Logout error:", err)
    } finally {
      localStorage.removeItem("token")
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
