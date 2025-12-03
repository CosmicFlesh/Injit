import { Routes, Route } from "react-router-dom";

import Home from "./src/Home";
import Producto from "./src/Producto";
import Razas from "./src/Razas";
import Purezas from "./src/Purezas";
import Login from "./src/Login";

import Header from "./src/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/razas" element={<Razas />} />
        <Route path="/purezas" element={<Purezas />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
