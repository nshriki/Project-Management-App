import { useState } from "react";
import ProductItem from "./ProductItem";

const ProductManager = ({ products, setProducts }) => {
  const [showInStock, setShowInStock] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", inStock: true });

  const toggleFilter = () => {
    setShowInStock(!showInStock);
  };

  const addProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const newItem = {
      id: products.length + 1,
      ...newProduct,
      price: parseFloat(newProduct.price),
    };

    setProducts([...products, newItem]);
    setNewProduct({ name: "", price: "", inStock: true });
  };

  const filteredProducts = showInStock ? products.filter((p) => p.inStock) : products;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-96">
      <h2 className="text-xl font-semibold mb-4">Product Manager</h2>
      <button
        onClick={toggleFilter}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
        {showInStock ? "Show All" : "Show In-Stock Only"}
      </button>

      <div className="space-y-3">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-6">Add a Product</h3>
      <form onSubmit={addProduct} className="mt-3 space-y-3">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="w-full p-2 border rounded"/>
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="w-full p-2 border rounded"/>
        <select
          value={newProduct.inStock}
          onChange={(e) => setNewProduct({ ...newProduct, inStock: e.target.value === "true" })}
          className="w-full p-2 border rounded">
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
        </select>
        
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductManager;
