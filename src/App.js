import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuNavegacional from './menuNavegacional/MenuNavegacional';
import Inicio from './paginas/inicio/Inicio';
import Contacto from './paginas/contacto/Contacto';
import SobreNosotros from './paginas/sobreNosotros/SobreNosotros';
import Venta from './paginas/venta/Venta';
import Catalogo from './paginas/Catalogo/Catalogo';
import NoEncontrado from './paginas/noEncontrado/NoEncontrado';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuNavegacional />}>
          <Route index element={<Inicio />} />
          <Route path="venta" element={<Venta />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="sobreNosotros" element={<SobreNosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// En la línea 1 se importan los componentes de react-router-rom necesarios
// para luego utilizarlos para el enrutamiento de componentes dentro del método 'return()'
// Se observa como desde la linea 13 a la 18 se definen diferentes urls con el componente
// que debe renderizarse al momento de acceder a ella.
// Cada ruta debe tener 2 props, el path y el element.

export default App;
