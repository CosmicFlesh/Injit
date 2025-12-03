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
          <li><Link to="/animales">Animales</Link></li>
          <li><Link to="/animales">Razas</Link></li>
          <li><Link to="/animales">Purezas</Link></li>
          <button><Link to="/login">Login</Link></button>
        </ul>
      </nav>

    </header>
  );
}

export default Header