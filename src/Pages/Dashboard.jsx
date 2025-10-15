import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center  bg-[#0E1318] w-full h-screen text-center">
      {/* Navigation */}
      <nav className="flex justify-center mt-12 text-gray-300 space-x-10 mb-12">
        <Link to="#">🏠 Accueil</Link>
        <Link to="#">📊 Tableau de bord</Link>
        <Link to="#">📈 Graphique</Link>
        <Link to="#">💸 Nouvelle Dépense</Link>
      </nav>

      {/* Contenu principal */}
      <div className="flex flex-col  items-center justify-center space-y-6 px-12 py-12 rounded-xl bg-gradient-to-br from-[#5e2de6ad] to-[#b311dbaf] shadow-lg">
        <h1 className="text-white font-bold text-4xl">
          Bienvenue sur ExpenseTracker ! 👋
        </h1>
        <p className="text-gray-300">
          Gérez vos finances personnelles en toute simplicité
        </p>

        <div className="flex space-x-6 mt-6">
          <Link
            to="/Form"
            className="bg-white text-black rounded-xl px-5 py-3 font-medium hover:opacity-90 transition"
          >
            Ajouter une dépense
          </Link>
          <Link
            to="#"
            className="bg-[#837e8596] text-white rounded-xl px-5 py-3 font-medium hover:bg-[#9d9a9fbb] transition"
          >
            Voir le tableau de bord
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
