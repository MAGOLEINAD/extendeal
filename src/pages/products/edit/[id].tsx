import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { Product } from '@/interfaces/types'; // Ajusta la ruta según tu estructura
import EditProductForm from '@/components/ProductForm'

const EditProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Obtén el ID del producto de los parámetros de la URL
  const [loading, setLoading] = useState<boolean>(true); // Estado para la carga
  const [product, setProduct] = useState<Product | null>(null); // Estado para el producto

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products?id=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product.');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false); // Finaliza la carga, sin importar el resultado
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleUpdateProduct = async (updatedProduct: Product) => {
    try {
      const response = await fetch(`/api/products?id=${id}`, {
        method: 'PUT', // Método PUT para actualizar el producto
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error('Error updating product.');
      }

      alert('Producto actualizado exitosamente.');
      router.push(`/products/${id}`); // Redirige a la página de detalles del producto después de editar
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Hubo un error al actualizar el producto.');
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
    <>
      <Layout>
        <EditProductForm onSubmit={handleUpdateProduct} initialProduct={product} />
      </Layout>
    </>
  );
};

export default EditProductPage;
