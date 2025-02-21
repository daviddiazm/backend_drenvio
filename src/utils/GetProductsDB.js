
const { MongoClient } = require('mongodb');
const config = require('../config/config');


const uri = config.mongo_url
const client = new MongoClient(uri);

async function getProducts() {
  try {
    await client.connect();
    const database = client.db('tienda');
    const collection = database.collection('productos');

    const products = await collection.find({}).toArray();
    return products;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  } finally {
    await client.close();
  }
}

module.exports = { getProducts };