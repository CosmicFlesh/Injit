
const reseñasss = [
  {
    id: 1,
    nombre: "Nombre Usuario",
    comentario: "Increible taller",
  },
  {
    id: 2,
    nombre: "Nombre Usuario",
    comentario: "Me ayudo con muchos problemas",
  },
  {
    id: 3,
    nombre: "Nombre Usuario",
    comentario: "Reseña Epica.",
  },
];

function reseñasss() {
  return (
    <div className="reseñas-container">
      <h1>Reseñas del taller</h1>
      {reseñasss.map((reseña) => (
        <div key={reseña.id} className="reseña">
          <div className="reseña-header">
            <strong>{reseña.nombre}</strong>
            <span>{reseña.fecha}</span>
          </div>
          <p>{reseña.comentario}</p>
        </div>
      ))}
    </div>
  );
}
export default  reseñasss