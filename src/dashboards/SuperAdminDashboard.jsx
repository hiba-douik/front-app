import React, { useState } from 'react';
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SuperAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const activityData = [
    { jour: 'Lundi', interventions: 45, erreurs: 8 },
    { jour: 'Mardi', interventions: 52, erreurs: 5 },
    { jour: 'Mercredi', interventions: 48, erreurs: 10 },
    { jour: 'Jeudi', interventions: 60, erreurs: 7 },
    { jour: 'Vendredi', interventions: 55, erreurs: 6 },
    { jour: 'Samedi', interventions: 30, erreurs: 4 },
    { jour: 'Dimanche', interventions: 15, erreurs: 2 },
  ];

  const dataAnomalies = [
    { name: "Photos floues", value: 20, color: "#f97316" },
    { name: "Coordonnées GPS incorrectes", value: 15, color: "#fb923c" },
    { name: "Données manquantes", value: 10, color: "#fdba74" },
  ];

  const [selectedType, setSelectedType] = useState("Tous");

const anomalies = [
  { date: "2025-04-14", type: "Photos floues", gravité: "Moyenne", nombre: 5 },
  { date: "2025-04-15", type: "Photos floues", gravité: "Élevée", nombre: 7 },
  { date: "2025-04-15", type: "GPS", gravité: "Basse", nombre: 3 },
  { date: "2025-04-16", type: "Données manquantes", gravité: "Élevée", nombre: 4 },
  { date: "2025-04-17", type: "GPS", gravité: "Moyenne", nombre: 6 },
  { date: "2025-04-18", type: "Photos floues", gravité: "Basse", nombre: 2 },
];

const filteredAnomalies = selectedType === "Tous"
  ? anomalies
  : anomalies.filter((a) => a.type === selectedType);


  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Tableau de Bord – Super Admin
      </h1>

      {/* Onglets */}
      <div className="flex justify-center space-x-4 mb-8">
        {['overview', 'settings', 'audit'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 font-medium rounded-full transition-colors duration-200
              ${activeTab === tab
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-600'}
            `}
          >
            {tab === 'overview' && "Vue d'ensemble"}
            {tab === 'settings' && "Configuration"}
            {tab === 'audit' && "Journal d'audit"}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transition-colors duration-300">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              🔎 Vue d'ensemble du système
            </h2>

            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 p-4 rounded-xl">
                <p className="text-sm text-gray-800 dark:text-gray-200">Total Interventions</p>
                <p className="text-3xl font-bold text-blue-800 dark:text-white">150</p>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800 dark:to-red-900 p-4 rounded-xl">
                <p className="text-sm text-gray-800 dark:text-gray-200">Anomalies détectées</p>
                <p className="text-3xl font-bold text-red-700 dark:text-white">25</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-900 p-4 rounded-xl">
                <p className="text-sm text-gray-800 dark:text-gray-200">Erreurs corrigées</p>
                <p className="text-3xl font-bold text-green-700 dark:text-white">22</p>
              </div>
            </div>

            

            {/* Graphique à lignes */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h5 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                📈 Activité des 7 derniers jours
              </h5>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="jour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="interventions" stroke="#EE8412" strokeWidth={2} />
                    <Line type="monotone" dataKey="erreurs" stroke="#FF0000" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Graphique camembert */}
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-4">
                🧩 Répartition des Anomalies
              </h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dataAnomalies}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      labelLine
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      dataKey="value"
                    >
                      {dataAnomalies.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">⚙️ Paramètres</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Bientôt disponible : personnalisation des configurations système.
            </p>
          </div>
        )}

        {activeTab === 'audit' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">📜 Journal d'audit</h2>
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-200 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Utilisateur</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Action</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Détails</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">2025-04-20</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">admin_01</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Connexion</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Connexion réussie</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">2025-04-20</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">super_admin</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Modification</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Changement configuration système</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminDashboard;

