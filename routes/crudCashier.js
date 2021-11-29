const express = require('express');
const router = express.Router();

// Cajero Model
const Cashier = require('../models/cashier');

// OBTENER TODOS LOS Cajeros
router.get('/', async (req, res) => {
  const cashiers = await Cashier.find();
  res.json(cashiers);
});

// OBTENER UN SOLO Cajero
router.get('/:id', async (req, res) => {
  const cashiers = await Cashier.findById(req.params.id);
  res.json(cashiers);
});

// AGREGAR un nuevo Cajero
router.post('/', async (req, res) => {
  const {name, lastName, dateOfBirth, emailAddress, rol, status, gender } = req.body;
  const cashiers = new Cashier({name, lastName, dateOfBirth, emailAddress, rol, status, gender});
  await cashiers.save();
  res.json({status: 1, mssg: 'Cashier Saved'});
  /* if (cashiers.save() == true)
    res.json({status: 1, mssg: 'Cashier Saved'});
  else (cashiers.save() == false)
    res.json({status: -1, mssg: 'Cashier Not Saved'}); */
});


// ACTUALIZAR un nuevo Cajero
router.put('/:id', async (req, res) => {
  const {name, lastName, dateOfBirth, emailAddress, rol, status, gender } = req.body;
  const newCashier = {name, lastName, dateOfBirth, emailAddress, rol, status, gender};
  await Cashier.findByIdAndUpdate(req.params.id, newCashier);
  res.json({status: 1, mssg: 'Cashier Updated'});
  /* if (Cashier.findByIdAndUpdate(req.params.id, newCashier) == true)
    res.json({status: 1, mssg: 'Cashier Updated'});
  else (Cashier.findByIdAndUpdate(req.params.id, newCashier) == false)
    res.json({status: -1, mssg: 'Cashier Not Updated'}); */
});

// ELIMINAR un Cajero
router.delete('/:id', async (req, res) => {
  await Cashier.findByIdAndRemove(req.params.id);
  res.json({status: 1, mssg: 'Cashier Deleted'});
  /* if (Cashier.findByIdAndRemove(req.params.id) == true)
    res.json({status: 1, mssg: 'Cashier Deleted'});
  else (Cashier.findByIdAndRemove(req.params.id) == false)
    res.json({status: -1, mssg: 'Cashier Not Deleted'}); */
});

module.exports = router;