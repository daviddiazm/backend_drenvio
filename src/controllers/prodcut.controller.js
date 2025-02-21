const { MongoClient } = require('mongodb');
const config = require('../config/config.js');
const { getProducts } = require('../utils/GetProductsDB.js')

// me funciono el codigo pero tuve un error de cors con la base de datos
// exports.getProductsController = async (req, res) => {
//   try {
//     const products = await getProducts();
//     res.json([... products]);
//   } catch (error) {
//     console.error('Error al obtener productos:', error);
//     res.status(500).json({ message: 'Error interno del servidor' });
//   }
// }

exports.getProductsController = async (req, res) => {
  try {
    const products = [{"_id":"6750ef7cfce1f2f80959a98b","name":"Camiseta Deportiva","price":350,"category":"Ropa","stock":150,"description":"Camiseta deportiva para entrenamiento, disponible en varios colores.","brand":"FitWear","sku":"FW-TSH-001","tags":["deporte","ropa","entrenamiento"],"createdAt":"2024-11-01T10:30:00Z","updatedAt":"2024-11-02T14:00:00Z"},{"_id":"6750efb4fce1f2f80959a98d","name":"Audífonos Inalámbricos","price":1200,"category":"Electrónica","stock":50,"description":"Audífonos con cancelación de ruido y batería de larga duración.","brand":"SoundPlus","sku":"SP-HDP-501","tags":["audio","inalámbrico","tecnología"],"createdAt":"2024-11-01T11:00:00Z","updatedAt":"2024-11-02T15:00:00Z"},{"_id":"6750efbdfce1f2f80959a98f","name":"Botella de Agua Reutilizable","price":200,"category":"Hogar","stock":300,"description":"Botella de acero inoxidable con capacidad de 750 ml.","brand":"EcoHydrate","sku":"EH-BTL-003","tags":["sostenible","reutilizable","hogar"],"createdAt":"2024-11-01T12:00:00Z","updatedAt":"2024-11-02T16:00:00Z"},{"_id":"6750f014fce1f2f80959a991","name":"Lámpara de Escritorio LED","price":450,"category":"Oficina","stock":100,"description":"Lámpara ajustable con luz cálida y fría, ideal para oficina y estudio.","brand":"BrightDesk","sku":"BD-LMP-201","tags":["oficina","iluminación","LED"],"createdAt":"2024-11-01T13:00:00Z","updatedAt":"2024-11-02T17:00:00Z"},{"_id":"6750f01dfce1f2f80959a993","name":"Mochila Escolar","price":650,"category":"Accesorios","stock":200,"description":"Mochila resistente al agua, con múltiples compartimentos.","brand":"SchoolGear","sku":"SG-BPK-701","tags":["escolar","accesorios","mochila"],"createdAt":"2024-11-01T14:00:00Z","updatedAt":"2024-11-02T18:00:00Z"},{"_id":"67b657c5c5edce9a2a294041","name":"Portatil Gamer","price":14000,"category":"Tecnologia","__v":0,"brand":"Lenovo","createdAt":"2025-02-19T14:00:00Z","description":"PC gamer de alta calidad","sku":"LN-GCD-550","stock":100,"tags":["tecnologia","gaming","estudio"],"updatedAt":"2025-02-19T18:00:00Z"},{"_id":"67b75c5ebdc3a87200b5eb4e","name":"Camiseta","description":"Camiseta deportivacolor negro para hombre","price":50000,"currencyPrice":"COPS","stock":100,"category":"Ropa"}]
    res.json( products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

