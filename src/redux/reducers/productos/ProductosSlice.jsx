import { createSlice } from '@reduxjs/toolkit';
import productos from './initialState.json';

const ProductosSlice = createSlice(
    {
        name: 'productos',
        initialState: productos,
        reducers:{
            agregarProducto: (state, action) => {
                return [
                    ...state,
                    {
                        id: state.length + 1,
                        nombre: action.payload.nombre,
                        activo: true
                    }
                ]
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