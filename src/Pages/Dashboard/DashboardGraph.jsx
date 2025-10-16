import React from "react";
import DashboardNavbar from "../../components/DashboardNavbar";
import { useExpenses } from "../../context/ExpenseContext";

const Dashboard = () => {
  const { expenses } = useExpenses();
  return (
    <>
      {" "}
      <div className="flex flex-col items-center  bg-[#0E1318] w-full h-screen text-center">
        <DashboardNavbar />
        <div className="bg-[#0E1318]"></div>
      </div>
    </>
  );
};

export default Dashboard;
