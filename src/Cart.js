import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Remove item from cart
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  // Update item quantity
  const updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
       <ul>
       {cart.map((item) => (
         <li
           key={item.id}
           style={{
             marginBottom: '20px', 
             padding: '10px', 
             borderBottom: '1px solid #ddd', 
             display: 'flex', 
             alignItems: 'center', 
           }}
         >
           <img
             src={item.imageUrl}
             alt={item.name}
             style={{ width: '200px', height: '250px', marginRight: '20px' }} 
           />
           <div>
             <h3>{item.name}</h3>
             <p>Price: ${item.price}</p>
             <p>Quantity: {item.quantity}</p>
             <button onClick={() => removeFromCart(item.id)}>Remove</button>
             <input
               type="number"
               value={item.quantity}
               onChange={(e) =>
                 updateQuantity(item.id, parseInt(e.target.value))
               }
             />
           </div>
         </li>
       ))}
     </ul>
     
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
