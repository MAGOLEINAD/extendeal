import React, { useState, useEffect } from 'react';
import { Product } from '../interfaces/types';

interface FormProps {
  onSubmit: (product: Product) => void;
  initialProduct?: Product; 
}

const ProductForm: React.FC<FormProps> = ({ onSubmit, initialProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setName(initialProduct.name);
      setDescription(initialProduct.description);
      setPrice(initialProduct.price.toString());
    }
  }, [initialProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct: Product = {
      id: initialProduct?.id,
      name,
      description,
      price: parseFloat(price),
    };
    if (onSubmit) {
      onSubmit(updatedProduct);
    }
  };

  return (
    <>
      <h1 className='text-center text-3xl uppercase font-bold p-4'>
        {initialProduct ? 'Editar Producto' : 'Crear Producto'}
      </h1>
      <form
        onSubmit={handleSubmit}
        className='max-w-5xl w-full mx-auto bg-white shadow-md rounded-lg p-6 space-y-4'
      >
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
            Nombre del Producto
          </label>
          <input
            type='text'
            id='name'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Ingrese el nombre del producto'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
            Descripción del Producto
          </label>
          <textarea
            id='description'
            rows={3}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Ingrese la descripción del producto'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='price' className='block text-sm font-medium text-gray-700'>
            Precio del Producto
          </label>
          <input
            type='number'
            id='price'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Ingrese el precio del producto'
            value={price}
            inputMode='numeric'
            pattern='[0-9]*'
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button
          type='submit'
          className='w-full uppercase bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          {initialProduct ? 'Editar Producto' : 'Crear Producto'}
        </button>
      </form>
    </>
  );
};

export default ProductForm;
