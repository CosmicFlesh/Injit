import profpic from './assets/jsjsjs.jpg'

function Cardprodu({ nombre, descripcion, raza, rutaimagen }){
    return(
      <div className="card">
        <img className="card-image" src={profpic}  alt="imagen mascota"></img>
        <h2 className="card-title">{"nombre mascota"}</h2>
        <p className="card-text" ></p>
        <span>{"raza"}</span>
      </div>
    );
}

export default Cardprodu