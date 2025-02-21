const express = require('express');
const router = express.Router();
const productController = require('../controllers/prodcut.controller');

router.get('/', productController.getProductsController);

module.exports = router;