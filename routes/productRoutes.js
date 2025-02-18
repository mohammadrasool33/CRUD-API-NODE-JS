const express = require('express');
const router=express.Router();

const Product=require('./../models/Product');
const productController= require('../controllers/ProductController');

router.post('/api/products',productController.storeProduct);
router.get('/api/products',productController.getProducts);
router.get('/api/products/:id', productController.getProduct);
router.put('/api/products/:id',productController.updateProduct);
router.delete('/api/products/:id',productController.deleteProduct);

module.exports = router;


