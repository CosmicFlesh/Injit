import Cardservicios from './cardservicios.jsx'



function Servicios() {

  return (
    <>
      <div className="servicios">
        <h1 className='h1principal'>Tipos De Animales</h1>
        <nav className='menu-servicios'>
          <ul>
            <Cardservicios />
            <Cardservicios />
            <Cardservicios />
          </ul>
        </nav>
        <hr></hr>
      </div>
    </>
  );
}
export default Servicios