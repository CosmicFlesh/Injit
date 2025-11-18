import Cardprodu from './card.jsx';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductoIndex = () => {
  const [Mascotas, setMascotas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');

  useEffect(() => {
    axios
      .get('injit-backend.vercel.app/Mascotas')
      .then((res) => setMascotas(res.data))
      .catch((err) => console.error('no cargaron los Mascotas:', err))
  }, []);

  const MascotasFiltrados = Mascotas.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoriaFiltro === '' || p.categoria === categoriaFiltro)
  );
console.log('Mascotas desde API:', MascotasFiltrados);
  return (
    <div className="contenedor-Mascotas">
      <aside className="sidebar-filtros">
        <h3>Buscar</h3>
        <input

          className='buscar'
          type="text"
          placeholder="Buscar mascota..."
          value={busqueda}

          onChange={e => setBusqueda(e.target.value)}

        />

        <h3>Filtrar por categoría</h3>
        <select value={categoriaFiltro} onChange={e => setCategoriaFiltro(e.target.value)}>
          <option value="">Todas</option>
          <option value="Motor">Puro</option>
          <option value="Aire">Mixto</option>
          <option value="Frenos">Sexo</option>
          <option value="Ruedas">Animales</option>
        </select>
      </aside>

      <main className="grid-Mascotas">
        {MascotasFiltrados.length > 0 ? (
          MascotasFiltrados.map(producto => (
            
            <Cardprodu key={Mascota.id}
              nombre={Mascota.nombre}
              sexo={Mascota.sexo}
              descripcion={Mascota.descripcion}
              animal={Mascota.animal}
              raza={Mascota.precio}
              rutaimagen={Mascota.rutaimagen} />
          ))
        ) : (
          <p className='sinprodu'>No se encontraron Mascotas.</p>
        )}
      </main>
    </div>
  );
};

export default ProductoIndex;
