import React from 'react';
import { Product } from '../interfaces/types';

interface ProductProps {
    product: Product; // Definición de la interfaz para la prop product
  }


const ProductItem: React.FC<ProductProps> = ({product}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500">{product.description}</p>
      <p className="mt-2 text-green-700 font-bold">${product.price}</p>
    </div>
  );
};

export default ProductItem;