import { Routes, Route } from "react-router-dom";

import Main from "/src/main"
import AppProdu from "./pages/AppProdu";
import Razas from "./pages/Razas";
import Purezas from "./pages/Purezas";
import Login from "./pages/login";

import Header from "./components/Header";
import Footer from "../components/Footer";

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
