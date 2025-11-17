import Cardprodu from './card.jsx'



function Productos() {

  return (
    <>
      <h1 className='h1principal'>MASCOTAS</h1>
      <nav className='menu-productos'>
        <ul>
          <Cardprodu />
          <Cardprodu />
          <Cardprodu />
          <Cardprodu />
        </ul>
      </nav>
      <hr></hr>
    </>
  );
}
export default Productos