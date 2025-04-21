import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const Home = () => {
  const { user } = useAuth()

  return (
    <div style={{ backgroundColor: "var(--color-background)" }} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl"
            style={{ color: "var(--color-text)" }}
          >
            Circet - Gestion des interventions
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl" style={{ color: "var(--color-text)", opacity: 0.7 }}>
            Plateforme de suivi et validation des comptes rendus d'intervention avec intelligence artificielle
          </p>

          <div className="mt-8 flex justify-center">
            {user ? (
              <Link
                to="/dashboard"
                className="btn-primary inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md"
              >
                Accéder au tableau de bord
              </Link>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/auth/login"
                  className="btn-secondary inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md"
                >
                  Se connecter
                </Link>
                <Link
                  to="/auth/register"
                  className="btn-primary inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md"
                >
                  S'inscrire
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="card">
              <div className="text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium" style={{ color: "var(--color-text)" }}>
                Validation automatisée
              </h3>
              <p className="mt-2 text-base" style={{ color: "var(--color-text)", opacity: 0.7 }}>
                Vérification automatique de la conformité des comptes rendus d'intervention grâce à l'IA.
              </p>
            </div>

            <div className="card">
              <div className="text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium" style={{ color: "var(--color-text)" }}>
                Gestion efficace
              </h3>
              <p className="mt-2 text-base" style={{ color: "var(--color-text)", opacity: 0.7 }}>
                Suivi en temps réel des interventions et des validations pour une meilleure productivité.
              </p>
            </div>

            <div className="card">
              <div className="text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium" style={{ color: "var(--color-text)" }}>
                Analyse et statistiques
              </h3>
              <p className="mt-2 text-base" style={{ color: "var(--color-text)", opacity: 0.7 }}>
                Tableaux de bord et rapports détaillés pour analyser les performances et prendre des décisions
                éclairées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
