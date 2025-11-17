import Cardprodu from './card.jsx';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductoIndex = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3000/productos')
      .then((res) => setProductos(res.data))
      .catch((err) => console.error('no cargaron los productos:', err))
  }, []);

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoriaFiltro === '' || p.categoria === categoriaFiltro)
  );
console.log('Productos desde API:', productosFiltrados);
  return (
    <div className="contenedor-productos">
      <aside className="sidebar-filtros">
        <h3>Buscar</h3>
        <input

          className='buscar'
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}

          onChange={e => setBusqueda(e.target.value)}

        />

        <h3>Filtrar por categoría</h3>
        <select value={categoriaFiltro} onChange={e => setCategoriaFiltro(e.target.value)}>
          <option value="">Todas</option>
          <option value="Motor">Motor</option>
          <option value="Aire">Aire</option>
          <option value="Frenos">Frenos</option>
          <option value="Ruedas">Ruedas</option>
        </select>
      </aside>

      <main className="grid-productos">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(producto => (
            
            <Cardprodu key={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              rutaimagen={producto.rutaimagen} />
          ))
        ) : (
          <p className='sinprodu'>No se encontraron productos.</p>
        )}
      </main>
    </div>
  );
};

export default ProductoIndex;
