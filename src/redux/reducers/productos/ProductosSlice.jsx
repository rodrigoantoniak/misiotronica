import { createSlice } from '@reduxjs/toolkit';
import productos from './initialState.json';

const ProductosSlice = createSlice(
    {
        name: 'productos',
        initialState: productos,
        reducers:{
            agregarProducto: (state, action) => {
                state[state.length].id = state.length;
                state[state.length].nombre = action.nombre;
                state[state.length].activo = true;
            },
            eliminarProducto: (state, action) => {
                return state.map(producto =>
                    (producto.id === action.payload.id)
                    ? { ...producto, activo: false }
                    : producto
                );
            },
        }
    }
)

export default ProductosSlice.reducer;
export const { agregarProducto, eliminarProducto } =
    ProductosSlice.actions;