const express = require('express');
const router = express.Router();

// Producto Model
const Product = require('../models/prod');

// OBTENER UN SOLO producto
router.get('/:id', async (req, res) => {
  const products = await Product.findById(req.params.id);
  res.json(products);
});

// OBTENER TODOS LOS productos
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// AGREGAR un nuevo producto
router.post('/', async (req, res) => {
  const { code, name, qty, price, realPrice, marca, type } = req.body;
  const products = new Product({code, name, qty, price, realPrice, marca, type});
  await products.save();
  res.json({status: 1, mssg: 'Product Saved'});
});


// ACTUALIZAR un nuevo producto
router.put('/:id', async (req, res) => {
  const { code, name, qty, price, realPrice, marca, type } = req.body;
  const newProduct = {code, name, qty, price, realPrice, marca, type};
  await Product.findByIdAndUpdate(req.params.id, newProduct);
  res.json({status: 1, mssg: 'Product Updated'});
  /* if (Product.findByIdAndUpdate(req.params.id, newProduct) == true)
    res.json({status: 1, mssg: 'Product Updated'});
  else (Product.findByIdAndUpdate(req.params.id, newProduct) == false)
    res.json({status: -1, mssg: 'Product Not Updated'}); */
});

// ELIMINAR un producto
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({status: 1, mssg: 'Product Deleted'});
  /* if (Product.findByIdAndRemove(req.params.id) == true)
    res.json({status: 1, mssg: 'Product Deleted'});
  else (Product.findByIdAndRemove(req.params.id) == false)
    res.json({status: -1, mssg: 'Product Not Deleted'}); */
});

module.exports = router;