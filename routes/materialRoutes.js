const express = require('express');
const router = express.Router();
const Material = require('../models/material');

// Create a new material
router.post('/materials', async (req, res) => {
  try {
    // Convert the name to lowercase for case-insensitive comparison
    const name = req.body.name.toLowerCase();
    const existingMaterial = await Material.findOne({ name: name });
    
    if (existingMaterial) {
      res.render('home', { message: 'A material with this name already exists' });
    } else {
      // Create a new material with the name in lowercase
      const newMaterial = new Material({
        ...req.body,
        name: name
      });
      await newMaterial.save();
      res.render('home', { message: 'Material created successfully' }); // Render home.ejs
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all materials or a single material by name
router.get('/materials', async (req, res) => {
  try {
    if (req.query.name) {
      // A name is provided in the query string, find a material by name
      const material = await Material.findOne({ name: req.query.name.toLowerCase() });
      if (material) {
        res.render('materials', { materials: [material] }); // Render materials.ejs with the material's data
      } else {
        res.render('home', { error: 'No material exists' });
      }
    } else if (req.query.date) {
      const date = new Date(req.query.date);
      const materials = await Material.find({ date: date });
      res.render('materials', { materials: materials });
    } else {
      // Implement pagination for fetching all materials
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const materials = await Material.find().skip(skip).limit(limit);
      const totalMaterials = await Material.countDocuments();

      res.render('materials', {
        materials: materials,
        currentPage: page,
        totalPages: Math.ceil(totalMaterials / limit)
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// roite to open update material
router.get('/update-material/:name', async (req, res) => {
  try {
    const material = await Material.findOne({ name: req.params.name });
    if (material) {
      var date = new Date(material.date);
      var formattedDate = date.getFullYear() + '-' +
                          ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
                          ('0' + date.getDate()).slice(-2);

      // Render the EJS template with the patient's data
      res.render('update-material', { material: material, formattedDate: formattedDate });
      // res.render('update-patient', { patient: patient });
    } else {
      res.status(404).send('materialnot found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
// Update a patient by name
router.patch('/materials/:name', async (req, res) => {
  try {
    const updatedMaterial = await Material.findOneAndUpdate({ name: req.params.name }, req.body, { new: true });
    if (updatedMaterial) {
      res.status(200).json(updatedMaterial);
    } else {
      res.status(404).json({ message: 'Materialnot found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// Delete a material by name
router.delete('/materials/:name', async (req, res) => {
  try {
    const deletedMaterial = await Material.findOneAndDelete({ name: req.params.name.toLowerCase() });
    if (deletedMaterial) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Material not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;