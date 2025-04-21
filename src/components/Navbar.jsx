import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useTheme } from "../context/ThemeContext"
import { useState } from "react"
import logo from '../assets/image.png';

const Navbar = () => {
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav style={{ backgroundColor: "var(--color-card)", borderBottom: "1px solid var(--color-border)" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
        <img className="mx-auto h-16 w-auto" src={logo} alt="Circet" />
        </Link>

        <div className="flex items-center md:order-2">
          <button
            type="button"
            onClick={toggleTheme}
            style={{
              backgroundColor: "transparent",
              color: "var(--color-text)",
              padding: "0.5rem",
              marginRight: "0.5rem",
              borderRadius: "50%",
            }}
            className="hover-bg-primary-light"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            )}
          </button>

          {user ? (
            <div className="relative">
              <button
                type="button"
                onClick={toggleMenu}
                className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <span className="sr-only">Open user menu</span>
                <div className="relative w-8 h-8 overflow-hidden bg-primary rounded-full">
                  <svg
                    className="absolute w-10 h-10 text-white -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>

              {isMenuOpen && (
                <div
                  className="absolute right-0 z-50 mt-2 w-48 rounded-lg shadow-lg py-2"
                  style={{ backgroundColor: "var(--color-card)" }}
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm" style={{ color: "var(--color-text)" }}>
                      {user.name}
                    </span>
                    <span className="block text-sm truncate" style={{ color: "var(--color-text)", opacity: 0.7 }}>
                      {user.email}
                    </span>
                  </div>
                  <hr style={{ borderColor: "var(--color-border)" }} />
                  <Link
                    to="/user/profile"
                    className="block px-4 py-2 text-sm hover-bg-primary-light"
                    style={{ color: "var(--color-text)" }}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm hover-bg-primary-light"
                    style={{ color: "var(--color-text)" }}
                  >
                    Dashboard
                  </Link>
                  <hr style={{ borderColor: "var(--color-border)" }} />
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm hover-bg-primary-light"
                    style={{
                      color: "var(--color-text)",
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  >
                    Se déconnecter
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex space-x-2">
              <Link to="/auth/login" className="btn-primary">
                Se connecter
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover-bg-primary-light"
            style={{
              backgroundColor: "transparent",
              color: "var(--color-text)",
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto md:order-1`}>
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
            style={{
              backgroundColor: "var(--color-card)",
              borderColor: "var(--color-border)",
            }}
          >
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 rounded hover-bg-primary-light md:hover-bg-transparent hover-text-primary md:p-0"
                style={{ color: "var(--color-text)" }}
              >
                Accueil
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/dashboard"
                  className="block py-2 pl-3 pr-4 rounded hover-bg-primary-light md:hover-bg-transparent hover-text-primary md:p-0"
                  style={{ color: "var(--color-text)" }}
                >
                  Tableau de bord
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
