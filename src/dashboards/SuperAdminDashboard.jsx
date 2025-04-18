"use client"

import { useState } from "react"

const SuperAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for system stats
  const systemStats = {
    totalUsers: 156,
    activeUsers: 124,
    totalInterventions: 1245,
    pendingValidations: 78,
    systemUptime: "99.8%",
    apiRequests: "15.2k/day",
  }

  // Mock data for recent activities
  const recentActivities = [
    { id: 1, user: "Admin1", action: "Validation de CR", target: "CR-2023-05-15-001", timestamp: "2023-05-15 14:32" },
    {
      id: 2,
      user: "Admin2",
      action: "Modification utilisateur",
      target: "user@example.com",
      timestamp: "2023-05-15 13:45",
    },
    {
      id: 3,
      user: "SuperAdmin",
      action: "Ajout de rôle",
      target: "Nouveau rôle: Superviseur",
      timestamp: "2023-05-14 16:20",
    },
    { id: 4, user: "Admin3", action: "Rejet de CR", target: "CR-2023-05-14-008", timestamp: "2023-05-14 11:05" },
    {
      id: 5,
      user: "SuperAdmin",
      action: "Configuration système",
      target: "Paramètres de validation",
      timestamp: "2023-05-13 09:30",
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tableau de bord Super Admin</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "overview"
                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Vue d'ensemble
          </button>
          <button
            onClick={() => setActiveTab("config")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "config"
                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Configuration
          </button>
          <button
            onClick={() => setActiveTab("audit")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "audit"
                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Audit
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* System Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Utilisateurs</h3>
                <div className="mt-2 flex justify-between items-end">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{systemStats.totalUsers}</p>
                  <p className="text-sm text-green-600">{systemStats.activeUsers} actifs</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Interventions</h3>
                <div className="mt-2 flex justify-between items-end">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{systemStats.totalInterventions}</p>
                  <p className="text-sm text-yellow-600">{systemStats.pendingValidations} en attente</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Performance système</h3>
                <div className="mt-2 flex justify-between items-end">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{systemStats.systemUptime}</p>
                  <p className="text-sm text-blue-600">{systemStats.apiRequests}</p>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Activités récentes</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Utilisateur
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Action
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Cible
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Horodatage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {recentActivities.map((activity) => (
                      <tr key={activity.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          {activity.user}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {activity.action}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {activity.target}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {activity.timestamp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "config" && (
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Configuration du système</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Seuil de validation automatique
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>90%</option>
                  <option>95%</option>
                  <option>98%</option>
                  <option>100%</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Délai maximum de validation
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>24 heures</option>
                  <option>48 heures</option>
                  <option>72 heures</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Modèle d'IA pour validation
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>Modèle standard</option>
                  <option>Modèle avancé</option>
                  <option>Modèle personnalisé</option>
                </select>
              </div>

              <div className="pt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Enregistrer les modifications
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "audit" && (
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Journal d'audit</h3>

            <div className="mb-4 flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date de début</label>
                <input
                  type="date"
                  className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date de fin</label>
                <input
                  type="date"
                  className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type d'action</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>Toutes les actions</option>
                  <option>Connexion</option>
                  <option>Validation CR</option>
                  <option>Modification utilisateur</option>
                  <option>Configuration système</option>
                </select>
              </div>

              <div className="flex items-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Filtrer
                </button>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                Sélectionnez une plage de dates et un type d'action pour afficher les journaux d'audit.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SuperAdminDashboard
