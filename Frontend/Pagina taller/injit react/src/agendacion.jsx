import profpic from './assets/jsjsjs.jpg'

function Agenda() {
    return (
        <>
            <h1 className='h1agenda'>
                Registra tu mascota 🐶
            </h1>
            <div className='agenda'>

                <nav className="menu-agenda">
                    <ul>
                        <li><h2>instruccion</h2></li>
                        <p>descripciones descripciones descripciones descripciones descripciones descripciones descripciones </p>
                        <li><h2>instruccion</h2></li>
                        <p>descripciones descripciones descripciones descripciones descripciones descripciones descripciones </p>
                        <li><h2>instruccion</h2></li>
                        <p>descripciones descripciones descripciones descripciones descripciones descripciones descripciones </p>
                        <button className='boton-agenda'>Registrar</button>
                    </ul>
                </nav>
                <img src={profpic} alt="" className='img-agenda' />
            </div>
            
            <hr></hr>
        </>
    );
}
export default Agenda