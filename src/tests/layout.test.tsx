import React from 'react';
import { render } from '@testing-library/react';
import Layout from '@/components/Layout';

describe('Layout component', () => {
  it('renders children correctly', () => {
  
    const ChildComponent = () => <div>Test child</div>;
    
    const { getByText } = render(
      <Layout>
        <ChildComponent />
      </Layout>
    );

    expect(getByText('Test child')).toBeInTheDocument();
  });
});
