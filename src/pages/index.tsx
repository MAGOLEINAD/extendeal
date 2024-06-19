import Layout from "@/components/Layout";
import React from "react";

export default function Home() {
  return (
    <>
      <Layout>
        <div
          className="flex justify-center items-center h-screen"
          style={{
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-3xl p-6 border border-gray-200 rounded-lg shadow-md bg-white opacity-90">
            <h1 className="text-3xl font-bold mb-4 text-cyan-900">¡Bienvenid@ a la Gestión de Productos!</h1>
            <p className="text-lg mb-4">
              <span className="font-bold">A la izquierda, tienes el menú.</span> Presiona en Listado de productos para listar y ver nuestros productos. Allí podrás clickear en cada uno de ellos para ver su detalle, editarlos y borrarlos. También puedes ir a "Crear Producto" para crear uno nuevo.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
