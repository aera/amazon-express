const express = require('express');
const router = express.Router();
const {Product} = require('../models');

// products#index PATH: /products METHOD: GET
router.get('/', function(req, res, next) {
  Product
    .all()
    .then(products => {
      // To pass a variable to a template, pass
      // an object as a second argument to res.render.
      // All the properties of that object will be available
      // as local variables inside of the template.
      res.render('products/index', {products});
    })
});

// products#show PATH: /products/:id METHOD: GET
router.get('/:id', (req, res, next) => {
  // To get params from Express, use req.params. It's a property
  // of the request object. It doesn't contain form data. It only
  // has params related to the path such as `id`, `product_id`, etc.
  const {id} = req.params;
  Product
    .findById(id)
    .then(product => {
      res.render('products/show', {product});
    })
    .catch(next)
    //.catch(error => next(error))
});

module.exports = router;
