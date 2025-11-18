import { useState } from 'react';
import Cardprodu from './card.jsx';
//import './ProductoIndex.css';

const productos = [
  { id: 1, nombre: 'Aceite', descripcion: 'Aceite 5W-30', precio: 15000, imagen: '/img/aceite.jpg', categoria: 'Motor' },
  { id: 2, nombre: 'Filtro', descripcion: 'Filtro de aire', precio: 8000, imagen: '/img/filtro.jpg', categoria: 'Aire' },
  { id: 3, nombre: 'Pastillas de Freno', descripcion: 'Freno cerámico', precio: 20000, imagen: '/img/freno.jpg', categoria: 'Frenos' },
  // ...
];

const ProductoIndex = () => {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoriaFiltro === '' || p.categoria === categoriaFiltro)
  );

  return (
    <div className="contenedor-productos">
      <aside className="sidebar-filtros">
        <h3>Buscar</h3>
        <input
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
        </select>
      </aside>

      <main className="grid-productos">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(producto => (
            <Cardprodu key={producto.id} {...producto} />
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </main>
    </div>
  );
};

export default ProductoIndex;
