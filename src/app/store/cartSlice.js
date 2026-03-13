import { createSlice } from '@reduxjs/toolkit';
import ImageStand from '../assets/products/stand.png';

const initialState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1, addStand = false } = action.payload;
      
      // Create unique identifier including stand option
      const itemKey = `${product.id}-${addStand}`;
      
      const existingItem = state.items.find(
        item => item.id === product.id && item.addStand === addStand
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description || '',
          features: product.features || [],
          specs: product.specs || {},
          tag: product.tag || '',
          quantity,
          addStand,
          standPrice: addStand ? 45 : 0,
          standProduct: addStand ? {
            id: 'stand-01',
            name: 'Foldable Metal Stand',
            price: 45,
            image: '/assets/products/stand.png'
          } : null
        });
      }

      // Recalculate totals
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + (item.price + (item.standPrice || 0)) * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const { id, addStand } = action.payload;
      state.items = state.items.filter(
        item => !(item.id === id && item.addStand === addStand)
      );

      // Recalculate totals
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + (item.price + (item.standPrice || 0)) * item.quantity,
        0
      );
    },

    updateQuantity: (state, action) => {
      const { id, addStand, quantity } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.addStand === addStand
      );

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(
            item => !(item.id === id && item.addStand === addStand)
          );
        } else {
          item.quantity = quantity;
        }
      }

      // Recalculate totals
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + (item.price + (item.standPrice || 0)) * item.quantity,
        0
      );
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
