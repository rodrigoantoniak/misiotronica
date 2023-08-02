import { configureStore } from '@reduxjs/toolkit';
import ContactoSlice from '../reducers/contacto/ContactoSlice';
import UsuariosSlice from '../reducers/usuarios/UsuariosSlice';
import ProductosSlice from '../reducers/productos/ProductosSlice';

const Store = configureStore(
    {
        reducer: {
            contacto: ContactoSlice,
            usuarios: UsuariosSlice,
            productos: ProductosSlice,
        }
    }
);

export default Store;