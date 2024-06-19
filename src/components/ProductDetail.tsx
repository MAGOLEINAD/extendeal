import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { Product } from '../interfaces/types';

interface Props {
  productId: string; 
}

const ProductDetail: React.FC<Props> = ({ productId }) => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Estado para mostrar carga
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products?id=${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product.');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false); 
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleEditProduct = () => {
    if (productId) {
      router.push(`/products/edit/${productId}`);
    }
  };

  const handleDeleteProduct = async () => {
    if (window.confirm(`¿Estás seguro de borrar el producto "${product?.name}"?`)) {
      try {
        const response = await fetch(`/api/products?id=${productId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete product.');
        }
        alert('Producto eliminado correctamente.');
        router.push('/dashboard'); // Redirecciono al listado de productos después de borrar
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  if (loading) {
    return (
      <Layout>
        <p className="text-center mt-4">Cargando...</p>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <p className="text-center mt-4">Producto no encontrado.</p>
      </Layout>
    );
  }

  return (

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="font-bold text-lg mb-2">${product.price}</p>
          <div className="flex mt-4">
            <button
              onClick={handleEditProduct}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md mr-4 focus:outline-none"
            >
              Editar
            </button>
            <button
              onClick={handleDeleteProduct}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md focus:outline-none"
            >
              Borrar
            </button>
          </div>
        </div>
      </div>

  );
};

export default ProductDetail;
