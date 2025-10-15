import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    amount: 0,
    description: "",
    category: [
      "transport",
      "Logement",
      "Loisir",
      "santé",
      "shopping",
      "Facture",
      "Autres",
    ],
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <>
      <div className="flex justify-center bg-[#0E1318] w-full h-screen">
        {" "}
        <form
          onSubmit={handleSubmit}
          className="flex-col mt-10 max-h-max space-y-6 rounded-md text-white p-10 bg-[#20252b]"
          action=""
          method="post"
        >
          <h1 className="font-bold text-4xl">Ajouter une nouvelle dépense</h1>
          <p>
            Enregistrez rapidement vos dépenses avec tous les détails
            nécessaires.
          </p>
          <div className="flex justify-center">
            {" "}
            <input
              value={formData.amount}
              className="bg-[#6f757ce0] rounded-md p-3 w-full"
              type="number"
              name="amount"
              placeholder="Donner le montant"
            />
          </div>

          <div className="flex justify-center">
            <input
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
              }}
              className="bg-[#6f757ce0] rounded-md p-3 w-full"
              placeholder="Ex: KFC"
              name="description"
              type="text"
            />
          </div>
          <select
            value={formData.category}
            className="w-full p-3 bg-[#6f757ce0] rounded-md"
            placeholder="Selectionner une catégorie"
            name="category"
            id=""
          >
            <option value="">-- Sélectionner une catégorie --</option>
            <option value="transport"> transport</option>
            <option value="Logement">Logement</option>
            <option value="Loisir">Loisir</option>
            <option value="santé">santé</option>
            <option value="shopping">shopping</option>
            <option value="Facture">Facture</option>
            <option value="Autres">Autres</option>
          </select>
          <div className="flex justify-center">
            <input
              value={formData.date}
              className="w-full bg-[#6f757ce0] p-3 rounded-md"
              name="date"
              placeholder="Entrer la date"
              type="date"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-600 w-full  rounded-md p-3 ">
              💾 Envoyer
            </button>
            <Link
              className="bg-[#6f757ce0] rounded-md text-center ml-3 p-3"
              to="/Dashboard"
            >
              {" "}
              Annuler{" "}
            </Link>
          </div>
        </form>
        <p className="text-wite"> {formData.description}</p>
      </div>
    </>
  );
};

export default Form;
