// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {

    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart:  (state, action) => {

        state.items.push(action.payload);

      },

    deleteFromCart: (state, action) => {
      const productIdToDelete = action.payload;
      state.items = state.items.filter(item => item.id !== productIdToDelete);

    },
 

  },
});

export const { addToCart, deleteFromCart ,setCartItems } = cartSlice.actions;
export default cartSlice.reducer;


