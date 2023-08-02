import { useSelector, useDispatch } from 'react-redux';
import { eliminarProducto } from
    '../../redux/reducers/productos/ProductosSlice';

const Venta = () => {
    const productos =
        useSelector( (state) => state.productos);
    const dispatch = useDispatch();

    const manejarEliminarProducto = (producto) => {
        dispatch(eliminarProducto({id: producto.id}));
    };

    return (
        <>
            <h1>Venta</h1>
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