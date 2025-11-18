
const Cardprodu = ({ nombre, descripcion, precio, rutaimagen }) => {
  return (
    <div className="card-producto">
      <img src={rutaimagen} alt={nombre} className="imagen-producto" />
      <h3>{nombre}</h3>
     <p>{descripcion.length > 100 ? descripcion.slice(0, 100) + '...' : descripcion}</p>
      <p><strong>${precio}</strong></p>
    </div>
  );
};

export default Cardprodu;