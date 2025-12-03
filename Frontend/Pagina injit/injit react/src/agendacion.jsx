import { Link } from "react-router-dom";
import profpic from './assets/jsjsjs.jpg'

function Agenda() {
    return (
        <><h1 className='h1agenda'>
                    Registra tu mascota 🐶
                </h1>
            <div className='agenda'>
                
                <div className='divagenda'>
                    <nav className="menu-agenda">
                        <ul>
                            <li><h2>Porque registrarce?</h2></li>
                            <p>porque esto te ayudara a obtener una interaccion con individuos con intereses comunes </p>
                            <li><h2>Es solo para animales de raza pura?</h2></li>
                            <p>No, animales de raza mixta tambien pueden ser registrados, pero deben ser registrados explicitamente como raza mixta</p>
                            <li><h2>Se necesita pagar para registrarce?</h2></li>
                            <p>No hay ningun tipo de razon para cobrar el registro pero se podria añadir en  un futuro como algun tipo de subscripcion o plan aparte de la utiliizacion gratuita </p>
                            <button className='boton-agenda'><Link to="/login">Registrar</Link></button>
                        </ul>
                    </nav>
                    <img src={profpic} alt="" className='img-agenda' />
                </div>
            </div>
            
            <hr></hr>
        </>
    );
}
export default Agenda