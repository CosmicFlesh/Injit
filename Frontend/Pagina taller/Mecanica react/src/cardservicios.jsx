import profpic from './assets/jsjsjs.jpg'

function Cardservicios(){
    return(
      <div className="card-s">
        <img className="card-image-s" src={profpic}  alt="imagen"></img>
        <h2 className="card-title-s">Tipo de Animal</h2>
        <p className="card-text-s" >Puro o Mixto</p>
      </div>
    );
}

export default Cardservicios