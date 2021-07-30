const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('In the Middleware - get /add-product');

    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log('In the Middleware - post /add-product');

    products.push({ title: req.body.title });
    console.log('In the Middleware - post /add-product, products=', products);

    res.redirect('/');
});

exports.routes = router;
exports.products = products;
