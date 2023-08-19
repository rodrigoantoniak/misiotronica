import { createSlice } from '@reduxjs/toolkit';
import usuarios from './initialState.json';

const UsuariosSlice = createSlice(
    {
        name: 'usuarios',
        initialState: usuarios,
        reducers:{
            agregarUsuario: (state, action) => {
                return {
                    ...state,
                    usuario: {
                        id: state.length,
                        nombre: action.payload.nombre,
                        usuario: action.payload.usuario,
                        activo: true
                    }
                }
            },
            eliminarUsuario: (state, action) => {
                return state.map(usuario =>
                    (usuario.id === action.payload.id)
                    ? { ...usuario, activo: false }
                    : usuario
                );
            },
        }
    }
)

export default UsuariosSlice.reducer;
export const { agregarUsuario, eliminarUsuario } =
    UsuariosSlice.actions;