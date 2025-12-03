import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Productos from './src/Productos.jsx'
import Principal from './src/Principal.jsx'
import Reseña from './src/reseñas.jsx'
import Servicios from './src/servicios.jsx'
import Agenda from './src/agendacion.jsx'
import Local from './src/Localizacion.jsx'



function home() {

  return (
    <>
      <Header />
      <Principal />
      <Productos />
      <Reseña />
      <Agenda />
      <Servicios />
      <Local />
      <Footer />
    </>
    
  );
}

export default home
