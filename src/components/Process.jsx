import React from "react";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#242a31] w-full h-[50vh]">
        <h1 className="text-4xl text-white font-bold">Comment ça marche</h1>
        <span className="text-gray-400">
          Trois étapes simples pour prendre le contrôle de vos finances
        </span>

        {/* Conteneur des cartes */}
        <div className="flex gap-10 mt-10">
          {/* CARD 1 */}
          <section className="flex flex-col items-center text-center max-w-[200px]">
            <span className="flex items-center justify-center w-12 h-12 text-2xl text-white rounded-full bg-gradient-to-br from-[#4A2E7E] to-[#8B3DFF]">
              1
            </span>
            <h3 className="mt-3 text-white">Enregistrez vos dépenses</h3>
            <p className="mt-1 text-gray-400 text-xs">
              Ajoutez rapidement vos achats avec notre interface intuitive et
              nos boutons d'action rapide.
            </p>
          </section>

          {/* CARD 2 */}
          <section className="flex flex-col items-center text-center max-w-[200px]">
            <span className="flex items-center justify-center w-12 h-12 text-2xl text-white rounded-full bg-gradient-to-br from-[#4A2E7E] to-[#8B3DFF]">
              2
            </span>
            <h3 className="mt-3 text-white">Analysez vos habitudes</h3>
            <p className="mt-1 text-gray-400 text-xs">
              Découvrez où va votre argent grâce à nos graphiques détaillés et
              statistiques personnalisées.
            </p>
          </section>

          {/* CARD 3 */}
          <section className="flex flex-col items-center text-center max-w-[200px]">
            <span className="flex items-center justify-center w-12 h-12 text-2xl text-white rounded-full bg-gradient-to-br from-[#4A2E7E] to-[#8B3DFF]">
              3
            </span>
            <h3 className="mt-3 text-white">Optimisez votre budget</h3>
            <p className="mt-1 text-gray-400 text-xs">
              Recevez des conseils personnalisés et atteignez vos objectifs
              financiers plus facilement.
            </p>
          </section>
        </div>
      </div>

      {/* Section suivante */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#4A2E7E] to-[#8B3DFF] w-full h-[50vh]">
        <h1 className="text-4xl text-white font-bold">
          Prêt à transformer vos finances ?{" "}
        </h1>
        <p className="text-gray-300 text-center mt-5">
          {" "}
          Rejoignez des milliers d'utilisateurs qui ont déja pris le controle de{" "}
          <br />
          leur budget avec ExpenseTracker.
        </p>
        <Link
          to="/Dashboard"
          className="p-3 mt-3  rounded-md bg-white text-[#4A2E7E] font-semibold"
        >
          🚀 Commencer maintenant
        </Link>
        <span className="text-gray-300 text-xs text-center mt-5">
          Aucune inscription requise • Utilisation immédiate • 100% gratuit
        </span>
      </div>
    </>
  );
};

export default Process;
