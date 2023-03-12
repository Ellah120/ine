import Layout from "./Component/Layout";
import Login from "./Component/Login";
import Signin from "./Component/Signin";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="bg-[#151515] h-full">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="signin" element={<Signin />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App
