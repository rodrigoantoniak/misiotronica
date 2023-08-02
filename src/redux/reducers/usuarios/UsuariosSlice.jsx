import { createSlice } from '@reduxjs/toolkit';
import usuarios from './initialState.json';

const UsuariosSlice = createSlice(
    {
        name: 'usuarios',
        initialState: usuarios,
        reducers:{
            agregarUsuario: (state, action) => {
                state[state.length].id = state.length;
                state[state.length].nombre = action.nombre;
                state[state.length].usuario = action.usuario;
                state[state.length].activo = true;
            },
            eliminarUsuario: (state, action) => {
                state[action.id].activo = false;
            },
        }
    }
)

export default UsuariosSlice;