import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col text-white items-center justify-center w-full h-screen  bg-gradient-to-br from-[#5e2de6ad] to-[#b311dbaf] ">
        <div className=" font-bold">
          {" "}
          <h1 className="text-4xl">Expense Tracker</h1>
        </div>
        <div>
          <span className="block text-center ">
            {" "}
            Prenez le contrôle de vos finances personnelles avec notre solution
          </span>
          <span className="block text-center">intelligente et intuitive</span>
          <div className="flex justify-center space-x-4 mt-5">
            <button className=" bg-gradient-to-r from-[#4b19d6ad] to-[#c9c4c4af] hover:bg-[#664b7096] rounded-xl p-3 ">
              Commencer maintenant
            </button>
            <button className=" bg-[#837e8596] rounded-xl p-3 hover:bg-[#664b7096] ">
              En savoir plus
            </button>
          </div>

          {/** cards  */}
          <div className=" flex justify-center items-center mt-8 gap-4 text-center">
            <section className="bg-[#837e8596] p-5 rounded-xl hover:bg-[#664b7096]">
              <span>⚡</span>
              <h1 className="block font-semibold">Suivi en temps réel</h1>
              <span className="block text-xs ">Enregistrée vos dépenses</span>
              <span className=" text-xs">Instantanément</span>
            </section>
            <section className="bg-[#837e8596] p-5 rounded-xl hover:bg-[#664b7096]">
              <span>📊</span>
              <h1 className=" font-semibold">Analyse détaillées</h1>
              <span className="block  text-xs ">
                Visualisez vos habitudes de
              </span>
              <span className="  text-xs">Consomation</span>
            </section>
            <section className="bg-[#837e8596] p-5 rounded-xl hover:bg-[#664b7096]">
              <span>🎯</span>
              <h1 className="block font-semibold">Objectifs budgétaires</h1>
              <span className=" text-xs ">Atteignez vos objectifs</span>
              <span className="block text-xs">financiers</span>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
