import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useExpenses } from "../context/ExpenseContext";
import { nanoid } from "nanoid";
import DashboardNavbar from "../components/DashboardNavbar";
const Form = () => {
  const { addExpense, expenses } = useExpenses();
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: nanoid(),
      amount: Number(formData.amount),
      description: formData.description,
      category: formData.category,
      date: formData.date || new Date().toISOString().split("T")[0],
    };

    addExpense(newExpense);
    setFormData({
      amount: "",
      description: "",
      category: "",
      date: "",
    });
  };

  return (
    <>
      <div className="flex justify-center bg-[#0E1318] w-full h-screen">
        {" "}
        <DashboardNavbar />
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
              placeholder="Montant (€)"
              type="number"
              name="amount"
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
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
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
            }}
            name="category"
            id=""
          >
            <option value="">-- Sélectionner une catégorie --</option>
            <option value="Transport"> Transport</option>
            <option value="Logement">Logement</option>
            <option value="Loisir">Loisir</option>
            <option value="Santé">Santé</option>
            <option value="Alimentation">Alimentation</option>
            <option value="Shopping">Shopping</option>
            <option value="Facture">Facture</option>
            <option value="Autres">Autres</option>
          </select>
          <div className="flex justify-center">
            <input
              value={formData.date}
              className="w-full bg-[#6f757ce0] p-3 rounded-md"
              onChange={(e) => {
                setFormData({ ...formData, date: e.target.value });
              }}
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
        <p className="text-wite">{console.log(formData)}</p>
        <ul>
          {expenses.map((ex) => (
            <li key={ex.id}>{ex.amount}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Form;
