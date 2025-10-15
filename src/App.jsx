// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import { ExpenseProvider } from "./context/ExpenseContext";
import Form from "./Pages/Form";

function App() {
  return (
    <ExpenseProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  );
}

export default App;
