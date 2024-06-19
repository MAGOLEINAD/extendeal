import React from 'react';
import Layout from '../../components/Layout';
import ProductList from '@/components/ProductList';


const Dashboard: React.FC = () => {
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default Dashboard;