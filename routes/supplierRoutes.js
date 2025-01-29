const express = require('express');
const router = express.Router();
const Doctor = require('../models/supplier');

// Create a new doctor
router.post('/suppliers', async (req, res) => {
  try {
    const newSupplier = await Supplier.create(req.body);
    res.status(201).json(newSupplier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all doctors
router.get('/suppliers', async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json(suppliers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single doctor by ID
router.get('/suppliers/:id', async (req, res) => {
  try {
    const supplier = await Doctor.findById(req.params.id);
    if (supplier) {
      res.status(200).json(supplier);
    } else {
      res.status(404).json({ message: 'supplier not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a doctor by ID
router.patch('/doctors/:id', async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a doctor by ID
router.delete('/doctors/:id', async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
