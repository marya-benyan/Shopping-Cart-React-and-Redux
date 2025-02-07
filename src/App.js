import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [page, setPage] = React.useState("products");

  return (
    <div>
      <nav>
        <button onClick={() => setPage("products")}>Products</button>
        <button onClick={() => setPage("cart")}>Cart</button>
      </nav>
      {page === "products" && <ProductList />}
      {page === "cart" && <Cart />}
    </div>
  );
}

export default App;
