import React, { useState } from 'react';

const RapportPage = () => {
  const [rapports, setRapports] = useState([
    { id: 1, code: 'ERR001', description: 'Erreur GPS manquante', statut: 'En attente' },
    { id: 2, code: 'ERR002', description: 'Photo floue détectée', statut: 'En attente' },
    { id: 3, code: 'ERR003', description: 'Nom de site incorrect', statut: 'Traité' },
  ]);

  const [filtreStatut, setFiltreStatut] = useState('Tous');

  const marquerCommeTraite = (id) => {
    const majRapports = rapports.map((r) =>
      r.id === id ? { ...r, statut: 'Traité' } : r
    );
    setRapports(majRapports);
  };

  const rapportsFiltres = rapports.filter((r) =>
    filtreStatut === 'Tous' ? true : r.statut === filtreStatut
  );

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
        📋 Rapports d'Anomalies
      </h1>

      {/* Filtres */}
      <div className="mb-6 flex items-center gap-4">
        <label className="text-gray-700 dark:text-white font-medium">Filtrer par statut :</label>
        <select
          className="p-2 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          value={filtreStatut}
          onChange={(e) => setFiltreStatut(e.target.value)}
        >
          <option value="Tous">Tous</option>
          <option value="En attente">En attente</option>
          <option value="Traité">Traité</option>
        </select>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300">Code</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300">Description</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {rapportsFiltres.map((rapport) => (
              <tr key={rapport.id}>
                <td className="px-6 py-4 text-sm text-gray-800 dark:text-white">{rapport.code}</td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{rapport.description}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${rapport.statut === 'Traité' ? 'bg-green-600' : 'bg-yellow-500'}`}>
                    {rapport.statut}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {rapport.statut !== 'Traité' && (
                    <button
                      onClick={() => marquerCommeTraite(rapport.id)}
                      className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Marquer comme traité
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {rapportsFiltres.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-600 dark:text-gray-300">Aucun rapport trouvé</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RapportPage;
