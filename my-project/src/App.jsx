import Layout from "./Component/Layout";
import Login from "./Component/Login";
import Signin from "./Component/Signin";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import MySavings from "./Component/MySavings";
function App() {

  return (
    <div className="bg-[#151515] h-full">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mysavings" element={<MySavings />} />
      </Routes>
    </div>
  );
}

export default App
