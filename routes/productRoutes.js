const express = require('express');
const router=express.Router();

const Product=require('./../models/Product');
const productController= require('../controllers/ProductController');

// ✅ 1️⃣ Create a Product
router.post('/api/products',productController.storeProduct);

// ✅ 2️⃣ Read All Products
router.get('/api/products',productController.getProducts);

// ✅ 3️⃣ Read a Single Product by ID
router.get('/api/products/:id', productController.getProduct);

router.put('/api/products/:id',productController.updateProduct);

router.delete('/api/products/:id',productController.deleteProduct);


module.exports = router;


