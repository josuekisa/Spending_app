import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <nav className="flex justify-center mt-12 text-gray-300 space-x-10 mb-12">
      <Link to="/Dashboard">🏠 Accueil</Link>
      <Link to="/Dashboard/Stat">📊 Tableau de bord</Link>
      <Link to="/Dashboard/Graph">📈 Graphique</Link>
      <Link to="/Form">💸 Nouvelle Dépense</Link>
    </nav>
  );
};

export default DashboardNavbar;
