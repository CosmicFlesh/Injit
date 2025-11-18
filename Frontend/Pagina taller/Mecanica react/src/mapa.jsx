import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import './index.css'; 

// Arreglar íconos para Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapaTaller = () => {
  const posicion = [-33.4489, -70.6693]; // Ej: Santiago

  return (
    <section className="contacto">

      
      <div className="mapa">
        <MapContainer center={posicion} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={posicion}>
            <Popup>
              Aquí está nuestro taller. ¡Ven a visitarnos!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      
    </section>
  );
};

export default MapaTaller;
