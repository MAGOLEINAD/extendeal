import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductForm from '@/components/ProductForm';

describe('ProductForm component', () => {
  it('renders ProductForm for editing an existing product', () => {
    const product = {
      id: 1,
      name: 'Producto de prueba',
      description: 'Descripción de prueba',
      price: 99.99,
    };

    render(<ProductForm onSubmit={() => {}} initialProduct={product} />);

    // Verificar que el título sea 'Editar Producto'
    const editProductHeaders = screen.queryAllByText('Editar Producto');
    expect(editProductHeaders.length).toBe(2); // Debería haber dos elementos con este texto uno es del Header y el otro del Boton

    // Verificar que los campos estén prellenados con los valores del producto
    expect(screen.getByDisplayValue(product.name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(product.description)).toBeInTheDocument();
    expect(screen.getByDisplayValue(product.price.toString())).toBeInTheDocument();

    // Verificar que el botón de submit sea 'Editar Producto'
    const editProductButtons = screen.queryAllByRole('button', { name: 'Editar Producto' });
    expect(editProductButtons.length).toBe(1); // Debería haber solo un botón con este texto
  });
});


