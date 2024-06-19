import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import '@testing-library/jest-dom'

describe("Navbar Component", () => {
    test("renders Navbar component with correct links", () => {
      render(<Navbar />);
  
      // Verificar el enlace de Dashboard
      const dashboardLink = screen.getByText(/Dashboard/i);
      expect(dashboardLink).toBeInTheDocument();
      expect(dashboardLink).toHaveAttribute("href", "/");
  
      // Verificar el enlace de Listado de Productos
      const productListLink = screen.getByText(/Listado de Productos/i);
      expect(productListLink).toBeInTheDocument();
      expect(productListLink).toHaveAttribute("href", "/dashboard");
  
      // Verificar el enlace de Crear Producto
      const createProductLink = screen.getByText(/Crear Producto/i);
      expect(createProductLink).toBeInTheDocument();
      expect(createProductLink).toHaveAttribute("href", "/products/create");
    });
  });