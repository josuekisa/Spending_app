import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between   bg-gray-900 shadow-black shadow-xl text-white p-3">
        <div className="flex ml-15 items-center ">
          {" "}
          <img className="ml-3" src="" alt="Logo" />
          <h1 className="ml-3 text-xl ">Expense tracker</h1>
        </div>
        <div className=" mr-15">
          {" "}
          <button className="bg-blue-600 rounded-md p-2">
            {" "}
            ✚ Nouvelle Dépense
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
