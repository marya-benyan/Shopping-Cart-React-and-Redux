import { createStore } from "redux";
import cartReducer from "./cartSlice";

// Create store
const store = createStore(cartReducer);

// Save cart data to localStorage on any change
store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});

export default store;
