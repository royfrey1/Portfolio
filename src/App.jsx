import { Routes, Route } from 'react-router-dom';
import HomeAgency from './pages/HomeAgency';
import Trayectoria from './pages/trayectoria';

export default function App() {
  return (
    <Routes>
      {/* Ruta raíz redirige a la landing comercial de Selva Code */}
      <Route path="/" element={<HomeAgency />} />

      {/* Tu ruta alternativa mantiene todo tu perfil e historial previo */}
      <Route path="/trayectoria" element={<Trayectoria />} />
    </Routes>
  );
}