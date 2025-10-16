import React from "react";
import DashboardNavbar from "../../components/DashboardNavbar";
import {
  FaShoppingCart,
  FaBus,
  FaHome,
  FaUtensils,
  FaChartLine,
  FaPlus,
} from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { useExpenses } from "../../context/ExpenseContext";
import { GiFullPizza } from "react-icons/gi";
import { Link } from "react-router-dom";

const DashboardStat = () => {
  const { expenses } = useExpenses();
  return (
    <>
      <div className="flex flex-col items-center  bg-[#0E1318] w-full h-screen text-center">
        <DashboardNavbar />
        <main className="min-h-screen bg-[#0E1318] text-white p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* ====== SECTION PRINCIPALE ====== */}
          <section className="lg:col-span-3 space-y-8">
            {/* Dépenses récentes */}
            <div className="bg-[#1C2127] p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                💸 Dépenses récentes
              </h2>

              <ul className="space-y-4">
                {" "}
                {expenses.map((ex) => (
                  <li
                    className="flex justify-between items-center bg-[#20252b] p-4 rounded-xl hover:bg-[#2a3037] transition"
                    key={ex.id}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-200 p-3 rounded-lg">
                        <FaUtensils className="text-blue-700 text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">{ex.description}</p>
                        <p className="text-sm text-gray-400">
                          {" "}
                          {ex.date} • {ex.category}
                        </p>
                      </div>
                    </div>
                    <span className="text-red-400 font-semibold">
                      -{ex.amount} €
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ====== ASIDES ====== */}
          <aside className="space-y-8">
            {/* Catégories */}
            <div className="bg-[#1C2127] p-6 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-4">📂 Catégories</h2>

              <ul className="space-y-3">
                <li className="flex justify-between text-gray-300">
                  <span>🍔 Alimentation </span>
                  <span>847 €</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>🚗 Transport</span>
                  <span>423 €</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>🏠 Logement</span>
                  <span>820 €</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>🎮 Loisirs</span>
                  <span>145 €</span>
                </li>
              </ul>
            </div>

            {/* Actions rapides */}
            <div className="bg-[#1C2127] p-6 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-4">⚡ Actions rapides</h2>
              <div className="flex flex-col gap-3">
                <Link className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition p-3 rounded-md font-medium">
                  {" "}
                  <FaPlus /> Ajouter une dépense
                </Link>

                <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition p-3 rounded-md font-medium">
                  <FaChartLine /> Voir les statistiques
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 transition p-3 rounded-md font-medium">
                  <FaShoppingCart /> Gérer mes achats
                </button>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
};

export default DashboardStat;
