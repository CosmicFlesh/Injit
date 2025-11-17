import profpic from './assets/jsjsjs.jpg'

function Cardreseña(){
    return(
      <div className="cardreseña">
        <h2 className="card-title">"Animal"</h2>
         <img className="user-image" src={profpic}  alt="imagen"></img>
        <p className="cardr-text" >"Nombre animal"</p>
        <p className="cardr-text" >"Raza pura o mixta"</p>
      </div>
    );
}

export default Cardreseña