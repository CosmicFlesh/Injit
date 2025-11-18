import prinpic from './assets/purebred.jpg'

function Principal() {
  return (
    <div className="contenido">
      <img src={prinpic} alt="" className="contenido-imagen"/>
      <div className="info">
      <h1 >🐺 InJit 🐶</h1>
      <p>bienvenido a la pagina para los dueños responsables de la crianza y cuidado de mascotas </p>
      <button><a href="../producto.html">Buscar mascotas</a></button>
      </div>
    </div>
  );
}
export default Principal
