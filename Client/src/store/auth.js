

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  token: null,
 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
 
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const {  authSuccess,  logout } = authSlice.actions;

export default authSlice.reducer;