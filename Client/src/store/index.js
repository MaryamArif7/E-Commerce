import { configureStore } from '@reduxjs/toolkit';
const initialState = {

  };
  
  const reducer = (state = initialState, action) => {
    
  };
const counterStore=configureStore({reducer:reducer});
export default counterStore;