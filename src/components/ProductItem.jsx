const ProductItem = ({ name, price, inStock }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-100">
            <h2 className="text-xl font-semibold">{name}</h2>
            
            <div className="flex items-center gap-2 mt-2">
                <p className="text-gray-700">${price.toFixed(2)}</p>
                <span className={`px-3 py-1 text-sm font-bold rounded-md ${
                    inStock ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}>
                    {inStock ? "In Stock" : "Out of Stock"}
                </span>
            </div>
        </div>
    );
};

export default ProductItem;
  