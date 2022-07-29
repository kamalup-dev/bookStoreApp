import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart Slice",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },
    onAddItem(state, action) {
      const newItem = action.payload;
      const itemExists = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!itemExists) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        itemExists.quantity++;
        itemExists.totalPrice = itemExists.totalPrice + newItem.price;
      }
    },
    onRemoveItem(state, action) {
      const id = action.payload;
      const itemExists = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (itemExists) {
        if (itemExists.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          itemExists.quantity--;
          itemExists.totalPrice = itemExists.totalPrice - itemExists.price;
        }
      }
    },
  },
});



export default cartSlice.reducer;
export const cartSliceActions = cartSlice.actions;
