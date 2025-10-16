// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import DashboardStat from "./Pages/Dashboard/DashboardStat";
import DashboardGraph from "./Pages/Dashboard/DashboardGraph";
import { ExpenseProvider } from "./context/ExpenseContext";
import Form from "./Pages/Form";

function App() {
  return (
    <ExpenseProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<DashboardHome />} />
          <Route path="/Dashboard/Stat" element={<DashboardStat />} />
          <Route path="/Dashboard/Graph" element={<DashboardGraph />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  );
}

export default App;
