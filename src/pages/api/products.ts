import { NextApiRequest, NextApiResponse } from 'next';

let products = [
  { id: 1, name: 'Lavadora', description: 'Lavadora de carga frontal con capacidad de 8 kg. Excelente estado, super duradera', price: 399 },
  { id: 2, name: 'Refrigerador', description: 'Refrigerador de dos puertas con dispensador de agua y sistema de enfriamiento eficiente.', price: 799 },
  { id: 3, name: 'Licuadora', description: 'Licuadora de alta potencia con cuchillas de acero inoxidable y jarra resistente.', price: 59 },
  { id: 4, name: 'Microondas', description: 'Microondas digital con función de descongelado automático y varios niveles de potencia.', price: 129 },
  { id: 5, name: 'Aspiradora', description: 'Aspiradora sin bolsa con filtro HEPA y tecnología ciclónica para una limpieza eficaz.', price: 199 },
  { id: 6, name: 'Batidora', description: 'Batidora de mano con múltiples velocidades y accesorios intercambiables para cocinar fácilmente.', price: 79 },
  { id: 7, name: 'Cafetera', description: 'Cafetera de goteo programable con jarra de vidrio y capacidad para preparar hasta 12 tazas.', price: 49 },
  { id: 8, name: 'Plancha', description: 'Plancha de vapor con suela antiadherente y control de temperatura ajustable para planchar sin esfuerzo.', price: 29 },
  { id: 9, name: 'Tostadora', description: 'Tostadora de acero inoxidable con funciones de descongelado y recalentado, y ajustes de temperatura.', price: 39 },
  { id: 10, name: 'Robot de cocina', description: 'Robot de cocina multifunción con capacidad para picar, mezclar, batir y amasar alimentos.', price: 299 },
  { id: 11, name: 'Secadora de ropa', description: 'Secadora de ropa de carga frontal con sensor de humedad y diferentes programas de secado.', price: 499 },
  { id: 12, name: 'Ventilador', description: 'Ventilador de torre con control remoto y oscilación para distribuir el aire de manera uniforme.', price: 69 },
  { id: 13, name: 'Exprimidor', description: 'Exprimidor de cítricos eléctrico con filtro para pulpa y diseño ergonómico para facilitar el uso.', price: 35 },
  { id: 14, name: 'Máquina de coser', description: 'Máquina de coser electrónica con 30 tipos de puntada y accesorios incluidos.', price: 199 },
  { id: 15, name: 'Calentador eléctrico', description: 'Calentador eléctrico de pared con termostato ajustable y diseño compacto.', price: 149 },
  { id: 16, name: 'Molinillo de café', description: 'Molinillo de café eléctrico con diferentes niveles de molienda y capacidad para granos de café.', price: 79 },
  { id: 17, name: 'Plancha de pelo', description: 'Plancha de pelo profesional con placas de cerámica y control de temperatura para un alisado perfecto.', price: 89 },
  { id: 18, name: 'Radiador', description: 'Radiador de aceite con temporizador y termostato ajustable para mantener el ambiente cálido.', price: 129 },
  { id: 19, name: 'Dispensador de agua', description: 'Dispensador de agua fría y caliente con filtro integrado y diseño moderno.', price: 199 },
  { id: 20, name: 'Batidora de vaso', description: 'Batidora de vaso con jarra de vidrio y función de picado de hielo para preparar batidos y smoothies.', price: 69 },
  { id: 21, name: 'Cepillo eléctrico', description: 'Cepillo eléctrico para limpieza de suelos duros y alfombras con batería recargable.', price: 149 },
  { id: 22, name: 'Freidora de aire', description: 'Freidora de aire sin aceite con pantalla digital y recetas preprogramadas para una cocina saludable.', price: 149 },
  { id: 23, name: 'Despertador digital', description: 'Despertador digital con proyección de hora y temperatura para facilitar la visualización.', price: 19 },
  { id: 24, name: 'Humidificador ultrasónico', description: 'Humidificador ultrasónico con luz LED y control remoto para mejorar la calidad del aire.', price: 49 },
  { id: 25, name: 'Plancha de vapor vertical', description: 'Plancha de vapor vertical para prendas delicadas y cortinas con depósito de agua transparente.', price: 79 },
  { id: 26, name: 'Purificador de aire', description: 'Purificador de aire con filtro HEPA y sensor de calidad del aire para un ambiente más limpio.', price: 299 },
  { id: 27, name: 'Escoba eléctrica', description: 'Escoba eléctrica sin cable con batería recargable y función 2 en 1 para limpieza eficiente.', price: 129 },
  { id: 28, name: 'Procesador de alimentos', description: 'Procesador de alimentos con múltiples accesorios y funciones para preparar comidas variadas.', price: 249 },
  { id: 29, name: 'Hervidor eléctrico', description: 'Hervidor eléctrico de acero inoxidable con apagado automático y diseño resistente.', price: 39 },
  { id: 30, name: 'Máquina de hielo', description: 'Máquina de hacer hielo con capacidad para 12 kg diarios y sistema automático de producción.', price: 199 },
];



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {query: { id }, method} = req;

  switch (method) {
    case 'GET':
      if (id) {
        const productId = parseInt(id as string, 10);
        const product = products.find((p) => p.id === productId);
        if (product) {
          res.status(200).json(product);
        } else {
          res.status(404).json({ message: 'Producto no encontrado' });
        }
      } else {
        res.status(200).json(products);
      }
      break;
      case 'POST':
        try {
          const newProduct = { ...req.body, id: products.length + 1 };
          newProduct.price = parseInt(newProduct.price); 
          products.push(newProduct);
          res.status(201).json(newProduct);
        } catch (error) {
          res.status(500).json({ message: 'Error al crear el producto' });
        }
        break;
        case 'PUT':
      if (id) {
        const productId = parseInt(id as string, 10);
        const index = products.findIndex((p) => p.id === productId);
        if (index !== -1) {
          products[index] = { ...req.body, id: productId };
          res.status(200).json(products[index]);
        } else {
          res.status(404).json({ message: 'Producto no encontrado' });
        }
      } else {
        res.status(400).json({ message: 'Se requiere un ID para actualizar el producto' });
      }
      break;
    case 'DELETE':
      if (id) {
        const productId = parseInt(id as string, 10);
        const index = products.findIndex((p) => p.id === productId);
        if (index !== -1) {
          products.splice(index, 1);
          res.status(200).json({ message: 'Producto eliminado correctamente' });
        } else {
          res.status(404).json({ message: 'Producto no encontrado' });
        }
      } else {
        res.status(400).json({ message: 'Se requiere un ID para eliminar el producto' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Método ${method} no permitido`);
  }
}
