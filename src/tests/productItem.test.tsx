import { render } from '@testing-library/react';
import ProductItem from '@/components/ProductItem';

describe('ProductList Component', () => {
  test('renders ProductItem component without crashing', () => {
    render(<ProductItem product={{ id: 2, name: 'Refrigerador', description: 'Refrigerador de dos puertas con dispensador de agua y sistema de enfriamiento eficiente.', price: 799 }}/>);

  });
});