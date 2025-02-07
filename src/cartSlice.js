const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [], // Load cart from localStorage
  };
  
  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        const itemExists = state.cart.find((item) => item.id === action.payload.id);
        if (itemExists) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
  
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
  
      case "UPDATE_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
  
      default:
        return state;
    }
  }
  
  export default cartReducer;
  