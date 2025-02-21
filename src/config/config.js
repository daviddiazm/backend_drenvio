const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT || 3000,
  mongo_url : process.env.URL_DATABASE
}