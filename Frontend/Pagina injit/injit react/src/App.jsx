import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import AppProdu from "./pages/AppProdu.jsx";
import Login from "./pages/login.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AppProdu" element={<AppProdu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
