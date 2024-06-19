import React, { useState } from "react";
import { Product } from '../interfaces/types';

interface Props {
  onSearch: (searchTerm: string) => void;
  filteredProducts: Product[] 
}

const ProductSearch: React.FC<Props> = ({ onSearch,filteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-8">
      <label htmlFor="search" className="block text-sm font-medium text-gray-700">Buscar:</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Ingrese término de búsqueda"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2"
        />
       </div>
      {/* Mensaje de no hay coincidencias */}
      {searchTerm !== "" && (
        <p className="mt-2 text-sm text-gray-500">
          {filteredProducts.length === 0 ? "No hay coincidencias con esos filtros." : ""}
        </p>
      )}
    </div>
  );
};

export default ProductSearch;