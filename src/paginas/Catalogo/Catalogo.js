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