import { Routes, Route } from "react-router-dom";

import Main from "/src/main.jsx"
import AppProdu from "./pages/AppProdu.jsx";
import Razas from "./pages/Razas.jsx";
import Purezas from "./pages/Purezas.jsx";
import Login from "./pages/login.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/AppProdu" element={<AppProdu />} />
        <Route path="/razas" element={<Razas />} />
        <Route path="/purezas" element={<Purezas />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
