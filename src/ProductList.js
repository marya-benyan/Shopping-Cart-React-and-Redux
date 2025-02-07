import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// استيراد ملف JSON مباشرة من src/data
import hairProducts from "./hairProducts.json";

const ProductList = () => {
  const [products, setProducts] = useState([]); // لتخزين المنتجات
  const dispatch = useDispatch();

  // جلب المنتجات من ملف hairProducts.json
  useEffect(() => {
    try {
      // تعيين المنتجات المستوردة من JSON مباشرة
      setProducts(hairProducts);
    } catch (err) {
      console.error("Error loading products:", err);
    }
  }, []);

  // إضافة المنتج إلى السلة
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div>
      <h1>Hair Products</h1>

      {/* عرض المنتجات */}
      <ul>
      {products.map((product) => (
  <li key={product.id}>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <img src={product.imageUrl} alt={product.name} style={{ width: '200px', height:'250px' }} />
    <p>Price: ${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </li>
))}
      </ul>

      {/* إذا لم توجد منتجات */}
      {products.length === 0 && <p>Loading products...</p>}
    </div>
  );
};

export default ProductList;
