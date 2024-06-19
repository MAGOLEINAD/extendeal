import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Product } from "../interfaces/types";
import Link from "next/link";
import ProductSearch from "./ProductSearch";



const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredProducts(products); // Mostrar todos los productos si no hay término de búsqueda
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.price.toString().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    // Llamada API
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Mostrar todos los productos al principio
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Listado de Productos</h1>
      <ProductSearch onSearch={handleSearch} filteredProducts={filteredProducts} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Link  key={product.id} href={`/products/${product.id}`} legacyBehavior>
            <a>
              <ProductItem product={product} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
