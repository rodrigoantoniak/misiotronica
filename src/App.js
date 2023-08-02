import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuNavegacional from './menuNavegacional/MenuNavegacional';
import Inicio from './paginas/inicio/Inicio';
import Contacto from './paginas/contacto/Contacto';
import SobreNosotros from './paginas/sobreNosotros/SobreNosotros';
import Venta from './paginas/venta/Venta';
import NoEncontrado from './paginas/noEncontrado/NoEncontrado';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuNavegacional />}>
          <Route index element={<Inicio />} />
          <Route path="venta" element={<Venta />} />
          <Route path="sobreNosotros" element={<SobreNosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
