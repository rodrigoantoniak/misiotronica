import logo from './logo.svg';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a Misiotrónica.
        </p>
      </header>
    </div>
  );
}

export default Inicio;