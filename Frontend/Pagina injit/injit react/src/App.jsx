import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import AppProdu from "./pages/AppProdu.jsx";
import Login from "./pages/login.jsx";



function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animales" element={<AppProdu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
    </>
  );
}

export default App;
