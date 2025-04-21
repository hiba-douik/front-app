import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import logo from '../assets/image.png';

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.")
      return
    }

    setIsLoading(true)

    try {
      await register(name, email, password)
      navigate("/dashboard")
    } catch (err) {
      setError("Erreur lors de l'inscription. Veuillez réessayer.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-16 w-auto" src={logo} alt="Circet" />
        <h2
          className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight"
          style={{ color: "var(--color-text)" }}
        >
          Créer un compte
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {error && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6"
              style={{ color: "var(--color-text)" }}
            >
              Nom complet
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                style={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-text)",
                  borderColor: "var(--color-border)",
                }}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
              style={{ color: "var(--color-text)" }}
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                style={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-text)",
                  borderColor: "var(--color-border)",
                }}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6"
              style={{ color: "var(--color-text)" }}
            >
              Mot de passe
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                style={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-text)",
                  borderColor: "var(--color-border)",
                }}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6"
              style={{ color: "var(--color-text)" }}
            >
              Confirmer le mot de passe
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                style={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-text)",
                  borderColor: "var(--color-border)",
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-70"
            >
              {isLoading ? "Inscription en cours..." : "S'inscrire"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm" style={{ color: "var(--color-text)", opacity: 0.7 }}>
          Déjà un compte?{" "}
          <Link to="/auth/login" className="font-semibold leading-6 text-primary hover:text-primary-hover">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
