import { useSelector, useDispatch } from 'react-redux';
import { agregarProducto, eliminarProducto } from
    '../../redux/reducers/productos/ProductosSlice';

const Venta = () => {
    const productos =
        useSelector( (state) => state.productos);
    const dispatch = useDispatch();

    const manejarAgregarProducto = (producto) => {
        dispatch(agregarProducto({nombre: producto}));
    };
    const manejarEliminarProducto = (producto) => {
        dispatch(eliminarProducto({id: producto.id}));
    };

    const adjuntarProducto = (event) => {
        event.preventDefault();
        const nombre = event.target.nombre.value;
        if (nombre.trim() !== '') {
            manejarAgregarProducto(nombre);
            event.target.reset();
        }
    };

    return (
        <>
            <h1>Venta</h1>
            <form onSubmit={adjuntarProducto}>
                <input name='nombre' type='input'
                    placeholder='Nombre'
                ></input>
                <input type='submit'></input>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    productos
                    .filter((producto) => (producto.activo))
                    .map((producto) =>
                        <tr key={producto.id}>
                            <td>
                                {producto.id}
                            </td>
                            <td>
                                {producto.nombre}
                            </td>
                            <td>
                                <button onClick={ () =>
                                    manejarEliminarProducto(
                                        producto
                                    )
                                }>Borrar producto</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    );

};

export default Venta;