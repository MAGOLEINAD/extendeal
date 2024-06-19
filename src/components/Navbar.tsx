import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 text-white w-64 h-screen flex">
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      <ul className="mt-4 space-y-2">
        <li>
          <Link href="/dashboard" legacyBehavior>
            <a className="block py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">Listado de Productos</a>
          </Link>
        </li>
        <li>
          <Link href="/products/create" legacyBehavior>
            <a className="block py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">Crear Producto</a>
          </Link>
        </li>

      </ul>
    </div>
  </nav>
);

export default Navbar;