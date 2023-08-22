import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import Store from './redux/store/Store'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Mediante el componente 'Provider' de react-redux se comparte con el componente 'App'
// el store donde se tiene guardado el estado global de la aplicación a fin de que esté
// disponible. El provider necesita un prop que lleva dentro la variable Store
// importada en la linea 6. Al estar envuelto el componente 'App' y solo éste
// por las etiquetas del componente 'Provider' es el unico que tiene acceso al store.
// También tendran acceso al store todos los componentes que se invoquen dentro de 'App'.


reportWebVitals();
