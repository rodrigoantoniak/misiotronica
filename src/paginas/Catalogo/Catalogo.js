import Producto from '../Producto/Producto';
import listaDeProductos from '../../repositorioProductos/listaDeProductos.json';


const Catalogo = () => {

    return(
        <div className='catalogo'>
            {
                listaDeProductos.map((producto) => 
                    <Producto 
                        producto={producto} 
                        key={producto.id}
                    />
                )
            }
        </div>
    );
}

export default Catalogo;

// Este componente tiene por función mostrar una galeria
// con los productos disponibles en la aplicación.
// En la línea 1 hace la importación del componente Producto
// para tenerlo disponible para su utilización.
// En la linea 2 importa un array con objetos, donde cada objeto
// es un producto con sus propiedades, dentro de una variable 
// que se define como listaDeProductos.

// En el método 'return' se renderiza un div que va a ser una grilla
// que dentro mostrará los diferentes productos.
// En la linea 9 se abre un extracto de codigo javascript por eso se usa la llave '{'
// En la linea 10 se le aplica el método 'map' a la variable con los productos,
// pasándole el producto de la variable sobre el cual se esta iterando
// y la función devuele el llamado al componente Producto llevando la prop
// que el componente Producto necesita.
// LEER EL COMENTARIO EN EL COMPONENTE PRODUCTO PARA MAS REFERENCIA