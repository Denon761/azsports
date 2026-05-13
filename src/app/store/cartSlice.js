import { createSlice } from '@reduxjs/toolkit';

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
      const { product, quantity = 1, size = null, price: customPrice } = action.payload;
      
      const itemKey = size ? `${product.id}-${size}` : product.id;
      
      const existingItem = state.items.find(
        item => (size ? `${item.id}-${item.size}` : item.id) === itemKey
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const sizeData = size && product.sizes 
          ? product.sizes.find(s => s.size === size) 
          : null;
        
        // Use explicitly provided price, or derive from size or product
        const itemPrice = customPrice !== undefined 
          ? customPrice 
          : (sizeData ? sizeData.price : product.price);
        
        state.items.push({
          id: product.id,
          name: product.name,
          price: itemPrice,
          image: product.image?.src || product.image || null,
          description: product.description || '',
          features: product.features || [],
          specs: sizeData ? sizeData.specs : product.specs || {},
          tag: product.tag || '',
          type: product.type || '',
          seriesNumber: product.seriesNumber || '',
          country: product.country || '',
          color: product.color || '',
          size: size || null,
          quantity,
        });
      }

      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      const itemKey = size ? `${id}-${size}` : id;
      state.items = state.items.filter(
        item => (size ? `${item.id}-${item.size}` : item.id) !== itemKey
      );

      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    updateQuantity: (state, action) => {
      const { id, size, quantity } = action.payload;
      const itemKey = size ? `${id}-${size}` : id;
      const item = state.items.find(
        item => (size ? `${item.id}-${item.size}` : item.id) === itemKey
      );

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(
            i => (size ? `${i.id}-${i.size}` : i.id) !== itemKey
          );
        } else {
          item.quantity = quantity;
        }
      }

      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
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