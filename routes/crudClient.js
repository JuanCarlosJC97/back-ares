const express = require('express');
const router = express.Router();

// Cliente Model
const Client = require('../models/client');

// OBTENER TODOS LOS Clientes
router.get('/', async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

// OBTENER UN SOLO cliente
router.get('/:id', async (req, res) => {
  const clients = await Client.findById(req.params.id);
  res.json(clients);
});

// AGREGAR un nuevo cliente
router.post('/', async (req, res) => {
  const { name, lastName, dateOfBirth, emailAddress, rol, status, gender } = req.body;
  const clients = new Client({name, lastName, dateOfBirth, emailAddress, rol, status, gender});
  await clients.save();
  res.json({status: 1, mssg: 'Client Saved'});
  /* if (clients.save() == true)
    res.json({status: 1, mssg: 'Client Saved'});
  else (clients.save() == false)
    res.json({status: -1, mssg: 'Client Not Saved'}); */
});


// ACTUALIZAR un nuevo cliente
router.put('/:id', async (req, res) => {
  const { name, lastName, dateOfBirth, emailAddress, rol, status, gender } = req.body;
  const newClient = {name, lastName, dateOfBirth, emailAddress, rol, status, gender};
  await Client.findByIdAndUpdate(req.params.id, newClient);
  res.json({status: 1, mssg: 'Client Updated'});
  /* if (Client.findByIdAndUpdate(req.params.id, newClient) == true)
    res.json({status: 1, mssg: 'Client Updated'});
  else (Client.findByIdAndUpdate(req.params.id, newClient) == false)
    res.json({status: -1, mssg: 'Client Not Updated'}); */
});

// ELIMINAR un cliente
router.delete('/:id', async (req, res) => {
  await Client.findByIdAndRemove(req.params.id);
  res.json({status: 1, mssg: 'Product Deleted'});
  /* if (Product.findByIdAndRemove(req.params.id) == true)
    res.json({status: 1, mssg: 'Product Deleted'});
  else (Product.findByIdAndRemove(req.params.id) == false)
    res.json({status: -1, mssg: 'Product Not Deleted'}); */
});

module.exports = router;