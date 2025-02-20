const config  = require('../config/config.js');
const mongoose = require('mongoose')

const conectionDB = async () => {
  try {
    console.log("url", config.mongo_url);
    
    await mongoose.connect(config.mongo_url , {
      dbName: 'tienda'
    })
    console.log("si hay conexion");
    
  } catch (error) {
    console.log(error);
  }
}

module.exports = conectionDB