function User() {
  return (
    <>
        <br />
            <div className="contenedorformulario">
                <form className="formulario">
                <label>Nombre:
                    <input type="text" />
                </label>
                <label>Desc:
                    <input type="text" />
                </label>
                <label>Edad:
                    <input type="text" />
                </label>
                <label>Correo:
                    <input type="text" />
                </label>
                <label>Contraseña:
                    <input type="text" />
                </label>
                <button className="botonform"><Link to="/">Registrar</Link></button>
                </form>
            </div>
        <br />
    </>
)
}


export default User