import { useState } from "react";
import ProductManager from "./components/ProductManager";

const App = () => {
  const initialProducts = [
    { id: 1, name: "ENHYPEN Orange Blood", price: 16, inStock: true },
    { id: 2, name: "ENHYPEN Lightstick V2", price: 41, inStock: false },
  ];

  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <ProductManager products={products} setProducts={setProducts} />
    </div>
  );
};

export default App;
