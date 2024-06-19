import React from 'react';
import { render } from '@testing-library/react';
import Layout from '@/components/Layout';

describe('Layout component', () => {
  it('renders children correctly', () => {
  
    const ChildComponent = () => <div>Test child</div>;
    
    // Render Layout with mocked children
    const { getByText } = render(
      <Layout>
        <ChildComponent />
      </Layout>
    );

    // Assert child component is rendered
    expect(getByText('Test child')).toBeInTheDocument();
  });
});
