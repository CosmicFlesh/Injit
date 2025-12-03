import { Link } from "react-router-dom";
function Header() {
  return (

    <header className="header">
      <Link className="headerlink" to="/"> 
      <h1 className="Mecanica">In</h1><h1 className="Web">Jit</h1>
      
      </Link>
      <hr></hr>
      <nav className="menu">
        <ul>
          <li><Link href="./pages/mainProducto.jsx">Animales</Link></li>
          <li><Link href="./pages/mainProducto.jsx">Razas</Link></li>
          <li><Link href="./pages/mainProducto.jsx">Purezas</Link></li>
          <button><Link href="./pages/login.html">Login</Link></button>
        </ul>
      </nav>

    </header>
  );
}

export default Header