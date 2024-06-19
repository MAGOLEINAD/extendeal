import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Product } from "../interfaces/types";
import Link from "next/link";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Llamada API
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data) )
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Listado de Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
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
