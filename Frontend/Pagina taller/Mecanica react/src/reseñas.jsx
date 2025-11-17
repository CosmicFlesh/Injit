import Cardreseña from './card reseña';



function Reseña() {

  return (
    <>
    
      <nav className='menureseña'>
  <h1 className='title-r'>Razas de perros</h1>
        <ul>
          <Cardreseña />
          <Cardreseña />
          <Cardreseña />
        </ul>

      </nav>
      <hr></hr>
    </>
  );
}

export default Reseña