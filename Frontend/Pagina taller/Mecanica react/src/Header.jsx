
function Header() {
  return (

    <header className="header">
      <a className="headerlink" href="../index.html"> 
      <h1 className="Mecanica">In</h1><h1 className="Web">Jit</h1>
      
      </a>
      <hr></hr>
      <nav className="menu">
        <ul>
          <li><a href="./producto.html">Animales</a></li>
          <li><a href="#">Razas</a></li>
          <li><a href="#">Purezas</a></li>
          <button><a href="#">Login</a></button>
        </ul>
      </nav>

    </header>
  );
}

export default Header