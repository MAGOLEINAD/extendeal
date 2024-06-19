import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ProductDetail from '../../components/ProductDetail';

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Detalle de Producto</h1>
        <ProductDetail productId={id as string}  />
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
