

import React from "react";
import CreateProductForm from "../../components/ProductForm";
import Layout from "@/components/Layout";

const CreateProductPage: React.FC = () => {
  const handleCreateProduct = async (newProduct:any) => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error('Error al crear el producto.');
      }

      alert('Producto creado exitosamente. Puedes verlo al final del listado de productos haciendo clic en el menú o puedes crear otro más desde aquí.');

    } catch (error) {
      console.error('Error al crear el producto:', error);
      alert('Hubo un error al crear el producto.');
    }
  };
  return (
    <>
      <Layout>
        <CreateProductForm onSubmit={handleCreateProduct} />
      </Layout>
    </>
  );
};

export default CreateProductPage;
